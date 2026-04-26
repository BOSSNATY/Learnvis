import React, { useState, useEffect } from "react";
import { Play, BookOpen, BrainCircuit, BarChart3 } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const [modules, setModules] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchContent = async () => {
  //     try {
  //       // Fetching the curriculum structure
  //       const res = await axios.get("http://localhost:3000/api/modules", {
  //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //       });
  //       setModules(res.data);
  //       setCurrentModule(res.data[0]); // Default to the first unit
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Failed to load modules", err);
  //     }
  //   };
  //   fetchContent();
  // }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-[#080b14] flex items-center justify-center text-white">
        Loading Curriculum...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#080b14] text-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#0a0f1d] p-6 hidden lg:block">
        <h1 className="text-xl font-bold mb-10 text-blue-500 tracking-tighter">
          LEARNVIS
        </h1>
        <nav className="space-y-2">
          <NavItem icon={<BookOpen size={20} />} label="Modules" active />
          <NavItem icon={<BrainCircuit size={20} />} label="AI Tutor" />
          <NavItem icon={<BarChart3 size={20} />} label="My Progress" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Grade 11: Physics</h2>
            <p className="text-gray-500">Unit 2: Vectors and 2D Kinematics</p>
          </div>
          <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
              N
            </div>
            <span className="pr-4 text-sm font-medium">Natnael</span>
          </div>
        </header>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Video Section */}
          <div className="xl:col-span-2 space-y-6">
            <div className="aspect-video bg-black rounded-3xl border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all cursor-pointer">
                <Play fill="white" size={64} className="text-white" />
              </div>
              {/* Replace with actual iframe later */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl">
                <h3 className="font-bold text-lg">
                  2.1 Position, Displacement, and Velocity
                </h3>
              </div>
            </div>

            <div className="bg-[#111827]/40 p-6 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4">Unit Resources</h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/5">
                  Download Notes
                </button>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/5">
                  Formula Sheet
                </button>
              </div>
            </div>
          </div>

          {/* AI Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-3xl border border-blue-500/30">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <BrainCircuit className="text-blue-400" /> AI Challenge
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Based on your last attempt, we've generated a specific quiz for
                Relative Velocity.
              </p>
              <button className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all">
                Take AI Quiz
              </button>
            </div>

            <div className="bg-[#111827]/40 p-6 rounded-3xl border border-white/10 h-[400px] flex flex-col">
              <h3 className="font-bold mb-4">Physics Simulator</h3>
              <div className="flex-1 bg-black/40 rounded-2xl flex items-center justify-center text-gray-600 border border-dashed border-white/20">
                Simulator Feed (VPython)
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all ${active ? "bg-blue-600/10 text-blue-500" : "text-gray-500 hover:text-white hover:bg-white/5"}`}
  >
    {icon}
    <span className="font-semibold">{label}</span>
  </div>
);

export default Dashboard;
