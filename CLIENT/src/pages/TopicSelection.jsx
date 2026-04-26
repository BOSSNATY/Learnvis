import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TopicSelection = () => {
  const { subjectId } = useParams();
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/subjects/topics?subjectId=${subjectId}`)
      .then((res) => setTopics(res.data));
  }, [subjectId]);

  return (
    <div className="min-h-screen bg-[#080b14] p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">Select a Topic</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => navigate(`/student/learn/${topic.id}`)}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500 cursor-pointer transition-all"
          >
            <h3 className="text-xl font-semibold">{topic.title}</h3>
            <p className="text-gray-400">
              Unit focused on Grade {topic.grade_level} standards.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
