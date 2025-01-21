import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Navbar';

const RestrauntMenu = () => {
  const { id } = useParams();

  const [restrauntInfo, setRestrauntInfo] = useState(null);
  const [menu, setMenu] = useState(null);
  const [error, setError] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  async function getMenu() {
    try {
      const response = await fetch(`https://swiggybackend-e1fj.onrender.com/food/getRestMenu/${id}`);
      const data = await response.json();
      setRestrauntInfo(data?.restaurant);
      setMenu(data?.restaurantMenu);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    getMenu();
  }, [id]);

  const toggleDescription = (itemId) => {
    setExpandedDescriptions((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="w-full pt-36 custom-range:p-0">
      <div className="custom-range:hidden">
        <Navbar />
      </div>
     <NavLink to={'/'}>
     <div  className="hidden custom-range:block mb-5 p-4 rounded-md bg-slate-200">
        <i className="fa-solid text-[24px] fa-arrow-left"></i>
      </div>
     </NavLink>

      {/* Restaurant Info */}
      <div className="w-[52%] bg-gray-200 custom-range:w-[93%] mx-auto shadow-md pb-4 rounded-t-lg rounded-b-3xl">
        <div className="w-[98%] bg-white shadow-md border-t rounded-t-lg rounded-b-2xl custom-range:w-[95%] mx-auto p-4">
          {error ? (
            <h1 className="text-2xl">Error fetching data</h1>
          ) : restrauntInfo ? (
            <div key={restrauntInfo._id} className="custom-range:flex justify-between items-center">
              <div className="flex flex-col gap-4 custom-range:gap-1">
                <h3 className="text-2xl font-extrabold mt-1">{restrauntInfo.name}</h3>
                <p className="text-gray-500 mb-4 custom-range:text-sm">
                  {restrauntInfo.cuisine.join(',')}
                </p>
              </div>
              <div className="flex flex-col">
                <div className="bg-green-600 w-12 h-6 rounded-md flex items-center justify-center gap-1">
                  <i className="fa-solid text-white text-xs fa-star"></i>
                  <span className="text-[12px] text-white font-semibold">{restrauntInfo.rating}</span>
                </div>
                <div className="2xl:text-md custom-range:h-2 text-[9px] text-gray-500">
                  {restrauntInfo.reviewsCount}
                  <span>k+ ratings</span>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className='w-[52%] flex bg-gray-200  custom-range:w-[93%] p-2 mx-auto shadow-md mt-6 pb-4 rounded-lg rounded-b-3xl'><input className=' focus:outline-none  bg-gray-200 cursor-not-allowed pt-1   border-none w-full text-start text-lg text-gray-700 ' placeholder=" Search for dishes "  readOnly type="text" /></div>

      {/* Menu */}
      <div className="w-[52%] rounded-md custom-range:w-[93%] mx-auto mt-5">
        {/* Top Section */}
      
        <div className="flex justify-between rounded-lg border-t-2 bg-slate-100 p-4 mb-8">
          <p className="text-2xl font-bold">Restaurant Menu</p>
        </div>
      

        {/* Lower Section */}
        {menu ? (
          menu.map((item) => {
            const isExpanded = expandedDescriptions[item.id] || false;
            const truncatedDescription =
              item?.description && item.description.length > 100
                ? item.description.slice(0, 140) + '...'
                : item.description;

            return (
              <div key={item._id} className="w-full mb-4">
                {/* Card */}
                <div  className="flex justify-between w-full bg-white border-b-2 pb-7">
                  {/* Left Section */}
                  <div key={item._id} className="w-[60%] p-3">
                    <p className="text-2xl font-bold custom-range:text-xl">{item?.name}</p>
                    <p className="text-sm font-bold pt-2 ">₹{item?.price}</p>
                    <i className="fa-solid  bg-green-500 rounded text-white  text-xs fa-star"></i>
                    <span className='pl-2 font-semibold text-sm'>{item?.rating}</span>
                    <p className="text-sm custom-range:text-xs text-gray-500">
                      {isExpanded ? item.description : truncatedDescription}
                      {item.description && item.description.length > 100 && (
                        <span
                          onClick={() => toggleDescription(item.id)}
                          className="text-gray-800 cursor-pointer"
                        >
                          {isExpanded ? ' Show less' : 'more'}
                        </span>
                      )}
                    </p>
                  </div>
                  {/* Right Section */}
                  <div className="flex flex-col items-center w-[40%]">
                    <div className="relative w-full h-48 custom-range:w-34 custom-range:h-36 xl:h-44 lg:h-40">
                      <img
                        className="w-full rounded-lg 2xl:h-40 custom-range:h-32 xl:h-40 lg:h-36  "
                        src={item?.imageUrl}
                        alt=""
                      />
                      <button className="w-[105px] absolute bottom-0 flex justify-center items-center left-1/2 transform -translate-x-1/2 bg-white border shadow-md text-green-600 font-bold px-4 py-2  text-lg h-10 rounded-md 2xl:w-[200px]">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default RestrauntMenu;
