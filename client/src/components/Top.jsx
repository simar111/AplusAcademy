import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TopRankers = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.4)" },
    glow: {
      boxShadow: "0 0 20px 5px rgba(220, 38, 38, 0.4)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div 
      className="relative bg-gradient-to-br from-white via-red-50 to-white py-24 overflow-hidden"
      ref={ref}
    >
      {/* Animated floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-200/30 rounded-full"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() * 100) - 50],
            x: [0, (Math.random() * 60) - 30],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main grid pattern */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.span 
            className="inline-block px-5 py-2 text-sm font-semibold tracking-wider text-red-600 uppercase rounded-full bg-red-100/80 backdrop-blur-sm mb-6 shadow-sm"
            variants={itemVariants}
          >
            Student Success Stories
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Top Rankers</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Celebrating exceptional achievements of our students in PTE Academic
          </motion.p>
        </motion.div>

        {/* Rankers cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[
            {
              name: "Priya Sharma",
              score: "90/90",
              exam: "PTE Academic",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
              resultImage: "/pte-result-sample.jpg",
              testimonial: "Achieved perfect score in just 3 months of coaching!",
              highlights: ["90 in Speaking", "90 in Writing", "90 in Reading"]
            },
            {
              name: "Rahul Verma",
              score: "88/90",
              exam: "PTE Academic",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
              resultImage: "/pte-result-sample.jpg",
              testimonial: "Improved from 65 to 88 with expert guidance",
              highlights: ["88 in Listening", "87 in Speaking", "90 in Writing"]
            },
            {
              name: "Neha Patel",
              score: "87/90",
              exam: "PTE Academic",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300",
              resultImage: "/pte-result-sample.jpg",
              testimonial: "Got my desired score in first attempt!",
              highlights: ["87 in Reading", "89 in Listening", "85 in Speaking"]
            }
          ].map((student, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-30 blur-md"
                initial="initial"
                whileHover="glow"
                variants={glowVariants}
              />
              
              {/* Main card */}
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 group-hover:shadow-xl overflow-hidden border border-gray-100 group-hover:border-red-100">
                {/* Student image with floating effect */}
                <motion.div 
                  className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl"
                  animate="float"
                  variants={floatVariants}
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Score badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-800 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    {student.score}
                  </div>
                </motion.div>
                
                {/* Student info */}
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-1">{student.name}</h3>
                <p className="text-gray-600 text-center mb-6">{student.exam}</p>
                
                {/* Result highlights */}
                <div className="mb-6">
                  {student.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* Result image preview */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden border border-gray-200 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={student.resultImage}
                    alt={`${student.name}'s result`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{student.testimonial}</p>
                  </div>
                </motion.div>
                
                {/* Social proof */}
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to join our success stories?</h3>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center">
              Start Your Journey Today
              <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TopRankers;