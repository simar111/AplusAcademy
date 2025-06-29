import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion, useAnimation, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Regular import for Tilt (not using dynamic import in this version)
import Tilt from 'react-parallax-tilt';

const PTECourses = () => {
  const [activeCard, setActiveCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const whatsappLink = 'https://wa.me/917355825232?text=Hello%2C%20I%20am%20interested%20in%20your%20services.';

  // Memoized courses data to prevent unnecessary re-renders
  const courses = React.useMemo(() => [
    {
      title: 'Minute Mastery',
      shortDescription: 'A quick 7-day course to master PTE essentials with daily practice and expert tips.',
      fullDescription: 'The Minute Mastery course is designed for beginners who need a fast track to understanding the PTE exam. Over 7 days, you\'ll cover the essentials of all four modules—Speaking, Writing, Reading, and Listening. With daily practice sessions, expert tips, and a mock test, this course ensures you build a strong foundation to tackle the PTE with confidence. Perfect for those with limited time who want quick results.',
      duration: '7 Days',
      price: '$150',
      image: './images/MinuteMastery.png',
      features: [
        'Daily 40 min Live Online Class',
        'AI Based Evaluation',
        '2 Complete Mock Tests',
        '5 Sessional Tests Each Module',
        'APEuni portal login validity for 7 days'
      ],
      level: 'Beginner',
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'Booster',
      shortDescription: 'A 15-day course focusing on advanced strategies to boost your PTE scores.',
      fullDescription: 'The Booster course is tailored for intermediate learners aiming to elevate their PTE scores. Spanning 15 days, this program dives deep into advanced strategies for each module, helping you master complex question types and improve your time management. Daily feedback from instructors ensures you\'re on the right track, and two full-length mock tests give you the confidence to excel on exam day. Ideal for those seeking a significant score improvement.',
      duration: '15 Days',
      price: '$300',
      image: './images/Booster.png',
      features: [
        'Daily 40 min Live Online Class',
        'AI Bases Evaluation & Top Expert Reviews',
        '4 Complete Mock Tests',
        '10 Sessional Tests Each Module',
        'APEuni portal login validity for 15 days'
      ],
      level: 'Intermediate',
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'Champion',
      shortDescription: 'A comprehensive 30-day course for in-depth PTE preparation with personalized coaching.',
      fullDescription: 'The Champion course is the ultimate 30-day PTE preparation program for those aiming for top scores. This in-depth course covers every aspect of the PTE exam with a focus on personalized coaching to address your specific weaknesses. With five full-length mock tests, daily practice, and one-on-one feedback, you\'ll be fully prepared to achieve your dream score. Perfect for advanced learners or those who want a thorough, structured approach to success.',
      duration: '30 Days',
      price: '$600',
      image: './images/Champion.png',
      features: [
        'Daily 40 min Live Online Class',
        'AI Bases Evaluation & Top Expert Reviews',
        '8 Complete Mock Tests',
        '20 Sessional Tests Each Module',
        'APEuni portal login validity for 30 days',
        'Free Grammer Classes'
      ],
      level: 'Advanced',
      color: 'from-pink-400 to-red-600',
    },
  ], []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1] 
      } 
    },
  };

  const overlayVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        delay: index * 0.05, 
        ease: [0.34, 1.56, 0.64, 1] 
      },
    }),
  };

  // Memoized toggle function
  const toggleOverlay = useCallback((index) => {
    setActiveCard(prev => prev === index ? null : index);
  }, []);

  // Animation trigger
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Auto-close overlay effect
  useEffect(() => {
    if (activeCard === null) return;
    
    const timer = setTimeout(() => {
      setActiveCard(null);
    }, 10000);

    return () => clearTimeout(timer);
  }, [activeCard]);

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = [
      './images/MinuteMastery.png',
      './images/Booster.png',
      './images/Champion.png'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative bg-gradient-to-b from-white to-red-100/50 text-gray-900 overflow-hidden">
        {/* Optimized background particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full filter blur-3xl ${
                i === 0 ? 'w-96 h-96 bg-red-300/30 top-[-15%] left-[-10%]' :
                i === 1 ? 'w-80 h-80 bg-pink-300/30 bottom-[-10%] right-[-10%]' :
                'w-72 h-72 bg-orange-300/30 top-[40%] left-[50%]'
              }`}
              animate={{
                scale: [1, i === 0 ? 1.3 : i === 1 ? 1.2 : 1.25, 1],
                opacity: [0.4, i === 0 ? 0.6 : 0.7, 0.4]
              }}
              transition={{
                duration: i === 0 ? 7 : i === 1 ? 9 : 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-16 md:mb-20 relative z-10"
        >
          PTE Courses
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 sm:w-64 h-1.5 sm:h-2 bg-gradient-to-r from-red-400 via-pink-500 to-red-600 animate-[gradient_5s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,105,135,0.5)]" />
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 relative z-10"
        >
          {courses.map((course, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ffcccc"
              glarePosition="all"
              glareBorderRadius="1.5rem"
              className="h-full transform-gpu"
              tiltReverse={true}
            >
              <motion.div
                variants={cardVariants}
                className={`relative h-full bg-white/90 backdrop-blur-xl border-2 border-red-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ease-out group ${
                  activeCard === index
                    ? `scale-[1.02] border-${course.color} shadow-[0_0_30px_rgba(255,105,135,0.4)] z-30`
                    : 'scale-100'
                }`}
              >
                {/* Glowing Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl`}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={340}
                    className="w-full h-[280px] sm:h-[340px] object-cover"
                    loading="lazy"
                    decoding="async"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-8 md:p-10 relative">
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 bg-red-100/90 text-red-600 text-xs sm:text-sm font-semibold rounded-full border border-red-200/60 shadow-sm">
                      {course.level}
                    </span>
                  </div>
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5"
                    whileHover={{ 
                      x: 5, 
                      color: '#ef4444',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {course.title}
                  </motion.h3>
                  <div className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8">
                    <p className="line-clamp-3">{course.shortDescription}</p>
                    <motion.button
                      onClick={() => toggleOverlay(index)}
                      className="inline-flex items-center text-red-500 font-semibold mt-3 px-4 py-1.5 sm:px-5 sm:py-2 bg-red-50/70 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none transition-all duration-200 shadow-sm sm:shadow-md"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeCard === index ? 'Close Details' : 'Read More'}
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d={activeCard === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                        />
                      </svg>
                    </motion.button>
                  </div>
                  <div className="flex justify-between text-gray-800 mb-6 sm:mb-8 text-sm sm:text-lg font-semibold">
                    <span>{course.duration}</span>
                    <span>{course.price}</span>
                  </div>

                  {/* Key Features Overlay - Only render when active for performance */}
                  {activeCard === index && (
                    <motion.div
                      variants={overlayVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm sm:backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 overflow-y-auto"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="text-gray-700 text-sm sm:text-base space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {course.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <svg
                              className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6"
                      >
                        {course.fullDescription}
                      </motion.p>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block w-full text-center bg-gradient-to-r ${course.color} text-white font-semibold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                      >
                        Enroll Now
                      </a>
                    </motion.div>
                  )}

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full text-center bg-gradient-to-r ${course.color} text-white font-semibold text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
                      activeCard === index ? 'hidden' : 'block'
                    }`}
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Gradient Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white/80 z-0" />
      </div>
    </LazyMotion>
  );
};

export default React.memo(PTECourses);