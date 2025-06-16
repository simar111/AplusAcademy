import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Zap, BarChart2, Award, CheckCircle,Star } from 'react-feather';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax effects
  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Dynamic Gradient Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.05) 0%, transparent 40%),
            linear-gradient(to bottom right, #f9fafb, #f3f4f6)
          `,
          x: backgroundX,
          y: backgroundY
        }}
      />
      
      {/* Particle Network */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10 rounded-full"
            initial={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-red-500/5 blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-500/5 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center py-24">
        <AnimatePresence>
          {isVisible && (
            <motion.div 
              className="w-full flex flex-col lg:flex-row items-center justify-between gap-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Text Content */}
              <motion.div 
                className="lg:w-[55%] text-center lg:text-left space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-bold text-gray-900 leading-tight"
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
                    animate={{ 
                      backgroundPosition: '100% 50%',
                      transition: { 
                        duration: 8, 
                        repeat: Infinity, 
                        repeatType: 'reverse',
                        ease: "linear"
                      }
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
                  className="text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
                  variants={childVariants}
                  whileHover={{
                    x: 5,
                    transition: { type: 'spring', stiffness: 300 }
                  }}
                >
                  Achieve Your Goals with Expert Guidance and Free Demo Classes
                </motion.p>
                
                {/* Stats Grid */}
                <motion.div 
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8"
                  variants={containerVariants}
                >
                  {[
                    { icon: <CheckCircle className="w-5 h-5" />, value: "98%", label: "Success Rate" },
                    { icon: <Star className="w-5 h-5" />, value: "500+", label: "Students" },
                    { icon: <Zap className="w-5 h-5" />, value: "15 Days", label: "Avg. Improvement" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-gray-100"
                      variants={childVariants}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                      }}
                    >
                      <div className="flex items-center">
                        <div className="p-2 bg-red-100 rounded-lg mr-3 text-red-600">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
                  variants={containerVariants}
                >
                  <motion.a
                    href="/enroll"
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-red-500/30 transition-all overflow-hidden group"
                    variants={childVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Enroll Now <ChevronRight className="ml-2 w-5 h-5" />
                    </span>
                    <motion.span 
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ opacity: 0.1 }}
                    />
                    {/* Animated sparkles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(3)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="absolute bg-white rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 1.5],
                            opacity: [0, 0.8, 0],
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 2,
                            delay: i * 0.3
                          }}
                          style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            left: '50%',
                            top: '50%'
                          }}
                        />
                      ))}
                    </div>
                  </motion.a>
                  <motion.a
                    href="/courses"
                    className="relative inline-flex items-center justify-center bg-white text-gray-800 font-semibold text-lg px-8 py-4 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all overflow-hidden group"
                    variants={childVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Explore Courses</span>
                    <motion.span 
                      className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ opacity: 0.05 }}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
              
              {/* Enhanced Image Card */}
              <motion.div 
                className="lg:w-[45%] w-full max-w-xl lg:max-w-none relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group h-full min-h-[500px]">
                  {/* Main Image */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src="/images/student-man.jpg"
                      alt="A Plus Academy students"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/10 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <motion.div 
                      className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center mb-4">
                        <motion.div 
                          className="bg-red-600 p-3 rounded-xl mr-4 shadow-md"
                          whileHover={{ rotate: 15 }}
                        >
                          <Award className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-900">High Achievers</h3>
                      </div>
                      <motion.p 
                        className="text-gray-600 mb-6 text-lg"
                        whileHover={{ x: 3 }}
                      >
                        Join our community of successful students
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-3">
                        <motion.span 
                          className="inline-flex items-center bg-red-600/10 text-red-600 text-sm font-medium px-4 py-2 rounded-full"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <BarChart2 className="w-4 h-4 mr-2" /> Score Improvement
                        </motion.span>
                        <motion.span 
                          className="inline-flex items-center bg-red-600/10 text-red-600 text-sm font-medium px-4 py-2 rounded-full"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <BookOpen className="w-4 h-4 mr-2" /> Daily Practice
                        </motion.span>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <CheckCircle className="w-6 h-6 text-red-600" />
                  </motion.div>
                  
                  {/* Animated Badge */}
                  <motion.div 
                    className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-red-600 to-red-500 rounded-2xl flex flex-col items-center justify-center shadow-xl text-white"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    <div className="text-2xl font-bold">90+</div>
                    <div className="text-xs font-medium">Avg. Score</div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cursor Follower */}
      <motion.div 
        className="fixed pointer-events-none w-64 h-64 rounded-full bg-red-500/10 blur-xl -z-10"
        style={{
          x: mouseX,
          y: mouseY,
          left: -32,
          top: -32
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default Hero;