import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HospitalCard = ({ name, location, address, directions, images, promoMessage }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImage(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const sliderSettings = {
    initialSlide: selectedImage,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: "20"
  };

  return (
    <div className="m-2 border-2 border-gray-300 rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="text-xl font-semibold mb-2">{location}</div>
      <div className="text-blue-500 text-lg font-bold">
        <a href="#">{name}</a>
      </div>
      <div className="text-sm mb-2">{address}</div>
      <div className="flex justify-between">
        <div className="flex items-center space-x-1 mb-2">
          {images.slice(0, 4).map((image, index) => (
            <p
              key={index}
              className="w-10  rounded bg-gray-200 flex justify-center items-center cursor-pointer"
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Preview ${index}`} className="rounded" />
            </p>
          ))}
          {images.length > 4 && (
            <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center text-sm cursor-pointer" onClick={() => setShowPopup(true)}>
              +{images.length - 4}
            </div>
          )}
        </div>
        <div className="text-blue-500 mb-2">
          <a href="#">{directions}</a>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-screen-md w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
            >
              ✕
            </button>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <img src={image} alt={`Slide ${index}`} className="max-h-[500px] w-auto p-5 " />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
