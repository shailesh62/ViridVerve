// HomePage.jsx
import React, { useState } from "react";
import images from './CarouselData';
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {images.map((image, index) => (
        <div key={image.id} id={image.id} className="carousel-item relative w-full h-screen mt-2">
          <img src={image.url} className="w-full h-full object-cover" alt={image.alt} />
          <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 bg-slate-900 bg-opacity-50 text-white mt-0">
            <h1 className="text-3xl font-bold mb-4">{image.slogan}</h1>
            <p className="text-lg mb-6 text-center px-4">
              {image.description}
            </p>
            <Link
              to="/shop"
              className="btn btn-primary text-white py-2 px-4 rounded"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800"
      >
        &gt;
      </button>
    </div>
  );
};

export default HomePage;
