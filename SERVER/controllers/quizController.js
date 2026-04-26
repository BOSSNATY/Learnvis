const pool = require("../config/db");
const { GoogleGenAI } = require("@google/genai"); // Use the correct import
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

exports.generateAIQuiz = async (req, res) => {
  const { topicId } = req.body;
  const connection = await pool.getConnection();

  try {
    // 1. Get Topic Details
    const [topics] = await connection.execute(
      "SELECT title FROM topics WHERE id = ?",
      [topicId],
    );
    if (topics.length === 0)
      return res.status(404).json({ error: "Topic not found" });
    const topicTitle = topics[0].title;

    // 2. Call Gemini using the new SDK syntax
    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Generate a 5-question multiple choice quiz about "${topicTitle}". 
                    Each question must have 4 options and one correct answer.
                    Categorize each as: "conceptual", "calculation", or "application".
                    Return valid JSON ONLY in this format:
                    {
                      "questions": [
                        {
                          "text": "string",
                          "category": "conceptual/calculation/application",
                          "options": [
                            {"text": "string", "isCorrect": boolean}
                          ]
                        }
                      ]
                    }`,
            },
          ],
        },
      ],
    });

    // 3. Parse and Save
    const aiResponse = JSON.parse(result.text);

    await connection.beginTransaction();

    const [quizResult] = await connection.execute(
      'INSERT INTO quizzes (topic_id, generated_by) VALUES (?, "ai")',
      [topicId],
    );
    const quizId = quizResult.insertId;

    for (const q of aiResponse.questions) {
      const [qResult] = await connection.execute(
        "INSERT INTO questions (quiz_id, question_text, cognitive_category) VALUES (?, ?, ?)",
        [quizId, q.text, q.category],
      );
      const questionId = qResult.insertId;

      for (const opt of q.options) {
        await connection.execute(
          "INSERT INTO question_options (question_id, option_text, is_correct) VALUES (?, ?, ?)",
          [questionId, opt.text, opt.isCorrect],
        );
      }
    }

    await connection.commit();
    res.status(201).json({ message: "Quiz ready", quizId });
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("Learnvis Error:", error);
    res.status(500).json({ error: "AI logic failed" });
  } finally {
    if (connection) connection.release();
  }
};
exports.submitQuiz = async (req, res) => {
  const { quizId, answers } = req.body;
  const userId = req.user.userId; // From authMiddleware
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. Create a Quiz Attempt record
    const [attemptResult] = await connection.execute(
      "INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (?, ?)",
      [userId, quizId],
    );
    const attemptId = attemptResult.insertId;

    let totalCorrect = 0;
    const resultsMetadata = [];

    // 2. Check each answer
    for (const ans of answers) {
      // Fetch the correct option and category for this question
      const [qData] = await connection.execute(
        `SELECT qo.id as correct_option_id, q.cognitive_category 
                 FROM questions q 
                 JOIN question_options qo ON q.id = qo.question_id 
                 WHERE q.id = ? AND qo.is_correct = 1`,
        [ans.questionId],
      );

      const isCorrect = qData[0].correct_option_id === ans.optionId;
      if (isCorrect) totalCorrect++;

      // Save the individual answer
      await connection.execute(
        "INSERT INTO answers (attempt_id, question_id, selected_option_id, is_correct) VALUES (?, ?, ?, ?)",
        [attemptId, ans.questionId, ans.optionId, isCorrect],
      );

      resultsMetadata.push({
        questionId: ans.questionId,
        category: qData[0].cognitive_category,
        isCorrect,
      });
    }

    // 3. Finalize the score
    const finalScore = (totalCorrect / answers.length) * 100;
    await connection.execute(
      "UPDATE quiz_attempts SET score = ?, finished_at = CURRENT_TIMESTAMP WHERE id = ?",
      [finalScore, attemptId],
    );

    await connection.commit();

    res.status(200).json({
      message: "Quiz submitted successfully",
      attemptId,
      score: finalScore,
      breakdown: resultsMetadata,
    });
  } catch (error) {
    await connection.rollback();
    console.error("Submission Error:", error);
    res.status(500).json({ error: "Failed to submit quiz" });
  } finally {
    connection.release();
  }
};
exports.getAIAnalysis = async (req, res) => {
  const { attemptId } = req.params;
  const connection = await pool.getConnection();

  try {
    // 1. Fetch the attempt data + question categories
    const [results] = await connection.execute(
      `
            SELECT q.question_text, q.cognitive_category, a.is_correct, t.title as topic_title
            FROM answers a
            JOIN questions q ON a.question_id = q.id
            JOIN quiz_attempts qa ON a.attempt_id = qa.id
            JOIN topics t ON q.quiz_id = t.id -- Adjusting for your schema
            WHERE a.attempt_id = ?`,
      [attemptId],
    );

    if (results.length === 0)
      return res.status(404).json({ error: "No data found for this attempt." });

    const topic = results[0].topic_title;

    // 2. Prepare the payload for Gemini
    const performanceSummary = results.map((r) => ({
      question: r.question_text,
      category: r.cognitive_category,
      status: r.is_correct ? "Correct" : "Incorrect",
    }));

    // 3. Call Gemini 3.1 Flash Lite
    const result = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `As an expert tutor, analyze these results for a quiz on "${topic}":
                    ${JSON.stringify(performanceSummary)}
                    
                    Provide a JSON response with:
                    1. "weakness": Identify exactly what the student is struggling with (e.g., "Applying formulas in multi-step problems").
                    2. "improvement_tip": A specific actionable advice.
                    3. "recommendation": Suggest if they should "Revisit Basics", "Practice More", or "Move to Advanced".`,
            },
          ],
        },
      ],
    });

    const analysis = JSON.parse(result.text);

    // 4. Save analysis to the database
    await connection.execute(
      "INSERT INTO quiz_results (attempt_id, weakness_analysis, recommendation) VALUES (?, ?, ?)",
      [attemptId, analysis.weakness, analysis.recommendation],
    );

    res.json({ attemptId, ...analysis });
  } catch (error) {
    console.error("Analysis Error:", error);
    res.status(500).json({ error: "Could not generate AI feedback." });
  } finally {
    connection.release();
  }
};
