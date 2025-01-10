import React, { useEffect, useState, useRef } from "react";
import burgir from "../assets/images/burgir.png";

const Dishes = () => {
  // store api data
  const [cusine, setCusine] = useState([]);

  const [scroll, setScroll] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;

      // Scroll forward if not at the end
      if (scroll + containerWidth < contentWidth) {
        setScroll((prev) => prev + 100);
      }
    }
  };

  const handlePrevious = () => {
    if (scroll > 0) {
      setScroll((prev) => Math.max(0, prev - 100));
    }
  };

  return (
    <div className="  shadow-sm rounded-lg w-[85%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto mt-12 overflow-hidden pb-8">
      {/* upper Section */}
      <div className="flex justify-between items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="pl-4 text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Dishes
        </div>
        <div className="flex pr-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Left Arrow */}
          <div
            onClick={handlePrevious}
            className={`border rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-slate-300 flex justify-center items-center ${
              scroll === 0
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-slate-400"
            }`}
          >
            <i className="fa-solid fa-arrow-left text-sm sm:text-base md:text-lg"></i>
          </div>
          {/* Right Arrow */}
          <div
            onClick={handleNext}
            className={`border rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-slate-300 flex justify-center items-center ${
              containerRef.current &&
              scroll + containerRef.current.offsetWidth >=
                containerRef.current.scrollWidth
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer hover:bg-slate-400"
            }`}
          >
            <i className="fa-solid fa-arrow-right text-sm sm:text-base md:text-lg"></i>
          </div>
        </div>
      </div>

      {/* lower Items section */}
      <div
        ref={containerRef}
        style={{ transform: `translateX(-${scroll}px)` }}
        className="transition-transform duration-300 flex mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 gap-4 sm:gap-6 md:gap-8"
      >
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 1"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 2"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 3"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 4"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 5"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 6"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 7"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 8"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 9"
        />
        <img
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40"
          src={burgir}
          alt="Cuisine Item 10"
        />
      </div>
    </div>
  );
};

export default Dishes;
