import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { useApp } from "../../context/AppContext";
import {
  Users,
  BookOpen,
  FileText,
  TrendingUp,
  Activity,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const Dashboard = () => {
  const { users, subjects, results } = useApp();

  const stats = [
    {
      icon: Users,
      label: "Total Students",
      value: users.length,
      change: "+12%",
      trend: "up",
      color: "blue",
    },
    {
      icon: BookOpen,
      label: "Active Subjects",
      value: subjects.length,
      change: "+2",
      trend: "up",
      color: "green",
    },
    {
      icon: FileText,
      label: "Quizzes Taken",
      value: "1,234",
      change: "+18%",
      trend: "up",
      color: "purple",
    },
    {
      icon: Activity,
      label: "Avg. Performance",
      value: "78%",
      change: "-3%",
      trend: "down",
      color: "yellow",
    },
  ];

  const recentActivity = [
    {
      user: "John Doe",
      action: "Completed quiz",
      subject: "Physics",
      time: "2 min ago",
    },
    {
      user: "Jane Smith",
      action: "Started learning",
      subject: "Chemistry",
      time: "15 min ago",
    },
    {
      user: "Alex Johnson",
      action: "New signup",
      subject: "",
      time: "1 hour ago",
    },
    {
      user: "Sarah Wilson",
      action: "Scored 95%",
      subject: "Biology",
      time: "2 hours ago",
    },
    {
      user: "Mike Brown",
      action: "Completed topic",
      subject: "Mathematics",
      time: "3 hours ago",
    },
  ];

  const topPerformers = [
    { name: "Sarah Wilson", avgScore: 94, quizzes: 15 },
    { name: "Jane Smith", avgScore: 88, quizzes: 12 },
    { name: "John Doe", avgScore: 85, quizzes: 18 },
    { name: "Emily Davis", avgScore: 82, quizzes: 10 },
    { name: "Alex Johnson", avgScore: 79, quizzes: 8 },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">
            Welcome back! Here's an overview of your platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-${stat.color}-600/20 rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className={`text-${stat.color}-400`} size={24} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm ${
                    stat.trend === "up" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h2 className="font-semibold">Recent Activity</h2>
            </div>
            <div className="divide-y divide-white/5">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 hover:bg-white/5 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{activity.user}</div>
                    <div className="text-gray-400 text-sm">
                      {activity.action}
                      {activity.subject && ` - ${activity.subject}`}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center gap-1">
                    <Clock size={14} />
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h2 className="font-semibold">Top Performers</h2>
            </div>
            <div className="divide-y divide-white/5">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      index === 0
                        ? "bg-yellow-600/20 text-yellow-400"
                        : index === 1
                          ? "bg-gray-600/20 text-gray-400"
                          : index === 2
                            ? "bg-orange-600/20 text-orange-400"
                            : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{performer.name}</div>
                    <div className="text-gray-500 text-xs">
                      {performer.quizzes} quizzes
                    </div>
                  </div>
                  <div className="text-green-400 font-semibold">
                    {performer.avgScore}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-6 text-left hover:border-blue-500/40 transition-all">
            <Users className="text-blue-400 mb-4" size={32} />
            <h3 className="font-semibold mb-1">Manage Users</h3>
            <p className="text-gray-400 text-sm">
              View, edit, or remove student accounts
            </p>
          </button>
          <button className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/20 rounded-2xl p-6 text-left hover:border-green-500/40 transition-all">
            <BookOpen className="text-green-400 mb-4" size={32} />
            <h3 className="font-semibold mb-1">Manage Content</h3>
            <p className="text-gray-400 text-sm">
              Add or update subjects and topics
            </p>
          </button>
          <button className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl p-6 text-left hover:border-purple-500/40 transition-all">
            <TrendingUp className="text-purple-400 mb-4" size={32} />
            <h3 className="font-semibold mb-1">View Analytics</h3>
            <p className="text-gray-400 text-sm">
              Detailed reports and insights
            </p>
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
