// src/components/ProductDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import clothingItems from './ExpandProductDetail';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = clothingItems.find(item => item.id === parseInt(productId));

  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');
  const [isHovering, setIsHovering] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setBackgroundPosition('0% 0%');
  };

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleBuyNow = () => {
    alert(`Buying ${quantity} of ${product.name}`);
  };

  return (
    <div className="container mx-auto bg-gray-100 p-10 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div
            className={`zoom-container ${isHovering ? 'hovering' : ''}`}
            style={{
              backgroundImage: isHovering ? `url(${product.image})` : 'none',
              backgroundPosition: backgroundPosition,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
          >
            <img 
              src={product.image} 
              alt={product.name}
              className={`zoom-image ${isHovering ? 'hidden' : 'block'} w-full h-auto object-cover rounded-lg shadow-xl mb-10 md:mb-0`}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mb-4">{product.price}</p>
          <p className="text-sm text-gray-600 mb-4">{product.reviews}</p>
          <div className="flex items-center mb-6">
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-300"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300">{quantity}</span>
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-300"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          <div className="flex items-center mb-6">
            <button
              className="text-white px-6 py-2 rounded-lg transition duration-200 buy-now"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
          <p className="mb-6 whitespace-pre-line text-gray-700">{product.description}</p>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <img src={product.image} alt={product.name} className="max-w-full max-h-full rounded-lg shadow-lg" />
            <button
              className="absolute top-0 right-0 mt-2 mr-2 bg-white text-black rounded-full p-2"
              onClick={handleClosePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
