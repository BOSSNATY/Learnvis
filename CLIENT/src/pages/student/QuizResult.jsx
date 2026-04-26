import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import StudentLayout from "../../components/StudentLayout";
import {
  ArrowLeft,
  CheckCircle,
  X,
  Target,
  TrendingUp,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const QuizResult = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const { results } = useApp();

  // Mock detailed result
  const result = {
    id: quizId,
    quizName: "Motion and Kinematics",
    score: 85,
    total: 100,
    date: "2024-03-15",
    time: "14:30",
    questionsCorrect: 17,
    totalQuestions: 20,
    timeTaken: "12:45",
    breakdown: [
      { type: "conceptual", correct: 5, total: 6, color: "blue" },
      { type: "explanation", correct: 4, total: 5, color: "green" },
      { type: "application", correct: 8, total: 9, color: "yellow" },
    ],
    weakAreas: ["Newton's Third Law", "Vector decomposition"],
    strengths: ["Kinematics equations", "Graph interpretation"],
    recommendations: [
      "Review the section on Newton's Laws",
      "Practice more vector problems",
      "Try the advanced motion problems",
    ],
  };

  return (
    <StudentLayout>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/student/results")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Results</span>
        </button>

        {/* Header Card */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">{result.quizName}</h1>
              <p className="text-gray-400">
                Completed on {result.date} at {result.time}
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-green-400">
                {result.score}%
              </div>
              <p className="text-gray-400 text-sm">
                {result.questionsCorrect}/{result.totalQuestions} correct
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Breakdown */}
          <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="text-blue-400" size={20} />
              Performance Breakdown
            </h2>
            <div className="space-y-4">
              {result.breakdown.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 capitalize">
                      {item.type}
                    </span>
                    <span className="text-gray-400">
                      {item.correct}/{item.total}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${item.color}-500 rounded-full`}
                      style={{ width: `${(item.correct / item.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">
                  {result.timeTaken}
                </div>
                <div className="text-gray-400 text-sm">Time Taken</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400">
                  {Math.round(
                    (result.questionsCorrect / result.totalQuestions) * 100,
                  )}
                  %
                </div>
                <div className="text-gray-400 text-sm">Accuracy</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">+15</div>
                <div className="text-gray-400 text-sm">XP Earned</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">#12</div>
                <div className="text-gray-400 text-sm">Leaderboard</div>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-400" size={20} />
              Strengths
            </h2>
            <div className="space-y-2">
              {result.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle size={16} className="text-green-400" />
                  {strength}
                </div>
              ))}
            </div>
          </div>

          {/* Areas to Improve */}
          <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-yellow-400" size={20} />
              Areas to Improve
            </h2>
            <div className="space-y-2">
              {result.weakAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <X size={16} className="text-red-400" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/20 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="text-purple-400" size={20} />
            Recommended Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {result.recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 cursor-pointer transition-all"
              >
                <p className="text-gray-300 text-sm">{rec}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => navigate("/student/subjects/1")}
            className="mt-4 w-full py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
          >
            Continue Learning
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default QuizResult;
