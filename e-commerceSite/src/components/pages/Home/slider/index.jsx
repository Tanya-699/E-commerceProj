import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// ✅ Import images correctly
import sliderImage1 from "../../../../assets/images/sliderImage1.jpg";
import sliderImage2 from "../../../../assets/images/sliderImage2.jpg";
import sliderImage3 from "../../../../assets/images/sliderImage3.jpg";
import sliderImage4 from "../../../../assets/images/sliderImage4.jpg";
import sliderImage5 from "../../../../assets/images/sliderImage5.jpg";
import sliderImage6 from "../../../../assets/images/sliderImage6.jpg";
import sliderImage7 from "../../../../assets/images/sliderImage7.jpg";

const FashionSlider = () => {
  const sliderRef = React.useRef(null); // Reference for slider

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows to use custom ones
  };

  const sliderImages = [
    { image: sliderImage1 },
    { image: sliderImage2 },
    { image: sliderImage3 },
    { image: sliderImage4 },
    { image: sliderImage5 },
    { image: sliderImage6 },
    { image: sliderImage7 },
  ];

  return (
    <div className="w-full max-w-[91%] mx-auto pt-[20px] home-slider relative">
      {/* Left Arrow */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute top-1/2 left-5 sm:left-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-2 rounded-full w-11 h-11 sm:w-11 sm:h-11 z-10 hover:bg-[#71ae7f] shadow-lg cursor-pointer"
      >
        <FontAwesomeIcon icon={faAngleLeft} className="text-2xl sm:text-lg" />
      </button>

      {/* Slider Component */}
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((item, index) => (
          <div key={index} className="relative overflow-hidden">
            {/* Fashion Image */}
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] md:h-[400px] sm:h-[300px] object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute top-1/2 right-5 sm:right-4 transform -translate-y-1/2 bg-gray-400 bg-opacity-50 text-white p-3 rounded-full w-11 h-11 sm:w-11 sm:h-11 z-10 hover:bg-[#71ae7f] shadow-lg cursor-pointer"
      >
        <FontAwesomeIcon icon={faAngleRight} className="text-3xl sm:text-lg" />
      </button>
    </div>
  );
};

export default FashionSlider;
