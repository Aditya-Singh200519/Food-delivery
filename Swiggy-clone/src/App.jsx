import React from "react";
import Navbar from "./components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Cusine from "./components/Dishes";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Pages/Admin";
import RestrauntMenu from "./components/RestrauntMenu";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/restrauntmenu',
    element: <div>
      <Navbar/>
      <RestrauntMenu/>
    </div>
  }
 
]
  
)

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
