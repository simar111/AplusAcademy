import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

const PTECourses = () => {
  const [activeCard, setActiveCard] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const whatsappLink = 'https://wa.me/1234567890';

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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

  const courses = [
    {
      title: 'Minute Mastery',
      shortDescription: 'A quick 7-day course to master PTE essentials with daily practice and expert tips.',
      fullDescription:
        'The Minute Mastery course is designed for beginners who need a fast track to understanding the PTE exam. Over 7 days, you’ll cover the essentials of all four modules—Speaking, Writing, Reading, and Listening. With daily practice sessions, expert tips, and a mock test, this course ensures you build a strong foundation to tackle the PTE with confidence. Perfect for those with limited time who want quick results.',
      duration: '7 Days',
      price: '$150',
      image: './images/MinuteMastery.png',
      features: ['Daily 40 min Live Online Class ', 'AI Based Evaluation', '2 Complete Mock Tests','5 Sessional Tests Each Module','APEuni portal login validity for 7 days'],
      level: 'Beginner',
      color: 'from-red-400 to-pink-500',
    },
    {
      title: 'Booster',
      shortDescription: 'A 15-day course focusing on advanced strategies to boost your PTE scores.',
      fullDescription:
        'The Booster course is tailored for intermediate learners aiming to elevate their PTE scores. Spanning 15 days, this program dives deep into advanced strategies for each module, helping you master complex question types and improve your time management. Daily feedback from instructors ensures you’re on the right track, and two full-length mock tests give you the confidence to excel on exam day. Ideal for those seeking a significant score improvement.',
      duration: '15 Days',
      price: '$300',
      image: './images/Booster.png',
      features: ['Daily 40 min Live Online Class', 'AI Bases Evaluation & Top Expert Reviews', '4 Complete Mock Tests','10 Sessional Tests Each Module','APEuni portal login validity for 15 days'],
      level: 'Intermediate',
      color: 'from-orange-400 to-red-500',
    },
    {
      title: 'Champion',
      shortDescription: 'A comprehensive 30-day course for in-depth PTE preparation with personalized coaching.',
      fullDescription:
        'The Champion course is the ultimate 30-day PTE preparation program for those aiming for top scores. This in-depth course covers every aspect of the PTE exam with a focus on personalized coaching to address your specific weaknesses. With five full-length mock tests, daily practice, and one-on-one feedback, you’ll be fully prepared to achieve your dream score. Perfect for advanced learners or those who want a thorough, structured approach to success.',
      duration: '30 Days',
      price: '$600',
      image: './images/Champion.png',
      features: ['Daily 40 min Live Online Class', 'AI Bases Evaluation & Top Expert Reviews', '8 Complete Mock Tests','20 Sessional Tests Each Module','APEuni portal login validity for 30 days','Free Grammer Classes'],
      level: 'Advanced',
      color: 'from-pink-400 to-red-600',
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
    hidden: { opacity: 0, y: 80, rotateX: -20 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 1, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const overlayVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: (index) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: index * 0.1, ease: [0.68, -0.55, 0.265, 1.55] },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative bg-gradient-to-b from-white to-red-100/50 text-gray-900 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-red-300/30 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-15%', left: '-10%' }}
        ></motion.div>
        <motion.div
          className="absolute w-80 h-80 bg-pink-300/30 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-10%', right: '-10%' }}
        ></motion.div>
        <motion.div
          className="absolute w-72 h-72 bg-orange-300/30 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '40%', left: '50%' }}
        ></motion.div>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.68, -0.55, 0.265, 1.55] }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-20 relative z-10"
      >
        PTE Courses
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-64 h-2 bg-gradient-to-r from-red-400 via-pink-500 to-red-600 animate-[gradient_5s_ease-in-out_infinite] shadow-[0_0_15px_rgba(255,105,135,0.5)]"></span>
      </motion.h2>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10"
      >
        {courses.map((course, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={18}
            tiltMaxAngleY={18}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#ffcccc"
            className="transform-gpu"
          >
            <motion.div
              variants={cardVariants}
              className={`relative bg-white/90 backdrop-blur-xl border-2 border-red-100 rounded-3xl overflow-hidden shadow-2xl transition-all duration-800 ease-out group ${
                activeCard === index
                  ? `scale-105 border-${course.color} shadow-[0_0_40px_rgba(255,105,135,0.5)] z-30`
                  : 'scale-100'
              }`}
            >
              {/* Glowing Border Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-40 transition-opacity duration-600 rounded-3xl shadow-[0_0_20px_rgba(255,105,135,0.3)]`}
              ></div>

              <div className="relative">
                <motion.img
                  src={course.image}
                  alt={course.title}
                  width="200"
                  height="340"
                  className="w-full h-[340px] object-cover transition-transform duration-800"
                  whileHover={{ scale: 1.2, rotate: 4 }}
                  transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              <div className="p-10 relative">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-5 py-2 bg-red-100/90 text-red-600 text-sm font-semibold rounded-full border border-red-200/60 shadow-md">
                    {course.level}
                  </span>
                </div>
                <motion.h3
                  className="text-4xl font-bold text-gray-900 mb-5"
                  whileHover={{ x: 10, color: '#ef4444', textShadow: '0 0 10px rgba(255,105,135,0.5)' }}
                  transition={{ duration: 0.4 }}
                >
                  {course.title}
                </motion.h3>
                <div className="text-gray-700 text-base mb-8">
                  <p className="line-clamp-3">{course.shortDescription}</p>
                  <motion.button
                    onClick={() => toggleOverlay(index)}
                    className="inline-flex items-center text-red-500 font-semibold mt-4 px-5 py-2 bg-red-50/70 rounded-full hover:bg-red-100 hover:text-red-600 focus:outline-none transition-all duration-400 shadow-md"
                    whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeCard === index ? 'Close Details' : 'Read More'}
                    <svg
                      className="w-5 h-5 ml-2"
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
                <div className="flex justify-between text-gray-800 mb-8 text-lg font-semibold">
                  <span>{course.duration}</span>
                  <span>{course.price}</span>
                </div>

                {/* Key Features Overlay */}
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  animate={activeCard === index ? 'visible' : 'hidden'}
                  custom={index}
                  className="absolute inset-0 bg-white/95 backdrop-blur-2xl rounded-3xl p-10 overflow-y-auto"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">Key Features</h3>
                  <ul className="text-gray-700 text-base space-y-5 mb-6">
                    {course.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                      >
                        <svg
                          className="w-6 h-6 text-red-500 mr-3"
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
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-gray-700 text-base mb-6"
                  >
                    {course.fullDescription}
                  </motion.p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-center bg-gradient-to-r ${course.color} text-white font-semibold text-base py-4 px-8 rounded-full shadow-lg transform transition-all duration-600 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,105,135,0.7)]`}
                  >
                    Enroll Now
                  </a>
                </motion.div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-center bg-gradient-to-r ${course.color} text-white font-semibold text-base py-4 px-8 rounded-full shadow-lg transform transition-all duration-600 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,105,135,0.7)] ${
                    activeCard === index ? 'opacity-0' : 'opacity-100'
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
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-white/80"></div>
    </div>
  );
};

export default PTECourses;