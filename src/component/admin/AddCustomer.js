import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const AddCustomer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showAdminPassword, setShowAdminPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-white px-6 sm:px-10 md:px-16 lg:px-24 my-10 mx-auto rounded-2xl shadow-xl max-w-4xl">
    <div className="flex flex-col justify-center items-center flex-grow w-full">
      <div className="text-center md:text-left mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Add Client</h2>
      </div>
      <form className="w-full max-w-md space-y-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          placeholder="Business Name"
          className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
        />
        <input
          type="text"
          placeholder="Business Link (e.g., https://example.com)"
          className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
        />
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
        <div className="relative">
          <input
            type={showAdminPassword ? "text" : "password"}
            placeholder="Admin Password"
            className="w-full px-4 py-3 border-b border-gray-400 focus:outline-none focus:border-black"
          />
          {showAdminPassword ? (
            <FaEyeSlash
              onClick={() => setShowAdminPassword(!showAdminPassword)}
              className="absolute right-3 bottom-3 text-xl text-gray-500 cursor-pointer"
            />
          ) : (
            <FaEye
              onClick={() => setShowAdminPassword(!showAdminPassword)}
              className="absolute right-3 bottom-3 text-xl text-gray-500 cursor-pointer"
            />
          )}
        </div>
        <button
          type="button"
          className="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black border border-black transition"
        >
          Register
        </button>
      </form>
    </div>
  </div>
  

  );
};

export default AddCustomer;