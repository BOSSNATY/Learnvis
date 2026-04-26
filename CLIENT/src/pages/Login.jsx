import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed: Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#080b14] flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-[10%] -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[10%] -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>

      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-8 relative z-10">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
          <div className="w-7 h-7 border-2 border-white rounded-full border-t-transparent"></div>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Learnvis
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#111827]/40 backdrop-blur-2xl border border-white/10 p-10 rounded-[2rem] shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back!</h2>
          <p className="text-gray-400 text-sm">
            Login to continue your learning journey
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1f2937]/40 border border-white/5 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-gray-600"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full bg-[#1f2937]/40 border border-white/5 rounded-xl py-3.5 px-5 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-gray-600"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-[2.8rem] text-gray-500 hover:text-white transition-colors"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm px-1">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer group">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-700 bg-gray-900 checked:bg-blue-600 focus:ring-0 transition-all"
              />
              <span className="group-hover:text-gray-300">Remember Me</span>
            </label>
            <span className="text-blue-500 hover:text-blue-400 cursor-pointer font-medium transition-colors">
              Forgot Password?
            </span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]">
            Login
          </button>
        </form>

        <div className="mt-10 flex flex-col items-center gap-6">
          <div className="w-full flex items-center gap-4 text-gray-700">
            <div className="h-[1px] bg-white/5 flex-grow"></div>
            <span className="text-[10px] uppercase tracking-widest font-bold">
              or continue with
            </span>
            <div className="h-[1px] bg-white/5 flex-grow"></div>
          </div>

          <div className="flex gap-4 w-full">
            <button className="flex-1 bg-[#1f2937]/60 py-3 rounded-xl border border-white/5 flex items-center justify-center gap-3 hover:bg-gray-700 transition-all">
              <img
                src="https://www.google.com/favicon.ico"
                className="w-4 h-4 grayscale group-hover:grayscale-0"
                alt="G"
              />
              <span className="text-sm font-semibold text-white">Google</span>
            </button>
            <button className="flex-1 bg-[#1f2937]/60 py-3 rounded-xl border border-white/5 flex items-center justify-center gap-3 hover:bg-gray-700 transition-all">
              <img
                src="https://www.microsoft.com/favicon.ico"
                className="w-4 h-4 grayscale group-hover:grayscale-0"
                alt="M"
              />
              <span className="text-sm font-semibold text-white">
                Microsoft
              </span>
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-500 cursor-pointer font-bold hover:underline ml-1"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
