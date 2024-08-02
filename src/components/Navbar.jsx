import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App mb-16">
      <nav className="bg-gray-800 text-white shadow-lg fixed top-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo */}
              <div>
                <Link to="/" className="flex items-center py-5 px-2 text-white gap-4 justify-center">
                  <p className="text-6xl">
                    V
                  </p>
                  <div>
                    <h2 className="font-bold text-xl">ViridVerve</h2>
                    <p className="text-sm">Vibrant Living Sustainable Choices</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="el py-5 px-3 text-white transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="el py-5 px-3 text-white transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="el py-5 px-3 text-white transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/shop"
                className="el py-5 px-3 text-white transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className="el py-5 px-3 text-white transition duration-300"
              >
                Blog
              </Link>
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
        <div className={"mobile-menu md:hidden"}>
          {isOpen && (
            <>
              <Link
                to="/"
                className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/shop"
                className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
              >
                Shop
              </Link>
              <Link
                to="/blog"
                className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300"
              >
                Blog
              </Link>
              <button className="block py-2 px-4 text-sm text-white hover:bg-gray-700 transition duration-300">
                <FaSearch />
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default App;
