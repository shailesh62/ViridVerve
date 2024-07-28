// src/components/SustainableClothing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import clothingItems from './ClothingData';

const SustainableClothing = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className="container mx-auto bg-white">
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center"
        style={{ backgroundImage: `url("https://images.pexels.com/photos/4347654/pexels-photo-4347654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}
      >
        <h1 className="text-5xl font-bold text-white z-10">Sustainable Clothing</h1>
        <div className="absolute inset-0 bg-black opacity-50"></div> 
      </div>
      <div className="grid p-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
        {clothingItems.map((item, index) => (
          <div
            key={index}
            className="card shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-gray-100 border-2 border-gray-200"
          >
            <figure className="p-0">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-xl w-full h-48 object-cover rounded-b-none"
              />
            </figure>
            <div className="card-body items-center text-center transition-opacity duration-500 hover:opacity-90">
              <h2 className="card-title text-xl font-bold">{item.name}</h2>
              <p className="text-lg font-semibold text-green-600">{item.price}</p>
              <p className="text-sm text-gray-600 mb-2">{item.reviews}</p>
              <p className="mb-4">{item.description}</p>
              <div className="card-actions">
                <button className="btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainableClothing;
