import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import { RiDashboardLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 h-screen flex flex-col shadow-md">
      <nav className="flex-1 p-4 space-y-4">
        <a
          href="#"
          className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
        >
          <RiDashboardFill className="r-2 h-5 w-5" /> {/* Icon on the left */}
          <span className="ml-2">Dashboard</span> {/* Text on the right */}
        </a>
        <a
          href="#"
          className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
        >
          <RiDashboardLine className="mr-2 h-5 w-5" /> {/* Icon on the left */}
          <span className="ml-2">Bad Reviews</span> {/* Text on the right */}
        </a>
        <a
          href="#"
          className=" flex items-center px-3 py-2 rounded-md hover:bg-gray-700 "
        >
          <CgProfile className="mr-2 h-5 w-5" /> {/* Icon on the left */}
          <span className="ml-2">Profile </span> {/* Text on the right */}
        </a>
        <a
          href="/login"
          className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700"
        >
          <TbLogout2 className="mr-2 h-5 w-5" /> {/* Icon on the left */}
          <span className="ml-2"> Logout </span> {/* Text on the right */}
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
