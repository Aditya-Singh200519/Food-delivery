import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    // main Container
    <div className="w-full fixed top-0 left-0 bg-white z-10 overflow-y-hidden scrollbar-hide p-2 sm:p-3 md:p-2 lg:p-2 xl:p-3 2xl:p-3 flex shadow-md justify-center items-start">

      {/* nav Container */}
      <div className="flex justify-between items-center custom-range:w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[90%]">

        {/* left section */}
        <div className="flex items-center custom-range:gap-3 w-[40%] sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
          {/* logo */}
          <div><img className="custom-range:w-8 sm:w-12 md:w-14 lg:w-16 xl:w-18 2xl:w-20" src={logo} alt="" /></div>
          <div className="border-b-2 border-gray-700 custom-range:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">Others</div>
          <div><i className="fas fa-caret-down text-red-500 custom-range:text-s pb-1 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"></i></div>
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
  );
};

export default Navbar;
