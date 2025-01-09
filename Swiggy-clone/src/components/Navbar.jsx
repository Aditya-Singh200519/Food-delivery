import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-md flex items-center w-full bg-white">

      <div className="flex justify-between w-full p-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* nav left Section */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          <img
            className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[80px]"
            src={logo}
            alt="Logo"
          />
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
            <p className="border-b-2 border-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Others
            </p>
            <i className="fa fa-angle-down text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
          </div>
        </div>

        {/* nav right section */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-magnifying-glass text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Search
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="fa-solid fa-percent text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Offers
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="fa-solid fa-handshake-angle text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Help
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="fa-solid fa-user text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Sign Up
            </p>
          </div>

          <div className="flex items-center gap-3">
            <i className="fa-solid fa-cart-shopping text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Cart
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
