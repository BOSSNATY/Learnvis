import React, { useState } from "react";
import StudentLayout from "../../components/StudentLayout";
import {
  Bell,
  Moon,
  Globe,
  Shield,
  Palette,
  Volume2,
  Mail,
  Smartphone,
  ChevronRight,
  LogOut,
  Trash2,
  Download,
} from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      quizReminders: true,
      weeklyReport: false,
    },
    appearance: {
      darkMode: true,
      compactMode: false,
      animations: true,
    },
    learning: {
      autoPlay: true,
      subtitles: false,
      playbackSpeed: "1x",
    },
  });

  const Toggle = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`w-12 h-6 rounded-full transition-all relative ${
        enabled ? "bg-blue-600" : "bg-gray-700"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${
          enabled ? "left-6" : "left-0.5"
        }`}
      ></div>
    </button>
  );

  const updateSetting = (category, key, value) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [key]: value,
      },
    });
  };

  return (
    <StudentLayout>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400">Customize your learning experience</p>
        </div>

        {/* Notifications */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden mb-6">
          <div className="p-4 border-b border-white/5">
            <h2 className="font-semibold flex items-center gap-2">
              <Bell className="text-blue-400" size={20} />
              Notifications
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Email Notifications</div>
                  <div className="text-gray-500 text-sm">
                    Receive updates via email
                  </div>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.email}
                onChange={(v) => updateSetting("notifications", "email", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Smartphone size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Push Notifications</div>
                  <div className="text-gray-500 text-sm">
                    Get instant alerts
                  </div>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.push}
                onChange={(v) => updateSetting("notifications", "push", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Quiz Reminders</div>
                  <div className="text-gray-500 text-sm">
                    Daily practice reminders
                  </div>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.quizReminders}
                onChange={(v) =>
                  updateSetting("notifications", "quizReminders", v)
                }
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Weekly Report</div>
                  <div className="text-gray-500 text-sm">
                    Summary of your progress
                  </div>
                </div>
              </div>
              <Toggle
                enabled={settings.notifications.weeklyReport}
                onChange={(v) =>
                  updateSetting("notifications", "weeklyReport", v)
                }
              />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden mb-6">
          <div className="p-4 border-b border-white/5">
            <h2 className="font-semibold flex items-center gap-2">
              <Palette className="text-purple-400" size={20} />
              Appearance
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Moon size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Dark Mode</div>
                  <div className="text-gray-500 text-sm">Use dark theme</div>
                </div>
              </div>
              <Toggle
                enabled={settings.appearance.darkMode}
                onChange={(v) => updateSetting("appearance", "darkMode", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Compact Mode</div>
                  <div className="text-gray-500 text-sm">Reduce UI spacing</div>
                </div>
              </div>
              <Toggle
                enabled={settings.appearance.compactMode}
                onChange={(v) => updateSetting("appearance", "compactMode", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Volume2 size={18} className="text-gray-500" />
                <div>
                  <div className="font-medium">Animations</div>
                  <div className="text-gray-500 text-sm">
                    Enable smooth transitions
                  </div>
                </div>
              </div>
              <Toggle
                enabled={settings.appearance.animations}
                onChange={(v) => updateSetting("appearance", "animations", v)}
              />
            </div>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden mb-6">
          <div className="p-4 border-b border-white/5">
            <h2 className="font-semibold flex items-center gap-2">
              <Shield className="text-green-400" size={20} />
              Learning Preferences
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            <div className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium">Video Autoplay</div>
                <div className="text-gray-500 text-sm">
                  Automatically play next lesson
                </div>
              </div>
              <Toggle
                enabled={settings.learning.autoPlay}
                onChange={(v) => updateSetting("learning", "autoPlay", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium">Default Subtitles</div>
                <div className="text-gray-500 text-sm">
                  Show subtitles by default
                </div>
              </div>
              <Toggle
                enabled={settings.learning.subtitles}
                onChange={(v) => updateSetting("learning", "subtitles", v)}
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium">Playback Speed</div>
                <div className="text-gray-500 text-sm">Default video speed</div>
              </div>
              <select
                value={settings.learning.playbackSpeed}
                onChange={(e) =>
                  updateSetting("learning", "playbackSpeed", e.target.value)
                }
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                <option value="0.5x">0.5x</option>
                <option value="0.75x">0.75x</option>
                <option value="1x">1x</option>
                <option value="1.25x">1.25x</option>
                <option value="1.5x">1.5x</option>
                <option value="2x">2x</option>
              </select>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-4 border-b border-white/5">
            <h2 className="font-semibold">Account</h2>
          </div>
          <div className="divide-y divide-white/5">
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all">
              <div className="flex items-center gap-3">
                <Download size={18} className="text-gray-500" />
                <div className="text-left">
                  <div className="font-medium">Download Data</div>
                  <div className="text-gray-500 text-sm">
                    Export your learning data
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-all">
              <div className="flex items-center gap-3">
                <LogOut size={18} className="text-gray-500" />
                <div className="text-left">
                  <div className="font-medium">Sign Out</div>
                  <div className="text-gray-500 text-sm">
                    Log out of your account
                  </div>
                </div>
              </div>
              <ChevronRight size={18} className="text-gray-500" />
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-red-500/10 transition-all text-red-400">
              <div className="flex items-center gap-3">
                <Trash2 size={18} />
                <div className="text-left">
                  <div className="font-medium">Delete Account</div>
                  <div className="text-red-400/60 text-sm">
                    Permanently delete your account
                  </div>
                </div>
              </div>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </StudentLayout>
  );
};

export default Settings;
