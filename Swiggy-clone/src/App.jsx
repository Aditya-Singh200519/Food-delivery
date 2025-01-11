import React from "react";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cusine from "./components/Dishes";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route />
      </Routes>
    </Router>
  );
};

export default App;
