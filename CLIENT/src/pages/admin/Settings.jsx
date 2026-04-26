import React from "react";
import AdminLayout from "../../components/AdminLayout";
import { Settings as SettingsIcon } from "lucide-react";

const Settings = () => {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto text-center py-20">
        <SettingsIcon size={48} className="text-purple-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
        <p className="text-gray-400 mb-6">
          Configure AI behavior, global features, and administrative controls.
        </p>
      </div>
    </AdminLayout>
  );
};

export default Settings;
