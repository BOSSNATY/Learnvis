import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { FileText, Plus } from "lucide-react";

const Topics = () => {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto text-center py-20">
        <FileText size={48} className="text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Topic Management</h1>
        <p className="text-gray-400 mb-6">
          Manage topics, video content, and textual materials.
        </p>
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-semibold inline-flex items-center gap-2">
          <Plus size={18} />
          Create New Topic
        </button>
      </div>
    </AdminLayout>
  );
};

export default Topics;
