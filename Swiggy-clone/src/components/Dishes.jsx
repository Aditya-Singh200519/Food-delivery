import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";

const Dishes = () => {
  // store api data
  const [Dishes, setDishes] = useState([]);
  const containerRef = useRef(null);

  async function getDishes() {
    try {
      const response = await fetch(
        "https://swiggybackend-e1fj.onrender.com/food/getFood"
      );
      const data = await response.json();
      setDishes(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDishes();
  }, []);

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;
      if (containerRef.current.scrollLeft + containerWidth < contentWidth) {
        containerRef.current.scrollLeft += 100; // Scroll by 100px to the right
      }
    }
  };

  const handlePrevious = () => {
    if (containerRef.current) {
      if (containerRef.current.scrollLeft > 0) {
        containerRef.current.scrollLeft -= 100; // Scroll by 100px to the left
      }
    }
  };

  return (
    <div className="border-t-2 pt-1 shadow-md rounded-lg w-[90%] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mx-auto mt-12 overflow-hidden pb-8">
      {/* upper Section */}
      <div className="flex justify-between items-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        <div className="pl-4 text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Dishes
        </div>
        <div className="flex mx-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {/* Left Arrow */}
          <div
            onClick={handlePrevious}
            className="border rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-slate-300 flex justify-center items-center cursor-pointer hover:bg-slate-400"
          >
            <i className="fa-solid fa-arrow-left text-sm sm:text-base md:text-lg"></i>
          </div>
          {/* Right Arrow */}
          <div
            onClick={handleNext}
            className="border rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-slate-300 flex justify-center items-center cursor-pointer hover:bg-slate-400"
          >
            <i className="fa-solid fa-arrow-right text-sm sm:text-base md:text-lg"></i>
          </div>
        </div>
      </div>

      {/* lower Items section */}
      <div
        ref={containerRef}
        className="mt-6 scrollbar-hide sm:mt-2 md:mt-3 lg:mt-4 xl:mt-6 overflow-x-auto scroll-smooth flex gap-4 sm:gap-6 md:gap-14"
      >
        {Dishes ? (
          
            Dishes.map((dish) => (
              <div key={dish._id} className="flex flex-col items-center flex-shrink-0 ">
                <NavLink to={""}>
                  <img
                    className=" w-36 h-36 rounded-xl sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-36  custom-range:w-28 custom-range:h-20"
                    src={dish.imageUrl}
                    alt="Cuisine Item"
                  />
                </NavLink>
                <p className="text-center text-gray-600 mt-2 text-sm sm:text-base md:text-md  2xl:text-sm   custom-range:text-[10px]">
                  {dish.name}
                </p>
              </div>
            ))
          )  : (
          <p>loading..</p>
        )}
      </div>
    </div>
  );
};

export default Dishes;
