import React, { useEffect, useState } from "react";
import img1 from "../assets/images/Crousel image/img1.png";
import offerimg3 from "../assets/images/Crousel image/img2.png";
import { NavLink } from "react-router-dom";

const Restraunts = () => {

  const[restraunts,setRestraunt] = useState(null)
  async function getRestraunt() {
    
    try {
      
      const response = await fetch('https://swiggybackend-e1fj.onrender.com/restuarant/getAllRestuarant')
      const data = await response.json();
      // console.log(data)
      setRestraunt(data)



    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getRestraunt()
   
  }, [])
  
  return (
    <div className="w-[90%] border-t-2 p-1 rounded-xl sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[%] 2xl:w-[80%] mx-auto mt-16">
      {/* top section  */}
      <div>
        <div className="pl-1 text-gray-700 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Popular Restraunts
        </div>
        <div>filter</div>
      </div>

      {/* lower section */}
      <div className="flex  flex-wrap shadow-md rounded-lg gap-8 p-1">
        {/* card  */}
        {restraunts ?

            (restraunts.length > 0 ? (
              restraunts.map((restraunt)=>
              (
                
                <NavLink key= {restraunt._id}  to={`/restrauntmenu/${restraunt._id}`}>



                <div key={restraunt._id} className=" rounded-md cursor-pointer transition-transform hover:scale-95 custom-range:flex gap-3 sm:w-[230px] 2xl:w-[275px] lg:w-[240px]">
                  {/* left section image  */}
                  <div className=" custom-range:w-[45%] relative">
                    <img
                      className="rounded-lg mb-2 w-full 2xl:h-44 lg:h-44 custom-range:w-[full] "
                      src={restraunt.imageUrl}
                      alt=""
                    />
                    {/* Black bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                  </div>
        
                  {/* right section */}
                  <div className="flex flex-col justify-center custom-range:w-[50%]">
                    <i className="text-gray-500 fa-solid fa-ellipsis-vertical custom-range:relative bottom-7"></i>
        
                    <p className="font-bold custom-range:text-lg">{restraunt.name}</p>
        
                    <i className="fa-regular fa-star "><span className="text-xs">{restraunt.rating}</span></i>
        
                    <p className="font-semibold text-sm text-gray-500 custom-range:text-">
                      {restraunt.cuisine[0]}
                    </p>
        
                    <p className="font-semibold text-gray-500 custom-range:text-md">
                      location
                    </p>
                  </div>
                </div>
                </NavLink>






              ))
            ) :<p>No restraunts available</p>)

         : <p>loading...</p>}


       
        

       

       
       

      </div>
    </div>
  );
};

export default Restraunts;
 