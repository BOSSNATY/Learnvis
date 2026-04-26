import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { BarChart3 } from "lucide-react";

const Analytics = () => {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto text-center py-20">
        <BarChart3 size={48} className="text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Platform Analytics</h1>
        <p className="text-gray-400 mb-6">
          Detailed reports and engagement metrics are coming soon.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Analytics;
