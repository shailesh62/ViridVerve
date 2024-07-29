import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App mb-16">
      <nav className="bg-gray-800 text-white shadow-lg fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <a href="/" className="flex items-center py-5 px-2 text-white">
                  <img src={"https://cdn-icons-png.freepik.com/512/15714/15714783.png"} alt="Logo" className="h-8 w-8 mr-2" />
                  <span className="font-bold text-xl">Brand</span>
                </a>
              </div>
            </div>
            
            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="el py-5 px-3 text-white transition duration-300">Home</a>
              <a href="/about" className="el py-5 px-3 text-white transition duration-300">About</a>
              <a href="/contact" className="el py-5 px-3 text-white transition duration-300">Contact Us</a>
              <a href="/shop" className="el py-5 px-3 text-white transition duration-300">Shop</a>
              <a href="/blog" className="el py-5 px-3 text-white transition duration-300">Blog</a>
              <button className="el py-5 px-3 text-white transition duration-300">
                <FaSearch />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button" onClick={toggleMenu}>
                <svg
                  className="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <a href="/" className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">Home</a>
          <a href="/about" className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">About</a>
          <a href="/contact" className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">Contact Us</a>
          <a href="/shop" className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">Shop</a>
          <a href="/blog" className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">Blog</a>
          <button className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">
            <FaSearch />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
