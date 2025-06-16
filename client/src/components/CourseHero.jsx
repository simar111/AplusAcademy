import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

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
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const floatVariants = {
    animate: (i) => ({
      y: [0, -20, 0],
      x: [0, 10 * Math.cos(i), 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3],
      transition: { duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' },
    }),
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-white to-red-100/50">
      {/* Animated Background with Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-red-300/40 to-pink-300/40 rounded-lg rotate-45"
            style={{
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatVariants}
            animate="animate"
            custom={i}
          />
        ))}
        <motion.div
          className="absolute w-96 h-96 bg-red-200/20 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-pink-200/20 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-10%', right: '-10%' }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 py-20"
      >
        <motion.div
          variants={textVariants}
          className="mb-8 inline-flex"
        >
          <div className="relative px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-400 group">
            <span className="relative z-10">Trusted by 10,000+ Students</span>
            <span className="absolute -inset-1 rounded-full bg-red-400/40 blur-lg animate-pulse group-hover:blur-xl transition-all duration-400"></span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8"
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 animate-[gradient_4s_ease-in-out_infinite]">
            Achieve Your
          </span>
          <span className="block mt-4">
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600">Dream Scores</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-red-100/50 shadow-[0_0_10px_rgba(255,105,135,0.4)] animate-pulse"></span>
            </span>
          </span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Expert-led PTE, NAATI, and IELTS courses crafted with cutting-edge methodologies to accelerate your success.
        </motion.p>

        <motion.div
          variants={buttonVariants}
          className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
        >
          <a
            href="#pte-courses"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(255,105,135,0.6)] transition-all duration-400 transform hover:-translate-y-1 active:translate-y-0 group"
          >
            Explore Courses
            <motion.span
              className="ml-3 inline-block"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </a>
          <button
            className="px-8 py-4 bg-white border-2 border-red-200 hover:border-red-400 text-red-600 hover:text-red-700 font-semibold text-lg rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(255,105,135,0.4)] transition-all duration-400 transform hover:-translate-y-1 active:translate-y-0"
          >
            Free Assessment
          </button>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="flex flex-wrap justify-center gap-8 mt-12"
        >
          {["4.9/5 Stars", "98% Success Rate", "Certified Expert Tutors"].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05, color: '#ef4444' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-gray-600 text-base font-semibold">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={textVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center">
            <div className="w-8 h-12 border-2 border-red-300 rounded-full flex justify-center p-1.5">
              <motion.div
                className="w-1.5 h-3 bg-red-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;