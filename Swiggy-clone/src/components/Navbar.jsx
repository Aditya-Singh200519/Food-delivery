import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [slide,setSlide] = useState(false)

  function handleslide()
  {
    setSlide(true)
  }

  
  function closeSlide()
  {
    setSlide(false)
  }
  return (
    <div >
   
    {/* // main Container */}
    <div className="w-full  fixed pt-20 top-0 left-0 bg-white z-40 overflow-y-hidden scrollbar-hide p-2 sm:p-3 md:p-2 lg:p-2 xl:p-3 2xl:p-3 flex shadow-md justify-center items-start">

     

      {/* nav Container */}
      <div className="flex justify-between items-center custom-range:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[90%]">

        {/* left section */}
        <div className="flex items-center custom-range:gap-3 w-[40%] sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
          {/* logo */}
          <NavLink to={'/'}>
          <div><img className="custom-range:w-8 sm:w-10 md:w-10 lg:w-10 xl:w-12 2xl:w-14" src={logo} alt="" /></div>
          </NavLink>
         
       
         
        </div>

        {/* right section */}
        <div className="flex w-[60%] custom-range:mr-6 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-20 ">

          <div className="flex items-center custom-range:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            <i className="fa-solid fa-magnifying-glass custom-range:text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"></i>
            <p className="custom-range:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">search</p>
          </div>

          <div className="flex items-center custom-range:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            <i className="fa-solid fa-percent custom-range:text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"></i>
            <p className="custom-range:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">Offers</p>
          </div>

          <div className="flex items-center custom-range:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            <i className="fa-solid fa-handshake-angle custom-range:text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"></i>
            <p className="custom-range:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">Help</p>
          </div>

          <div className="flex items-center custom-range:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            <i className="fa-solid fa-user custom-range:text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"></i>
            <p className="custom-range:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">login</p>
          </div>

          <div className="flex items-center custom-range:gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
            <i className="fa-solid fa-cart-shopping custom-range:text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]"></i>
            <p className="custom-range:text-[10px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]">Cart</p>
          </div>

        </div>

      </div>
    </div>

    </div>
  );
};

export default Navbar;
