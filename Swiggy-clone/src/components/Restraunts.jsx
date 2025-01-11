import React from "react";
import img1 from "../assets/images/Crousel image/img1.png";
import offerimg3 from "../assets/images/Crousel image/img2.png";

const Restraunts = () => {
  return (
    <div className="w-[85%]  p-1 rounded-xl sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto mt-16">
      {/* top section  */}
      <div>
        <div className='pl-1 text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl"'>
          Popular Restraunts
        </div>
        <div>filter</div>
      </div>

      {/* lower section  */}
      {/* custom-range:flex flex-col gap-7 */}
      <div className="flex  flex-wrap   gap-8  ">

        {/* card  */}
        <div className="  rounded-md custom-range:flex gap-4 sm:w-[230px] ">
          {/* left section image  */}

          <div className="custom-range:w-[45%] ">
            <img
              className="rounded-lg mb-2  custom-range:w-[full] h-44"
              src={img1}
              alt=""
            />
          </div>

          {/* right section  */}

          <div className="flex flex-col justify-center custom-range:w-[50%] ">
            <i className="  text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>

            <p className="font-bold custom-range:text-lg">Restraunt name</p>

            <i className="fa-regular fa-star"></i>

            <p className="font-semibold text-gray-500 custom-range:text-md ">
              cusine
            </p>

            <p className="font-semibold text-gray-500 custom-range:text-md">
              location
            </p>
          </div>
        </div>

         <div className="  rounded-md custom-range:flex gap-4 sm:w-[230px] ">
          {/* left section image  */}

          <div className="custom-range:w-[45%] ">
            <img
              className="rounded-lg mb-2  custom-range:w-[full] h-44"
              src={img1}
              alt=""
            />
          </div>

          {/* right section  */}

          <div className="flex flex-col justify-center custom-range:w-[50%] ">
            <i className="  text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>

            <p className="font-bold custom-range:text-lg">Restraunt name</p>

            <i className="fa-regular fa-star"></i>

            <p className="font-semibold text-gray-500 custom-range:text-md ">
              cusine
            </p>

            <p className="font-semibold text-gray-500 custom-range:text-md">
              location
            </p>
          </div>
        </div>

 <div className="  rounded-md custom-range:flex gap-4 sm:w-[230px] ">
          {/* left section image  */}

          <div className="custom-range:w-[45%] ">
            <img
              className="rounded-lg mb-2  custom-range:w-[full] h-44"
              src={img1}
              alt=""
            />
          </div>

          {/* right section  */}

          <div className="flex flex-col justify-center custom-range:w-[50%] ">
            <i className="  text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>

            <p className="font-bold custom-range:text-lg">Restraunt name</p>

            <i className="fa-regular fa-star"></i>

            <p className="font-semibold text-gray-500 custom-range:text-md ">
              cusine
            </p>

            <p className="font-semibold text-gray-500 custom-range:text-md">
              location
            </p>
          </div>
        </div>

        <div className="  rounded-md custom-range:flex gap-4 sm:w-[230px] ">
          {/* left section image  */}

          <div className="custom-range:w-[45%] ">
            <img
              className="rounded-lg mb-2  custom-range:w-[full] h-44"
              src={img1}
              alt=""
            />
          </div>

          {/* right section  */}

          <div className="flex flex-col justify-center custom-range:w-[50%] ">
            <i className="  text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>

            <p className="font-bold custom-range:text-lg">Restraunt name</p>

            <i className="fa-regular fa-star"></i>

            <p className="font-semibold text-gray-500 custom-range:text-md ">
              cusine
            </p>

            <p className="font-semibold text-gray-500 custom-range:text-md">
              location
            </p>
          </div>
        </div>

         <div className="  rounded-md custom-range:flex gap-4 sm:w-[230px] ">
          {/* left section image  */}

          <div className="custom-range:w-[45%] ">
            <img
              className="rounded-lg mb-2  custom-range:w-[full] h-44"
              src={img1}
              alt=""
            />
          </div>

          {/* right section  */}

          <div className="flex flex-col justify-center custom-range:w-[50%] ">
            <i className="  text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>

            <p className="font-bold custom-range:text-lg">Restraunt name</p>

            <i className="fa-regular fa-star"></i>

            <p className="font-semibold text-gray-500 custom-range:text-md ">
              cusine
            </p>

            <p className="font-semibold text-gray-500 custom-range:text-md">
              location
            </p>
          </div>
        </div>






      </div>
    </div>
  );
};

export default Restraunts;
