import React from "react";
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <>
       <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Company Name */}
          <div className="text-lg font-bold">
            Dashboard App
          </div>

          {/* Notification Bell and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="relative focus:outline-none">
              <IoMdNotifications className="h-6 w-6 text-white hover:text-gray-200" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-xs font-bold text-white rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile Photo */}
            <img
              className="h-8 w-8 rounded-full border-2 border-white"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
