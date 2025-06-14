import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Award, ChevronRight, BarChart2, MessageSquare } from 'react-feather';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      {/* Advanced Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)] animate-pulse-slow"></div>
        
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10 rounded-full"
            initial={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className="w-full py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Content */}
              <motion.div 
                className="lg:w-[58%] text-center lg:text-left space-y-6 md:space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold text-gray-800 leading-tight"
                  variants={childVariants}
                >
                  <motion.span 
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    Your Dream Score Starts Here – 
                  </motion.span>
                  <br />
                  <motion.span 
                    className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{ backgroundPosition: '100% 50%' }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      repeatType: 'reverse',
                      ease: "linear"
                    }}
                    whileHover={{
                      backgroundPosition: '0% 50%',
                      transition: { duration: 0.5 }
                    }}
                  >
                    A Plus Academy
                  </motion.span>{' '}
                  <motion.span 
                    className="inline-block"
                    whileHover={{ scale: 1.02 }}
                  >
                    for PTE & IELTS
                  </motion.span>
                </motion.h1>
                
                <motion.p
                  className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
                  variants={childVariants}
                  whileHover={{
                    x: 5,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  Achieve Your Goals with Expert Guidance and Free Demo Classes
                </motion.p>
                
                {/* Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6"
                  variants={containerVariants}
                >
                  <motion.a
                    href="/enroll"
                    className="inline-flex items-center bg-red-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition-all relative overflow-hidden"
                    variants={childVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity"
                      whileHover={{ opacity: 0.1 }}
                    />
                    Enroll Now <ChevronRight className="ml-2 w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="/courses"
                    className="inline-flex items-center bg-white text-gray-800 font-semibold text-lg px-8 py-4 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all relative overflow-hidden"
                    variants={childVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.span 
                      className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity"
                      whileHover={{ opacity: 0.05 }}
                    />
                    Explore Courses
                  </motion.a>
                </motion.div>
                
                {/* Success Badge */}
                <motion.div
                  className="inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg mt-6"
                  variants={childVariants}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <motion.span 
                    className="text-red-600 font-bold text-lg mr-2"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: { repeat: Infinity, duration: 2 }
                    }}
                  >
                    98%
                  </motion.span>
                  <span className="text-gray-700 font-semibold">Success Rate</span>
                </motion.div>
              </motion.div>
              
              {/* Image Card */}
              <motion.div 
                className="lg:w-[42%] w-full max-w-xl lg:max-w-none"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
                  <motion.div
                    className="aspect-w-16 aspect-h-9 w-full h-72 sm:h-96"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="/images/student-man.jpg"
                      alt="A Plus Academy students"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  
                  {/* Overlay Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <motion.div 
                      className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center mb-3">
                        <motion.div 
                          className="bg-red-600 p-2 rounded-lg mr-3"
                          whileHover={{ rotate: 15 }}
                        >
                          <BookOpen className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-800">High Achievers</h3>
                      </div>
                      <motion.p 
                        className="text-gray-600 mb-4"
                        whileHover={{ x: 3 }}
                      >
                        Join our community of successful students
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-2">
                        <motion.span 
                          className="inline-flex items-center bg-red-600/10 text-red-600 text-xs font-medium px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <BarChart2 className="w-3 h-3 mr-1" /> Score Improvement
                        </motion.span>
                        <motion.span 
                          className="inline-flex items-center bg-red-600/10 text-red-600 text-xs font-medium px-3 py-1 rounded-full"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <MessageSquare className="w-3 h-3 mr-1" /> Expert Feedback
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Animated Badge */}
                  <motion.div 
                    className="absolute -top-5 -right-5 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <Award className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Floating Icons */}
                  <motion.div 
                    className="absolute top-4 left-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <BookOpen className="w-5 h-5 text-red-600" />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-16 right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, 10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <BarChart2 className="w-5 h-5 text-red-600" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        @keyframes text-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;