import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <nav
      className={`bg-gradient-to-r from-gray-100 via-gray-50 to-gray-200 shadow-2xl fixed w-full z-20 backdrop-blur-md rounded-b-lg transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-b-2 border-gradient-to-r from-red-600 to-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="./images/Logo.jpg"
                alt="A+ Academy PTE Center Logo"
                className={`h-10 w-auto transform transition-all duration-700 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                } hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] hover:animate-pulse rounded-full`}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/"
              className="relative text-gray-800 font-semibold text-lg transition-all duration-400 group hover:text-red-600 px-4 py-2 rounded-full overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-400 group-hover:text-shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:tracking-wide">
                Home
              </span>
              <span className="absolute inset-0 bg-red-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"></span>
            </a>
            <div className="h-6 w-px bg-gray-300/50"></div>
            <a
              href="/courses"
              className="relative text-gray-800 font-semibold text-lg transition-all duration-400 group hover:text-red-600 px-4 py-2 rounded-full overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-400 group-hover:text-shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:tracking-wide">
                Courses
              </span>
              <span className="absolute inset-0 bg-red-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"></span>
            </a>
            <div className="h-6 w-px bg-gray-300/50"></div>
            <a
              href="/about"
              className="relative text-gray-800 font-semibold text-lg transition-all duration-400 group hover:text-red-600 px-4 py-2 rounded-full overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-400 group-hover:text-shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:tracking-wide">
             About Us
              </span>
              <span className="absolute inset-0 bg-red-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"></span>
            </a>
            <div className="h-6 w-px bg-gray-300/50"></div>
            <a
              href="/contact"
              className="relative text-gray-800 font-semibold text-lg transition-all duration-400 group hover:text-red-600 px-4 py-2 rounded-full overflow-hidden"
            >
              <span className="relative z-10 transition-all duration-400 group-hover:text-shadow-[0_0_8px_rgba(220,38,38,0.8)] group-hover:tracking-wide">
                Contact Us
              </span>
              <span className="absolute inset-0 bg-red-600/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-red-600 focus:outline-none transform transition-all duration-400 hover:scale-125 hover:shadow-[0_0_10px_rgba(220,38,38,0.5)]"
            >
              <svg
                className={`h-7 w-7 transform transition-transform duration-400 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100/95 backdrop-blur-lg shadow-xl transition-all duration-600 ease-in-out ${
          isOpen ? 'max-h-72 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'
        } rounded-b-lg`}
      >
        <div className="px-4 pt-3 pb-4 space-y-2 sm:px-6">
         <Link
    to="/courses"
    className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-200/60 rounded-lg font-semibold text-lg transition-all duration-400 hover:scale-105 relative overflow-hidden group"
  >
    Courses
    <span className="absolute inset-0 bg-red-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"></span>
  </Link>

  <Link
    to="/about"
    className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-200/60 rounded-lg font-semibold text-lg transition-all duration-400 hover:scale-105 relative overflow-hidden group"
  >
    About Us
    <span className="absolute inset-0 bg-red-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"></span>
  </Link>

  <Link
    to="/contact"
    className="block px-4 py-2 text-gray-800 hover:text-red-600 hover:bg-gray-200/60 rounded-lg font-semibold text-lg transition-all duration-400 hover:scale-105 relative overflow-hidden group"
  >
    Contact Us
    <span className="absolute inset-0 bg-red-600/20 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg origin-center"></span>
  </Link>
</div>
        </div>
      
    </nav>
  );
};

export default Navbar;