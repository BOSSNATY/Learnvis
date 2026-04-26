import React from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import StudentLayout from "../../components/StudentLayout";
import {
  Atom,
  Calculator,
  FlaskConical,
  Leaf,
  ChevronRight,
  BookOpen,
  Clock,
} from "lucide-react";

const Subjects = () => {
  const navigate = useNavigate();
  const { subjects } = useApp();

  const iconMap = {
    Atom: Atom,
    Calculator: Calculator,
    FlaskConical: FlaskConical,
    Leaf: Leaf,
  };

  return (
    <StudentLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Subjects</h1>
          <p className="text-gray-400">
            Explore and learn from our comprehensive subject library
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {subjects.map((subject) => {
            const IconComponent = iconMap[subject.icon] || Atom;
            const completedTopics = Math.floor(
              (subject.progress / 100) * subject.topicsCount,
            );

            return (
              <div
                key={subject.id}
                onClick={() => navigate(`/student/subjects/${subject.id}`)}
                className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 cursor-pointer transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-16 h-16 bg-${subject.color}-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <IconComponent
                      className={`text-${subject.color}-400`}
                      size={32}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold mb-1">{subject.name}</h2>
                    <p className="text-gray-400 text-sm mb-4">
                      {subject.description}
                    </p>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2 text-gray-400">
                        <BookOpen size={16} />
                        <span className="text-sm">
                          {subject.topicsCount} topics
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock size={16} />
                        <span className="text-sm">
                          ~{subject.topicsCount * 45} mins
                        </span>
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
                        {completedTopics}/{subject.topicsCount}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={24}
                    className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-400">
            Coming Soon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Earth Science", "Astronomy", "Environmental Science"].map(
              (subject, index) => (
                <div
                  key={index}
                  className="bg-[#111827]/20 border border-white/5 rounded-2xl p-6 opacity-50"
                >
                  <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="text-gray-500" size={24} />
                  </div>
                  <h3 className="font-semibold mb-1">{subject}</h3>
                  <p className="text-gray-500 text-sm">Available soon</p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Subjects;
