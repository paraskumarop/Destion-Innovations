import React from "react";

import SidePanel from "./SidePanel";

function DashBoard() {
  return (
    <div>
      <div className="min-h-screen flex bg-gray-100">
        <SidePanel />
        <div className="flex-1 flex flex-col">
          <header className="bg-white shadow-md p-4 flex justify-between items-center rounded mx-4 my-2">
            <h1 className="text-lg font-semibold">Destion Innovation</h1>
            <div className="flex items-center">
              <p className="mr-4">Paras</p>
              <img
                src="https://via.placeholder.com/32"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </header>

          <main className="flex-1 p-6">
            <h2 className="text-xl font-semibold mb-6">
              Welcome to the Dashboard
            </h2>
            <p className="text-justify text-pretty">
              In a world filled with distractions, deadlines, and endless tasks,
              managing time can feel like an uphill battle. However, mastering
              time management is a critical skill that can greatly enhance
              productivity, reduce stress, and help you achieve your goals.
              Whether you're a student, a professional, or someone juggling
              multiple roles, the following tips and strategies will help you
              manage your time more effectively.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
