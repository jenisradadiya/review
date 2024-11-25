import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Section */}
      <div className="hidden md:flex items-center justify-center flex-grow bg-gray-200">
        <img src="/image/logo.jpg" alt="Illustration" className="w-80 lg:w-96" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center flex-grow bg-white px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="text-center md:text-left mb-6">
          <img src='/image/logo.jpg' alt="Logo" className="w-12 justify-center mx-auto md:mx-0 mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold">Welcome back!</h2>
          <p className="text-gray-600 mt-2">Please enter your details</p>
        </div>

        {/* Form */}
        <form className="w-full max-w-md space-y-6">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
            />
            {showPassword ? (
              <FaEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3 text-xl text-gray-500 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 bottom-3 text-xl text-gray-500 cursor-pointer"
              />
            )}
          </div>

          {/* Options */}
          <div className="flex flex-wrap justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="w-4 h-4 text-black" />
              <span>Remember for 30 days</span>
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              type="button"
              className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black border border-black transition"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-sm mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
  
};

export default Login;
