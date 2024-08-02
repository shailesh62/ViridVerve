import React from 'react';

const brands = [
    {
      name: "Eco Threads",
    },
    {
      name: "Green Style",
    },
    {
      name: "Sustainable Wear",
    },
    {
      name: "Organic Fashion",
    },
    {
      name: "Eco Chic",
    },
    {
      name: "Pure Earth",
    },
    {
      name: "Natural Clothing Co.",
    },
    {
      name: "Green Garb",
    },
    {
      name: "Earth Wear",
    },
    {
      name: "Conscious Couture",
    }
  ];  

const SideMovingCarousel = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden relative h-32 bg-gray-100 flex-col"> 
      <div className="animate-marquee whitespace-nowrap">
        {brands.map((brand, index) => ( 
          <span
            key={index}
            className="inline-block px-20 py-2 text-gray-800 font-bold text-5xl"
          >
            {brand.name}
          </span>
        ))}
        {/* Duplicate the brands for a seamless transition */}
        {brands.map((brand, index) => (
          <span
            key={index + brands.length}
            className="inline-block px-4 py-2 text-gray-800 font-bold text-5xl"
          >
            {brand.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SideMovingCarousel;