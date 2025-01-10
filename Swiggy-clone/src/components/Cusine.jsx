import React, { useRef } from "react";
import cusine from "../assets/images/cusine.png";

const Cusine = () => {
  const containerRef = useRef(null);

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 100,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[85%]  p-1 rounded-xl sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto mt-16 overflow-hidden">
      {/* Upper Section */}
      <div className="flex justify-between items-center sm:gap-3 md:gap-5 lg:gap-6 xl:gap-8 2xl:gap-10">
        <div className="pl-3  text-gray-700 font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl custom-range:text-xl">
          Popular Cusines
        </div>
        <div className="flex pr-3 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-6">
          {/* Left Arrow */}
          <div
            onClick={handlePrevious}
            className="border rounded-full h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 bg-slate-300 flex justify-center items-center cursor-pointer hover:bg-slate-400 custom-range:hidden"
          >
            <i className="fa-solid fa-arrow-left text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg"></i>
          </div>
          {/* Right Arrow */}
          <div
            onClick={handleNext}
            className="border rounded-full h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14 bg-slate-300 flex justify-center items-center cursor-pointer hover:bg-slate-400 custom-range:hidden"
          >
            <i className="fa-solid fa-arrow-right text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg"></i>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div
        ref={containerRef}
        className="mt-2 flex gap-3 overflow-x-auto sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 scrollbar-hide custom-range:flex-col w-[100%] "
      >
        <div className="flex shadow-lg rounded-2xl bg-slate-50 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 p-1.5 flex-col flex-shrink-0 custom-range:w-full  ">
          <img
            className="w-full  h-[140px] sm:h-[160px] md:h-[170px] lg:h-[180px] xl:h-[190px] 2xl:h-[200px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl custom-range:h-[200px]"
            src={cusine}
            alt="Cuisine 1"
          />
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold mt-2">
            Name 1
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mt-1">
            <i className="fa-regular fa-star text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Delivery time
            </span>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
            Location
          </p>
        </div>

        <div className="flex shadow-lg rounded-2xl bg-slate-50 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 p-1.5 flex-col flex-shrink-0 custom-range:w-full ">
          <img
            className="w-full h-[140px] sm:h-[160px] md:h-[170px] lg:h-[180px] xl:h-[190px] 2xl:h-[200px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl custom-range:h-[200px]"
            src={cusine}
            alt="Cuisine 1"
          />
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold mt-2">
            Name 1
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mt-1">
            <i className="fa-regular fa-star text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Delivery time
            </span>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
            Location
          </p>
        </div>


       <div className="flex shadow-lg rounded-2xl bg-slate-50 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 p-1.5 flex-col flex-shrink-0 custom-range:w-full ">
          <img
            className="w-full h-[140px] sm:h-[160px] md:h-[170px] lg:h-[180px] xl:h-[190px] 2xl:h-[200px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl custom-range:h-[200px]"
            src={cusine}
            alt="Cuisine 1"
          />
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold mt-2">
            Name 1
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mt-1">
            <i className="fa-regular fa-star text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Delivery time
            </span>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
            Location
          </p>
        </div>

        <div className="flex shadow-lg rounded-2xl bg-slate-50 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 p-1.5 flex-col flex-shrink-0 custom-range:w-full ">
          <img
            className="w-full h-[140px] sm:h-[160px] md:h-[170px] lg:h-[180px] xl:h-[190px] 2xl:h-[200px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl custom-range:h-[200px]"
            src={cusine}
            alt="Cuisine 1"
          />
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold mt-2">
            Name 1
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mt-1">
            <i className="fa-regular fa-star text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Delivery time
            </span>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
            Location
          </p>
        </div>
        <div className="flex shadow-lg rounded-2xl bg-slate-50 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 p-1.5 flex-col flex-shrink-0 custom-range:w-full ">
          <img
            className="w-full h-[140px] sm:h-[160px] md:h-[170px] lg:h-[180px] xl:h-[190px] 2xl:h-[200px] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl custom-range:h-[200px]"
            src={cusine}
            alt="Cuisine 1"
          />
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-semibold mt-2">
            Name 1
          </p>
          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 mt-1">
            <i className="fa-regular fa-star text-green-600 text-[10px] sm:text-xs md:text-sm lg:text-base"></i>
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-base">
              Delivery time
            </span>
          </div>
          <p className="text-[10px] sm:text-xs md:text-sm lg:text-base mt-1">
            Location
          </p>
        </div>

       
      </div>
    </div>
  );
};

export default Cusine;
