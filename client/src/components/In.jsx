import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const NAATIandIELTSCourses = () => {
  const [activeCard, setActiveCard] = useState(null);
  const naatiControls = useAnimation();
  const ieltsControls = useAnimation();
  const [naatiRef, naatiInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [ieltsRef, ieltsInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const whatsappLink = 'https://wa.me/1234567890';

  useEffect(() => {
    if (naatiInView) {
      naatiControls.start('visible');
    } else {
      naatiControls.start('hidden');
    }
    if (ieltsInView) {
      ieltsControls.start('visible');
    } else {
      ieltsControls.start('hidden');
    }
  }, [naatiControls, naatiInView, ieltsControls, ieltsInView]);

  useEffect(() => {
    let timer;
    if (activeCard !== null) {
      timer = setTimeout(() => {
        setActiveCard(null);
      }, 10000); // Overlay disappears after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [activeCard]);

  const toggleOverlay = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const naatiCourses = [
    {
      title: 'One-Month Complete Course',
      shortDescription: 'A comprehensive 4-week NAATI preparation course with intensive training and mock tests.',
      fullDescription:
        'The One-Month Complete Course for NAATI is designed to help you excel in the Credentialed Community Language (CCL) test within 4 weeks. This intensive program includes daily training sessions focusing on translation, dialogue interpretation, and cultural competency. With personalized feedback from expert instructors and multiple mock tests, you’ll gain the skills and confidence needed to pass the NAATI exam on your first attempt. Ideal for all levels, this course ensures you’re fully prepared for success.',
      duration: '4 Weeks',
      price: '$400',
      image: './images/NAATI.png',
      features: ['Intensive Training', 'Mock Tests', 'Personalized Feedback', 'Cultural Competency'],
      level: 'All Levels',
      color: 'from-red-400 to-pink-500',
    },
  ];

  const ieltsCourses = [
    {
      title: 'One-Month Complete Course',
      shortDescription: 'A 4-week IELTS preparation course covering all modules with daily practice and mock tests.',
      fullDescription:
        'The One-Month Complete Course for IELTS is a comprehensive 4-week program designed to help you achieve your target band score. Covering all four modules—Listening, Reading, Writing, and Speaking—this course offers daily practice sessions, expert strategies for each section, and multiple mock tests to simulate the real exam experience. With personalized feedback and band score improvement techniques, this course is perfect for learners of all levels aiming for success.',
      duration: '4 Weeks',
      price: '$350',
      image: './images/Ielts.png',
      features: ['All Modules Covered', 'Daily Practice', 'Mock Tests', 'Band Score Strategies'],
      level: 'All Levels',
      color: 'from-orange-400 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 120, rotateX: -35 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1.3, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const overlayVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const floatVariants = {
    animate: (i) => ({
      y: [0, -35 * Math.sin(i), 0],
      x: [0, 20 * Math.cos(i), 0],
      scale: [1, 1.25, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: { duration: 5 + i * 1.5, repeat: Infinity, ease: 'easeInOut' },
    }),
  };

  const progressRingVariants = {
    hidden: { strokeDashoffset: 283 },
    visible: { strokeDashoffset: 0, transition: { duration: 2.5, ease: 'easeInOut' } },
  };

  const renderCourseSection = (courses, sectionTitle, controls, sectionRef, baseIndex) => (
    <div className="relative py-40 bg-gradient-to-b from-white to-red-100/60 overflow-hidden">
      {/* Layered Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-red-300/50 to-pink-300/50 rounded-full"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatVariants}
            animate="animate"
            custom={i}
          />
        ))}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-red-200/15 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-20%', left: '5%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-200/15 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-15%', right: '0%' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] bg-orange-200/15 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '30%', left: '60%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="text-5xl sm:text-7xl font-extrabold text-center mb-24 text-gray-900"
        >
          {sectionTitle}
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-80 h-2 bg-gradient-to-r from-red-400 via-pink-500 to-red-600 animate-[gradient_4s_ease-in-out_infinite] shadow-[0_0_20px_rgba(255,105,135,0.6)]"></span>
        </motion.h2>

        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center"
        >
          {courses.map((course, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              glareEnable={true}
              glareMaxOpacity={0.7}
              glareColor="#ffcccc"
              className="transform-gpu w-full max-w-4xl"
            >
              <motion.div
                variants={cardVariants}
                className={`relative bg-white/95 backdrop-blur-2xl border-2 border-red-100 rounded-3xl overflow-hidden shadow-2xl transition-all duration-800 ease-out group ${
                  activeCard === baseIndex + index
                    ? `scale-105 border-${course.color} shadow-[0_0_60px_rgba(255,105,135,0.7)] z-30`
                    : 'scale-100'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative">
                    <motion.img
                      src={course.image}
                      alt={course.title}
                      width="570"
                      height="400"
                      className="w-[550px] h-[570px] object-cover"
                      whileHover={{ scale: 1.2, rotate: 2 }}
                      transition={{ duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                  </div>
                  <div className="p-12 flex flex-col justify-between">
                    <div>
                      <div className="absolute top-6 right-6">
                        <span className="inline-block px-6 py-2 bg-red-100/90 text-red-600 text-base font-semibold rounded-full border border-red-200/70 shadow-md">
                          {course.level}
                        </span>
                      </div>
                      <motion.h3
                        className="text-5xl font-extrabold text-gray-900 mb-6"
                        whileHover={{ x: 15, color: '#ef4444', textShadow: '0 0 15px rgba(255,105,135,0.7)' }}
                        transition={{ duration: 0.4 }}
                      >
                        {course.title}
                      </motion.h3>
                      <div className="text-gray-700 text-lg mb-8">
                        <p className="line-clamp-4">{course.shortDescription}</p>
                        <motion.button
                          onClick={() => toggleOverlay(baseIndex + index)}
                          className="inline-flex items-center text-red-500 font-semibold mt-6 px-8 py-3 bg-red-50/80 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none transition-all duration-400 shadow-lg"
                          whileHover={{ scale: 1.15, boxShadow: '0 0 25px rgba(239, 68, 68, 0.6)' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {activeCard === baseIndex + index ? 'Close Details' : 'Read More'}
                          <svg
                            className="w-6 h-6 ml-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d={activeCard === baseIndex + index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                            />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-gray-800 mb-8 text-xl font-semibold">
                        <span>{course.duration}</span>
                        <span>{course.price}</span>
                      </div>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-block text-center bg-gradient-to-r ${course.color} text-white font-semibold text-lg py-4 px-12 rounded-full shadow-lg transform transition-all duration-600 hover:scale-110 hover:shadow-[0_0_35px_rgba(255,105,135,0.8)] ${
                          activeCard === baseIndex + index ? 'opacity-0' : 'opacity-100'
                        }`}
                      >
                        Enroll Now
                      </a>
                    </div>
                  </div>
                </div>

                {/* Key Features Overlay */}
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate={activeCard === baseIndex + index ? 'visible' : 'hidden'}
                  className="absolute inset-0 bg-white/95 backdrop-blur-3xl rounded-3xl p-12 overflow-y-auto"
                >
                  <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Features</h3>
                  <ul className="text-gray-700 text-lg space-y-6 mb-8">
                    {course.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.25, duration: 0.7 }}
                      >
                        <svg
                          className="w-8 h-8 text-red-500 mr-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.7 }}
                    className="text-gray-700 text-lg mb-8"
                  >
                    {course.fullDescription}
                  </motion.p>
                  <div className="flex items-center gap-8 mb-10">
                    <svg className="w-20 h-20">
                      <circle cx="40" cy="40" r="32" stroke="#fee2e2" strokeWidth="10" fill="none" />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="32"
                        stroke="#ef4444"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="283"
                        variants={progressRingVariants}
                        initial="hidden"
                        animate={activeCard === baseIndex + index ? 'visible' : 'hidden'}
                      />
                    </svg>
                    <span className="text-3xl font-bold text-red-600">95% Success Rate</span>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-center bg-gradient-to-r ${course.color} text-white font-semibold text-lg py-4 px-12 rounded-full shadow-lg transform transition-all duration-600 hover:scale-110 hover:shadow-[0_0_35px_rgba(255,105,135,0.8)]`}
                  >
                    Enroll Now
                  </a>
                </motion.div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white/90"></div>
    </div>
  );

  return (
    <>
      {renderCourseSection(naatiCourses, 'NAATI Course', naatiControls, naatiRef, 0)}
      {renderCourseSection(ieltsCourses, 'IELTS Course', ieltsControls, ieltsRef, 1)}
    </>
  );
};

export default NAATIandIELTSCourses;