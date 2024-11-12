import React from "react";
import { Link } from "react-router-dom";
import { FaBriefcase, FaClipboardList, FaUserTie } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-purple-900 to-black text-white shadow-lg p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Hiring Logo / Home Link */}
        <Link
          to="/"
          className="text-2xl font-bold text-white hover:text-gray-200 flex items-center"
        >
          <FaUserTie className="mr-2 text-3xl" />
          TalentHub
        </Link>

        {/* Navbar Links */}
        <div className="flex space-x-6 text-lg">
          <Link
            to="/dashboard"
            className="flex items-center hover:text-gray-300 transition"
          >
            <FaBriefcase className="mr-2" /> Dashboard
          </Link>
          <Link
            to="/assignments"
            className="flex items-center hover:text-gray-300 transition"
          >
            <FaClipboardList className="mr-2" /> Assignments
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
