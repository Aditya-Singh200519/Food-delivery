import React, { useState } from "react";

import CreateFood from '../components/CreateFood.jsx'
import CreateRestuarant from "../components/CreateRestuarant.jsx";

const Admin = () => {
  

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back Admin
      </h1>
      <div className="flex justify-evenly items-center w-10/12">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create a New Restaurant
          </h2>
          <CreateRestuarant/>
        </div>

        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Food Item
          </h2>
          <CreateFood/>
        </div>
      </div>
    </div>
  );
};

export default Admin;
