import React from "react";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Logo"
              className="h-12 sm:h-16"
            />
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
            Welcome Back
          </h2>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>

          {/* Forgot Password & Signup */}
          <div className="mt-6 text-center">
            <a href="/" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Our Privacy Policy{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
