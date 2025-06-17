import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'react-feather';

const WhatsAppFloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = '+917355825232'; // Your WhatsApp number
  const message = 'Hello A+ Academy, I need some information about...'; // Default message

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Main Floating Button */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Expanded Options Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute bottom-20 right-0 w-64 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/40 overflow-hidden"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">24/7 Support</h3>
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-5">
                  Get instant help from our education experts via WhatsApp
                </p>
                <a
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 text-white font-medium py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Chat Now
                </a>
              </div>
              <div className="bg-gray-50/50 border-t border-gray-100 p-3 text-center">
                <p className="text-xs text-gray-500">
                  Typically replies within 15 minutes
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden ${isExpanded ? 'bg-red-500' : 'bg-green-500'}`}
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isExpanded 
              ? '0 10px 25px -5px rgba(239, 68, 68, 0.4)'
              : '0 10px 25px -5px rgba(37, 211, 102, 0.4)'
          }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-500"
            animate={{
              opacity: isExpanded ? 0 : 1,
              scale: isExpanded ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-500"
            animate={{
              opacity: isExpanded ? 1 : 0,
              scale: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Animated Icons */}
          <motion.div
            className="absolute"
            animate={{
              rotate: isExpanded ? 180 : 0,
              scale: isExpanded ? 0.8 : 1,
            }}
            transition={{ type: 'spring', stiffness: 500 }}
          >
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <MessageSquare className="w-7 h-7 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Pulsing Notification Dot */}
          {!isExpanded && (
            <motion.div
              className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          )}

          {/* Floating Label */}
          <motion.div
            className="absolute -left-24 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-100 whitespace-nowrap"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-sm font-medium text-gray-700">24/7 Support</span>
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WhatsAppFloatingButton;