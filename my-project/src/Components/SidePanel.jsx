import React from "react";
import { Link } from "react-router-dom";
function SidePanel() {
  return (
    <div className="w-64 bg-white shadow-md min-h-screen max-h-full">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Profile
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Settings
          </a>
          <Link
            to="/login"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Logout
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default SidePanel;
