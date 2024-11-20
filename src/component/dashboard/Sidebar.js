import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen flex flex-col shadow-md">
       <nav className="flex-1 p-4 space-y-4">
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:bg-gray-700"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
        >
          <FiAlertCircle className="mr-2 h-5 w-5" /> {/* Icon on the left */}
          <span className="ml-2">Bad Reviews</span> {/* Text on the right */}
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:bg-gray-700"
        >
          Profile Overview
        </a>
        <a
          href="#"
          className="block px-3 py-2 rounded-md hover:bg-gray-700"
        >
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
