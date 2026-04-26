import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react"; // For the password toggle icons

const Signup = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation before even hitting the server
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (res.data.token) {
        // Store the token so the user stays logged in
        localStorage.setItem("token", res.data.token);
        alert("Account created! Redirecting...");
        navigate("/onboarding"); // Go to Grade/Subject selection
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data);
      alert(err.response?.data?.error || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#080b14] flex flex-col items-center justify-center p-4 font-sans">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          {/* Simple representation of your logo icon */}
          <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin-slow"></div>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Learnvis
        </h1>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-md bg-[#111827]/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-400 text-sm">
            Join thousands of learners today
          </p>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Create a password"
              className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-10 text-gray-400 hover:text-white"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full bg-[#1f2937]/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-start gap-3 py-2">
            <input
              type="checkbox"
              className="mt-1 rounded border-gray-700 bg-gray-800 text-blue-600"
              required
            />
            <p className="text-xs text-gray-400">
              I agree to the{" "}
              <span className="text-blue-500 cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-blue-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>

          <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20">
            Sign Up
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="w-full flex items-center gap-4 text-gray-500">
            <div className="h-[1px] bg-white/10 flex-grow"></div>
            <span className="text-xs">or continue with</span>
            <div className="h-[1px] bg-white/10 flex-grow"></div>
          </div>

          <div className="flex gap-4 w-full">
            {/* Simple Social Buttons to match your image */}
            <button className="flex-1 bg-[#1f2937] py-2.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 hover:bg-gray-700 transition-all">
              <img
                src="https://www.google.com/favicon.ico"
                className="w-4 h-4"
                alt="G"
              />
              <span className="text-sm font-medium text-white">Google</span>
            </button>
            <button className="flex-1 bg-[#1f2937] py-2.5 rounded-xl border border-white/5 flex items-center justify-center gap-2 hover:bg-gray-700 transition-all">
              <img
                src="https://www.microsoft.com/favicon.ico"
                className="w-4 h-4"
                alt="M"
              />
              <span className="text-sm font-medium text-white">Microsoft</span>
            </button>
          </div>

          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-blue-500 cursor-pointer font-semibold"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
