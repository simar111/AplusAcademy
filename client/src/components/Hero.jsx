import React, { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Zap, BarChart2, Award, CheckCircle, Star } from 'react-feather';
import './Hero.css';

const Hero = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const Whatsapplink = 'https://wa.me/+917355825232?text=Hello%20there!';

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 150,
        mass: 0.7,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Dynamic Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom right, #f9fafb, #f3f4f6)
          `,
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.12,
        }}
      />

      {/* Animated Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-0">
        <svg className="w-full h-full text-red-600/15" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path
            className="animate-wave"
            fill="currentColor"
            d="M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Optimized Particle Network */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/20 rounded-full will-change-transform"
            initial={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-80 h-80 rounded-full bg-gradient-to-r from-red-500/10 to-red-500/5 blur-3xl -z-10 will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-gradient-to-r from-red-500/8 to-red-500/3 blur-3xl -z-10 will-change-transform"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center py-16 md:py-28">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
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
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem] font-extrabold text-gray-900 leading-tight relative"
                  variants={childVariants}
                >
                  <span className="inline-block relative group hover:text-red-600 transition-colors duration-300">
                    Your Dream Score Starts Here –
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full group-hover:w-full transition-all duration-500"></span>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent relative">
                    A Plus Academy
                    <motion.span
                      className="absolute -top-4 -right-4"
                      animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Star className="w-5 h-5 text-red-600" />
                    </motion.span>
                  </span>
                  <br />
                  <span className="inline-block group hover:text-red-600 transition-colors duration-300">
                    for PTE & IELTS
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed group hover:text-gray-800 transition-colors duration-300"
                  variants={childVariants}
                >
                  Achieve Your Goals with Expert Guidance and Free Demo Classes
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-8"
                  variants={containerVariants}
                >
                  {[
                    { icon: <CheckCircle className="w-5 h-5" />, value: '98%', label: 'Success Rate' },
                    { icon: <Star className="w-5 h-5" />, value: '500+', label: 'Students' },
                    { icon: <Zap className="w-5 h-5" />, value: '15 Days', label: 'Avg. Improvement' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/30 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-white/40 group hover:bg-white/40 hover:shadow-xl transition-all duration-300 will-change-transform"
                      variants={childVariants}
                    >
                      <div className="flex items-center">
                        <div className="p-2 sm:p-3 bg-red-100 rounded-xl mr-3 sm:mr-4 text-red-600 group-hover:bg-red-200 transition-colors duration-300">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-8"
                  variants={containerVariants}
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={Whatsapplink}
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-2xl group hover:shadow-[0_15px_40px_-5px_rgba(220,38,38,0.5)] transition-all duration-300 will-change-transform"
                    aria-label="Enroll Now"
                  >
                    <span className="relative z-10 flex items-center">
                      Enroll Now <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
                  </a>
                  <a
                    href="/courses"
                    className="relative inline-flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-800 font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg border border-white/40 group hover:bg-white/95 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] transition-all duration-300 will-change-transform"
                    aria-label="Explore Courses"
                  >
                    <span className="relative z-10">Explore Courses</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Image Card */}
              <motion.div
                className="lg:w-[45%] w-full max-w-lg lg:max-w-none relative"
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: 'spring', stiffness: 120 }}
              >
                <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden group h-full min-h-[450px] sm:min-h-[550px]">
                  {/* Main Image */}
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 will-change-transform">
                    <img
                      src="/images/student-man.jpg"
                      alt="A Plus Academy students"
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <motion.div
                      className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.7, type: 'spring', stiffness: 150 }}
                    >
                      <div className="flex items-center mb-4 sm:mb-5">
                        <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                          <Award className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">High Achievers</h3>
                      </div>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed group-hover:text-red-600 transition-colors duration-300">
                        Join our community of successful students
                      </p>

                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {[
                          { icon: <BarChart2 className="w-4 h-4 sm:w-5 sm:h-5" />, text: 'Score Improvement' },
                          { icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />, text: 'Daily Practice' },
                        ].map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center bg-red-600/15 text-red-600 text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 rounded-full border border-red-600/30 group-hover:bg-red-600/20 group-hover:-translate-y-1 transition-all duration-300"
                          >
                            {item.icon} <span className="ml-2">{item.text}</span>
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 bg-white/90 backdrop-blur-lg rounded-xl flex items-center justify-center shadow-xl border border-white/40"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 animate-pulse-slow" />
                  </motion.div>

                  {/* Animated Badge */}
                  <motion.div
                    className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-red-600 to-red-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl text-white border border-white/40"
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold">90+</div>
                    <div className="text-xs sm:text-sm font-medium">Avg. Score</div>
                  </motion.div>

                  {/* Glowing Border */}
                  <div className="absolute inset-0 border-4 border-red-600/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-border" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

export default Hero;