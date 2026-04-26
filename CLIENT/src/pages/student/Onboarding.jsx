import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Atom, Calculator } from "lucide-react";

const Onboarding = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch subjects from the API we discussed
    axios
      .get("http://localhost:5000/api/subjects")
      .then((res) => setSubjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-[#080b14] text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
      <p className="text-gray-400 mb-12">
        Select a natural subject to begin your discovery.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            onClick={() => navigate(`/student/subjects/${subject.id}`)}
            className="group p-10 bg-[#111827]/40 border border-white/10 rounded-[2.5rem] hover:border-blue-500 transition-all cursor-pointer text-center"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              {subject.name === "Physics" ? (
                <Atom className="text-blue-500" size={32} />
              ) : (
                <Calculator className="text-blue-500" size={32} />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
            <p className="text-gray-400 text-sm">
              Discover the core principles of {subject.name.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
