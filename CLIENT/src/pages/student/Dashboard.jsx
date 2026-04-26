import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import StudentLayout from "../../components/StudentLayout";
import {
  BookOpen,
  Clock,
  TrendingUp,
  Trophy,
  ChevronRight,
  Play,
  BarChart3,
  Target,
  Flame,
  Calendar,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { subjects, results, currentUser } = useApp();

  const stats = [
    {
      icon: BookOpen,
      label: "Subjects Enrolled",
      value: subjects.length,
      color: "blue",
      change: "+2 this month",
    },
    {
      icon: Trophy,
      label: "Quizzes Completed",
      value: results.length,
      color: "yellow",
      change: "+5 this week",
    },
    {
      icon: TrendingUp,
      label: "Average Score",
      value: "82%",
      color: "green",
      change: "+8% improvement",
    },
    {
      icon: Flame,
      label: "Learning Streak",
      value: "7 days",
      color: "orange",
      change: "Keep it up!",
    },
  ];

  const recentActivity = [
    {
      type: "quiz",
      title: "Motion and Kinematics",
      score: 85,
      date: "2 hours ago",
    },
    {
      type: "learn",
      title: "Forces and Newton's Laws",
      progress: 75,
      date: "5 hours ago",
    },
    { type: "quiz", title: "Atomic Structure", score: 90, date: "Yesterday" },
  ];

  const recommendedTopics = [
    {
      subject: "Physics",
      topic: "Work, Energy, and Power",
      reason: "Continue where you left off",
    },
    {
      subject: "Chemistry",
      topic: "Chemical Bonding",
      reason: "Recommended based on your progress",
    },
    { subject: "Biology", topic: "Evolution", reason: "New topic unlocked" },
  ];

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back,{" "}
            <span className="text-blue-400">
              {currentUser.name?.split(" ")[0] || "Student"}
            </span>
            ! 👋
          </h1>
          <p className="text-gray-400">
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-blue-500/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-${stat.color}-600/20 rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`text-${stat.color}-400`} size={24} />
                </div>
                <span className="text-xs text-gray-500">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Continue Learning Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning Card */}
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Play className="text-blue-400" size={20} />
                <h2 className="text-xl font-semibold">Continue Learning</h2>
              </div>
              <div className="bg-[#0d1117]/50 rounded-xl p-4 flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-blue-400" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-1">
                    Work, Energy, and Power
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Physics • Intermediate • 55 min
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-400">45%</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate("/student/learn/3")}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-all flex items-center gap-2"
                >
                  Continue
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Your Subjects */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Your Subjects</h2>
                <button
                  onClick={() => navigate("/student/subjects")}
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {subjects.slice(0, 4).map((subject) => (
                  <div
                    key={subject.id}
                    onClick={() => navigate(`/student/subjects/${subject.id}`)}
                    className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5 hover:border-blue-500/30 cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-${subject.color}-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <BookOpen
                          className={`text-${subject.color}-400`}
                          size={24}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{subject.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {subject.topicsCount} topics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all"
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-400">
                        {subject.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Recommended Topics */}
            <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-purple-400" size={20} />
                <h2 className="text-lg font-semibold">Recommended</h2>
              </div>
              <div className="space-y-3">
                {recommendedTopics.map((item, index) => (
                  <div
                    key={index}
                    className="p-3 bg-white/5 rounded-xl hover:bg-white/10 cursor-pointer transition-all"
                  >
                    <h4 className="font-medium text-sm mb-1">{item.topic}</h4>
                    <p className="text-xs text-gray-500">{item.subject}</p>
                    <p className="text-xs text-blue-400 mt-1">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-green-400" size={20} />
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="space-y-3">
                {recentActivity.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-xl"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.type === "quiz"
                          ? "bg-green-600/20"
                          : "bg-blue-600/20"
                      }`}
                    >
                      {item.type === "quiz" ? (
                        <Trophy className="text-green-400" size={18} />
                      ) : (
                        <Play className="text-blue-400" size={18} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-xs text-gray-500">
                        {item.type === "quiz"
                          ? `Score: ${item.score}%`
                          : `Progress: ${item.progress}%`}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Goal */}
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border border-yellow-500/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="text-yellow-400" size={20} />
                <h2 className="text-lg font-semibold">Weekly Goal</h2>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-yellow-400">3/5</div>
                <p className="text-gray-400 text-sm">Quizzes completed</p>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
                <div className="w-[60%] h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-400 text-center">
                2 more quizzes to reach your goal!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Dashboard;
