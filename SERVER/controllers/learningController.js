const pool = require("../config/db");

exports.getAllSubjects = async (req, res) => {
  try {
    const [subjects] = await pool.execute("SELECT * FROM subjects");
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: "Database error fetching subjects" });
  }
};

exports.getTopicsBySubject = async (req, res) => {
  const { subjectId } = req.params;
  try {
    const [topics] = await pool.execute(
      "SELECT * FROM topics WHERE subject_id = ?",
      [subjectId],
    );
    res.json(topics);
  } catch (err) {
    res.status(500).json({ error: "Database error fetching topics" });
  }
};

exports.getTopicContent = async (req, res) => {
  const { topicId } = req.params;
  try {
    const [content] = await pool.execute(
      "SELECT * FROM content WHERE topic_id = ?",
      [topicId],
    );
    res.json(content[0] || { message: "No content available for this topic." });
  } catch (err) {
    res.status(500).json({ error: "Database error fetching content" });
  }
};
