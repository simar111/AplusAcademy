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
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const scoreVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
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
    initial: { boxShadow: "0 0 0 0 rgba(220, 38, 38, 0.3)" },
    glow: {
      boxShadow: "0 0 25px 5px rgba(220, 38, 38, 0.3)",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div 
      className="relative bg-gradient-to-b from-white to-gray-50 py-24 overflow-hidden"
      ref={ref}
    >
      {/* Animated floating elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-red-100/20 rounded-full"
          style={{
            width: `${Math.random() * 16 + 8}px`,
            height: `${Math.random() * 16 + 8}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() * 120) - 60],
            x: [0, (Math.random() * 80) - 40],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,white)] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

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
            variants={cardVariants}
          >
            PTE Academic Achievers
          </motion.span>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={cardVariants}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Top Scorers</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={cardVariants}
          >
            Celebrating exceptional PTE results from our students
          </motion.p>
        </motion.div>

        {/* Rankers cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {[
            {
              name: "Priyanshi",
              score: "90",
              exam: "PTE Academic",
              resultImage: "/images/Priyanshi.png",
              testimonial: "Achieved perfect score in just 3 months!",
              highlights: [
                { skill: "Speaking", score: "90" },
                { skill: "Writing", score: "90" },
                { skill: "Reading", score: "90" },
                { skill: "Listening", score: "82" }
              ]
            },
            {
              name: "Gurbinder Singh Shubham",
              score: "83",
              exam: "PTE Academic",
              resultImage: "/images/Gurbinder.png",
              testimonial: "Improved from 65 to 88 with expert guidance",
              highlights: [
                { skill: "Speaking", score: "83" },
                { skill: "Writing", score: "76" },
                { skill: "Reading", score: "90" },
                { skill: "Listening", score: "83" }
              ]
            },
            {
              name: "Anshpreet",
              score: "76",
              exam: "PTE Academic",
              resultImage: "/images/Ansh.png",
              testimonial: "Got my desired score in first attempt!",
              highlights: [
                { skill: "Speaking", score: "76" },
                { skill: "Writing", score: "80" },
                { skill: "Reading", score: "76" },
                { skill: "Listening", score: "70" }
              ]
            },
            {
              name: "Yashdeep",
              score: "77",
              exam: "PTE Academic",
              resultImage: "/images/Yashdeep.jpg",
              testimonial: "Scored 86 with just 4 weeks of preparation",
              highlights: [
                { skill: "Speaking", score: "88" },
                { skill: "Writing", score: "72" },
                { skill: "Reading", score: "84" },
                { skill: "Listening", score: "83" }
              ]
            }
          ].map((student, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                initial="initial"
                whileHover="glow"
                variants={glowVariants}
              />
              
              {/* Main card */}
              <div className="relative h-full bg-white rounded-xl p-6 shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden border border-gray-100 group-hover:border-red-100">
                {/* Score badge - floating animation */}
                <motion.div 
                  className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex flex-col items-center justify-center shadow-xl text-white z-10"
                  variants={scoreVariants}
                  animate="float"
                >
                  <span className="text-2xl font-bold">{student.score}</span>
                  <span className="text-xs">Overall</span>
                </motion.div>
                
                {/* Student info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                  <p className="text-gray-500 text-sm">{student.exam}</p>
                </div>
                
                {/* Result image preview */}
                <motion.div 
                  className="relative rounded-lg overflow-hidden border border-gray-200 mb-6"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={student.resultImage}
                    alt={`${student.name}'s result`}
                    className="w-full h-auto object-cover"
                     loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{student.testimonial}</p>
                  </div>
                </motion.div>
                
                {/* Skill breakdown */}
                <div className="space-y-3">
                  {student.highlights.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                      <div className="flex items-center">
                        <span className="text-sm font-bold text-red-600 mr-2">{item.score}</span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full" 
                            style={{ width: `${(parseInt(item.score)/90)*100}%` }}
                          />
                        </div>
                      </div>
                    </div>
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
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Ready to achieve your target score?</h3>
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg shadow-lg relative overflow-hidden group"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span
  className="relative z-10 flex items-center justify-center cursor-pointer"
  onClick={() => {
    window.open('https://wa.me/917355825232?text=Hello%2C%20I%20am%20interested%20in%20your%20courses.', '_blank');
  }}
>
  Start Your Preparation Now
  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
</span>

            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TopRankers;