import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import offerimg from '../assets/images/Crousel image/offerimg.png';
import offerimg2 from '../assets/images/Crousel image/img1.png';
import offerimg3 from '../assets/images/Crousel image/img2.png';
import offerimg4 from '../assets/images/Crousel image/img3.png';
import offerimg5 from '../assets/images/Crousel image/img5.png';
import offerimg6 from '../assets/images/Crousel image/img4.png';


const OfferCrousel = () => {
  return (
    <div className="mt-10 mx-2 ">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        showIndicators={true}
        showStatus={false}
        interval={3000}
        stopOnHover={true}
        swipeable={true}
        transitionTime={500}
      >
        <div>
          <img
            className=" rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg}
            alt="Offer 1"
          />
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg3}
            alt="Offer 2"
          />
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg}
            alt="Offer 3"
          />
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg2}
            alt="Offer 4"
          />
        </div>
        <div>
          <img
            className="rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg}
            alt="Offer 5"
          />
        </div>

        <div>
          <img
            className=" rounded-md w-full object-cover custom-range:h-48 sm:h-56 md:h-64 lg:h-72 2xl:h-96"
            src={offerimg5}
            alt="Offer 5"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OfferCrousel;
