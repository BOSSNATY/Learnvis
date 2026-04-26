import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import StudentLayout from "../../components/StudentLayout";
import { ArrowLeft, Clock, CheckCircle, Play, Lock, Star } from "lucide-react";

const TopicSelection = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
  const { getSubjectById, getTopicsBySubject } = useApp();

  const subject = getSubjectById(subjectId);
  const topics = getTopicsBySubject(subjectId);

  if (!subject) {
    return (
      <StudentLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">Subject not found</h2>
          <button
            onClick={() => navigate("/student/subjects")}
            className="text-blue-400 hover:underline"
          >
            Back to subjects
          </button>
        </div>
      </StudentLayout>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400 bg-green-600/10";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-600/10";
      case "Advanced":
        return "text-red-400 bg-red-600/10";
      default:
        return "text-gray-400 bg-gray-600/10";
    }
  };

  return (
    <StudentLayout>
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/student/subjects")}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Subjects</span>
        </button>

        {/* Subject Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
          <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
          <p className="text-gray-400 mb-4">{subject.description}</p>
          <div className="flex items-center gap-6">
            <div className="text-sm">
              <span className="text-gray-400">Progress:</span>{" "}
              <span className="text-white font-semibold">
                {subject.progress}%
              </span>
            </div>
            <div className="flex-1 max-w-xs h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Topics List */}
        <div className="space-y-4">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              onClick={() =>
                topic.completed !== false &&
                navigate(`/student/learn/${topic.id}`)
              }
              className={`bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 transition-all ${
                topic.completed !== false
                  ? "hover:border-blue-500/30 cursor-pointer"
                  : "opacity-60"
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Topic Number / Status */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    topic.completed
                      ? "bg-green-600/20"
                      : index === 0
                        ? "bg-blue-600/20"
                        : "bg-gray-700/50"
                  }`}
                >
                  {topic.completed ? (
                    <CheckCircle className="text-green-400" size={24} />
                  ) : index === 0 ? (
                    <Play className="text-blue-400" size={24} />
                  ) : (
                    <Lock className="text-gray-500" size={20} />
                  )}
                </div>

                {/* Topic Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{topic.title}</h3>
                    {topic.completed && (
                      <span className="px-2 py-0.5 bg-green-600/20 text-green-400 text-xs rounded-full">
                        Completed
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    {topic.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(
                        topic.difficulty,
                      )}`}
                    >
                      {topic.difficulty}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{topic.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex-shrink-0">
                  {topic.completed ? (
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={
                              star <= 2
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-600"
                            }
                          />
                        ))}
                      </div>
                      <button className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-xl text-sm font-medium hover:bg-blue-600/30 transition-all">
                        Review
                      </button>
                    </div>
                  ) : index === 0 || topics[index - 1]?.completed ? (
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl text-sm font-semibold transition-all">
                      Start Learning
                    </button>
                  ) : (
                    <span className="text-gray-500 text-sm">
                      Complete previous topic
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quiz CTA */}
        <div className="mt-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold mb-2">Ready for a Challenge?</h3>
          <p className="text-gray-400 mb-4">
            Test your knowledge with an AI-generated quiz
          </p>
          <button
            onClick={() => navigate(`/student/quiz/${topics[0]?.id}`)}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold transition-all"
          >
            Take a Quiz
          </button>
        </div>
      </div>
    </StudentLayout>
  );
};

export default TopicSelection;
