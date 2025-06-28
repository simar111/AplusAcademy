import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiBookOpen, FiInfo, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsOpen(false);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/+917355825232', '_blank');
  };

  const navItems = [
    { path: "/", name: "Home", icon: <FiHome className="text-lg" /> },
    { path: "/courses", name: "Courses", icon: <FiBookOpen className="text-lg" /> },
    { path: "/about", name: "About Us", icon: <FiInfo className="text-lg" /> },
    { path: "/contact", name: "Contact", icon: <FiMail className="text-lg" /> },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="flex items-center space-x-2"
          >
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: -2,
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 10
                  }
                }}
              >
                <img
                  src="./images/Logo.jpg"
                  alt="A+ Academy Logo"
                  className="h-10 w-auto rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:shadow-[0_0_12px_rgba(220,38,38,0.25)]"
                />
              </motion.div>
              <motion.span 
                className="ml-3 text-xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                A+ Academy
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-red-600 font-medium' 
                    : 'text-gray-700 hover:text-red-600'
                }`}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="flex items-center z-10 relative">
                  <span className={`mr-2 transition-colors ${
                    location.pathname === item.path ? 'text-red-600' : 'group-hover:text-red-600'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-[15px] tracking-wide">
                    {item.name}
                  </span>
                </div>
                
                {/* Hover background animation */}
                {hoveredItem === item.path && (
                  <motion.div
                    className={`absolute inset-0 rounded-lg ${
                      location.pathname === item.path 
                        ? 'bg-red-100/40' 
                        : 'bg-red-50/30'
                    }`}
                    layoutId="navHover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  />
                )}

                {/* Active page indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-4 h-[2px] bg-red-600 rounded-t-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }}
                    layoutId="activeIndicator"
                  />
                )}
              </Link>
            ))}

            <div className="h-5 w-px bg-gray-200 mx-2"></div>

            {/* WhatsApp Enrollment Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <button
                onClick={openWhatsApp}
                className="flex items-center px-4 py-2 text-[15px] font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:from-green-600 hover:to-green-700"
              >
                <FiMessageSquare className="mr-2 text-lg" />
                Enroll on WhatsApp
              </button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="lg:hidden flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 15
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none transition-colors duration-200"
              aria-label="Menu"
            >
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
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
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto"
            }}
            exit={{ 
              opacity: 0, 
              height: 0
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={`mobile-${item.path}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className={`flex items-center px-4 py-3 text-[15px] font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'text-red-600 bg-red-50'
                        : 'text-gray-800 hover:text-red-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.span 
                        className="ml-auto h-2 w-2 bg-red-600 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 500,
                          damping: 15
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <button
                  onClick={openWhatsApp}
                  className="flex items-center justify-center w-full mx-4 px-4 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow hover:shadow-md transition-all duration-300"
                >
                  <FiMessageSquare className="mr-2 text-lg" />
                  Enroll on WhatsApp
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;