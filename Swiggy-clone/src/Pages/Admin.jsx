import React, { useEffect, useState } from "react";

import CreateFood from "../components/CreateFood.jsx";
import CreateRestuarant from "../components/CreateRestuarant.jsx";
import { produrl } from "../helper.js";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  // Check token validity
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("admintoken");
      const tokenExpiry = localStorage.getItem("admintokenExpiry");

      if (token && tokenExpiry) {
        const currentTime = new Date().getTime();
        if (currentTime < parseInt(tokenExpiry, 10)) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("admintoken");
          localStorage.removeItem("admintokenExpiry");
          setIsAuthenticated(false);
        }
      }
    };

    checkToken();
  }, []);

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${produrl}admin/adminlogin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour
        localStorage.setItem("admintoken", data.token); // Store token
        localStorage.setItem("admintokenExpiry", expirationTime); // Store token expiration time
        setIsAuthenticated(true); // Update authentication state
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  // Fetch restaurants only when authenticated
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${produrl}restuarant/getAllRestuarant`
        );

        if (response.status === 200) {
          const data = await response.json();
          setRestaurants(data); // Store the response in the state
        } else {
          console.error("Failed to fetch restaurants");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    if (isAuthenticated) {
      fetchRestaurants();
    }
  }, [isAuthenticated]);

  // Render login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Admin Login
        </h1>
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // Render admin page if authenticated
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
          <CreateRestuarant />
        </div>

        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create Food Item
          </h2>
          <CreateFood rests={restaurants} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
