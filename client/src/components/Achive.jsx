import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PTEAchievements = () => {
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
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
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
        duration: 0.8,
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

  const achievements = [
    {
      name: "Priyanshi",
      score: "90",
      resultImage: "/images/Priyanshi.png",
      highlights: ["Speaking: 90", "Writing: 90", "Reading: 90", "Listening: 82"]
    },
    {
      name: "Muhammad Umair Sikander",
      score: "74",
      resultImage: "/images/Umair.jpg",
      highlights: ["Speaking: 70", "Writing: 76", "Reading: 90", "Listening: 67"]
    },
    {
      name: "Anshpreet",
      score: "76",
      resultImage: "/images/Ansh.png",
      highlights: ["Speaking: 76", "Writing: 80", "Reading: 76", "Listening: 70"]
    },
    {
      name: "Gurbinder Singh Shubham",
      score: "83",
      resultImage: "/images/Gurbinder.png",
      highlights: ["Speaking: 83", "Writing: 76", "Reading: 90", "Listening: 83"]
    },
    {
      name: "Yashdeep",
      score: "77",
      resultImage: "/images/Yashdeep.jpg",
      highlights: ["Speaking: 88", "Writing: 72", "Reading: 84", "Listening: 83"]
    },
    {
      name: "Gursharan Singh",
      score: "67",
      resultImage: "/images/Gursharan.jpg",
      highlights: ["Speaking: 64", "Writing: 79", "Reading: 67", "Listening: 66"]
    },
    {
      name: "Himanshu Malhotra",
      score: "65",
      resultImage: "/images/Himanshu.jpg",
      highlights: ["Speaking: 64", "Writing: 65", "Reading: 68", "Listening: 66"]
    },
    {
      name: "Sajid Shahadat",
      score: "59",
      resultImage: "/images/sajid.jpg",
      highlights: ["Speaking: 52", "Writing: 64", "Reading: 64", "Listening: 56"]
    },
    {
      name: "Munneb Tahir",
      score: "68",
      resultImage: "/images/Munneb.jpg",
      highlights: ["Speaking: 79", "Writing: 83", "Reading: 80", "Listening: 82"]
    },
    {
      name: "Palak",
      score: "56",
      resultImage: "/images/Palak.jpg",
      highlights: ["Speaking: 57", "Writing: 52", "Reading: 67", "Listening: 54"]
    },
     {
      name:"Ayan Arora",
      score: "69",
      resultImage: "/images/Ayan.jpg",
      highlights: ["Speaking: 82", "Writing: 58", "Reading: 87", "Listening: 65"]
    },
    {
      name: "Dinesh Kumar",
      score: "62",
      resultImage: "/images/dinesh.jpg",
      highlights: ["Speaking: 64", "Writing: 65", "Reading: 69", "Listening: 59"]
    }
  ];

  return (
    <div 
      className="relative bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden"
      ref={ref}
    >
      {/* Floating background elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-red-100 to-red-200 rounded-full opacity-20"
          style={{
            width: `${Math.random() * 24 + 12}px`,
            height: `${Math.random() * 24 + 12}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() * 120) - 60],
            x: [0, (Math.random() * 80) - 40],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid background */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,white)] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        {/* Header section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            PTE Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Achievements</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Celebrating our students' exceptional results
          </motion.p>
        </motion.div>

        {/* Achievements grid - 3 columns on desktop */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="relative group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* Card glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-red-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
              />
              
              {/* Main card */}
              <div className="relative h-full bg-white rounded-xl p-6 shadow-md transition-all duration-300 group-hover:shadow-lg overflow-hidden border border-gray-100 group-hover:border-red-100">
                {/* Score badge - floating animation */}
                <motion.div 
                  className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex flex-col items-center justify-center shadow-xl text-white z-10"
                  variants={scoreVariants}
                  animate="float"
                >
                  <span className="text-2xl font-bold">{achievement.score}</span>
                  <span className="text-xs">Overall</span>
                </motion.div>
                
                {/* Student name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.name}</h3>
                
                {/* Result image preview */}
                <motion.div 
                  className="relative rounded-lg overflow-hidden border border-gray-200 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={achievement.resultImage}
                    alt={`${achievement.name}'s result`}
                    className="w-full h-auto object-cover"
                     loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white text-sm">
                      {achievement.highlights.map((highlight, i) => (
                        <p key={i}>{highlight}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Highlights */}
                <div className="space-y-2">
                  {achievement.highlights.slice(0, 2).map((highlight, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                  <p className="text-xs text-gray-500 mt-1">
                    +{achievement.highlights.length - 2} more skills
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats summary */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 shadow-inner border border-red-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">90</div>
              <div className="text-gray-600">Highest Score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">83.5</div>
              <div className="text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">12</div>
              <div className="text-gray-600">Students Featured</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PTEAchievements;