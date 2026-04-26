import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronLeft } from "lucide-react";

const TopicSelection = () => {
  const { subjectId } = useParams();
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/topics?subjectId=${subjectId}`)
      .then((res) => setTopics(res.data))
      .catch((err) => console.error(err));
  }, [subjectId]);

  return (
    <div className="min-h-screen bg-[#080b14] text-white p-10">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 mb-10"
      >
        <ChevronLeft /> Back
      </button>

      <h2 className="text-3xl font-bold mb-8">Select a Topic</h2>
      <div className="space-y-4 max-w-2xl">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/student/learn/${topic.id}`)}
            className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-blue-600/10 hover:border-blue-500/50 cursor-pointer transition-all flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{topic.title}</h3>
              <p className="text-gray-500 text-sm">
                Unit {topic.unit_number || topic.id}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicSelection;
