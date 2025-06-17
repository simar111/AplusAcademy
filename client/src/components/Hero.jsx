import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Zap, BarChart2, Award, CheckCircle, Star } from 'react-feather';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Enhanced Parallax Effects
  const backgroundX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);
  const orbX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const orbY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);
  const Whatsapplink='https://wa.me/+917355825232?text=Hello%20there!';

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
        mass: 0.8,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Dynamic Gradient Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(220, 38, 38, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom right, #f9fafb, #f3f4f6)
          `,
          x: backgroundX,
          y: backgroundY,
        }}
      />

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.12,
        }}
      />

      {/* Animated Wave Effect at the Top */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden z-0">
        <svg className="w-full h-full text-red-600/15" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path
            className="animate-wave"
            fill="currentColor"
            d="M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Enhanced Particle Network with Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/20 rounded-full"
            initial={{
              width: `${Math.random() * 10 + 4}px`,
              height: `${Math.random() * 10 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.4, 0.9, 0.4],
              boxShadow: [
                `0 0 5px rgba(220, 38, 38, 0.5)`,
                `0 0 15px rgba(220, 38, 38, 0.8)`,
                `0 0 5px rgba(220, 38, 38, 0.5)`,
              ],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs with Parallax */}
      <motion.div
        className="absolute top-1/5 left-1/5 w-96 h-96 rounded-full bg-gradient-to-r from-red-500/10 to-red-500/5 blur-3xl -z-10"
        style={{ x: orbX, y: orbY }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/5 w-112 h-112 rounded-full bg-gradient-to-r from-red-500/8 to-red-500/3 blur-3xl -z-10"
        style={{ x: orbX, y: orbY }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center py-28">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="w-full flex flex-col lg:flex-row items-center justify-between gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Text Content */}
              <motion.div
                className="lg:w-[55%] text-center lg:text-left space-y-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-[4rem] font-extrabold text-gray-900 leading-tight relative"
                  variants={childVariants}
                >
                  <motion.span
                    className="inline-block relative"
                    whileHover={{ scale: 1.03, color: "#dc2626" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Your Dream Score Starts Here –
                    <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full animate-[underline_3s_infinite]"></span>
                  </motion.span>
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent relative"
                    initial={{ backgroundPosition: '0% 50%' }}
                    animate={{
                      backgroundPosition: '200% 50%',
                      transition: {
                        duration: 6,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: "linear",
                      },
                    }}
                    whileHover={{
                      backgroundPosition: '0% 50%',
                      scale: 1.03,
                      transition: { duration: 0.5 },
                    }}
                  >
                    A Plus Academy
                    <motion.span
                      className="absolute -top-4 -right-4"
                      animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Star className="w-6 h-6 text-red-600" />
                    </motion.span>
                  </motion.span>
                  <br />
                  <motion.span
                    className="inline-block"
                    whileHover={{ scale: 1.03, color: "#dc2626" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    for PTE & IELTS
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl lg:text-2xl text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed"
                  variants={childVariants}
                  whileHover={{
                    x: 8,
                    color: "#374151",
                    transition: { type: 'spring', stiffness: 300 },
                  }}
                >
                  Achieve Your Goals with Expert Guidance and Free Demo Classes
                </motion.p>

                {/* Stats Grid with Glassmorphism */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10"
                  variants={containerVariants}
                >
                  {[
                    { icon: <CheckCircle className="w-6 h-6" />, value: "98%", label: "Success Rate" },
                    { icon: <Star className="w-6 h-6" />, value: "500+", label: "Students" },
                    { icon: <Zap className="w-6 h-6" />, value: "15 Days", label: "Avg. Improvement" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/30 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/40 group"
                      variants={childVariants}
                      whileHover={{
                        y: -8,
                        scale: 1.05,
                        boxShadow: "0 15px 30px -5px rgba(220, 38, 38, 0.2)",
                        transition: { type: "spring", stiffness: 300 },
                      }}
                    >
                      <div className="flex items-center">
                        <div className="p-3 bg-red-100 rounded-xl mr-4 text-red-600 group-hover:bg-red-200 transition-colors duration-300">
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Buttons with Enhanced Effects */}
                <motion.div
                  className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5 mt-10"
                  variants={containerVariants}
                >
                  <motion.a
                   target="_blank"
                    rel="noopener noreferrer"
                    href={Whatsapplink}
                    className="relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-2xl transition-all overflow-hidden group"
                    variants={childVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 15px 40px -5px rgba(220, 38, 38, 0.5)",
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Enroll Now <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                    />
                    <motion.div
                      className="absolute inset-0 border-2 border-red-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-border"
                    />
                    {/* Animated Sparkles */}
                    <div className="absolute inset-0 overflow-hidden">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="absolute bg-white rounded-full"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: [0, 2],
                            opacity: [0, 0.9, 0],
                            x: [0, Math.random() * 120 - 60],
                            y: [0, Math.random() * 120 - 60],
                          }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            delay: i * 0.4,
                          }}
                          style={{
                            width: `${Math.random() * 5 + 3}px`,
                            height: `${Math.random() * 5 + 3}px`,
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      ))}
                    </div>
                  </motion.a>
                  <motion.a
                    href="/courses"
                    className="relative inline-flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-800 font-semibold text-lg px-10 py-4 rounded-full shadow-lg border border-white/40 transition-all overflow-hidden group"
                    variants={childVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)",
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Explore Courses</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Enhanced Image Card with Glassmorphism */}
              <motion.div
                className="lg:w-[45%] w-full max-w-xl lg:max-w-none relative"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 1, type: "spring", stiffness: 100 }}
              >
                <div className="relative bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden group h-full min-h-[550px]">
                  {/* Main Image with Parallax Effect */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src="/images/student-man.jpg"
                      alt="A Plus Academy students"
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/20 to-transparent" />

                  {/* Content Overlay with Glassmorphism */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <motion.div
                      className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30"
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.9, type: "spring", stiffness: 150 }}
                    >
                      <div className="flex items-center mb-5">
                        <motion.div
                          className="bg-gradient-to-r from-red-600 to-red-500 p-4 rounded-xl mr-4 shadow-lg"
                          whileHover={{ rotate: 20, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Award className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">High Achievers</h3>
                      </div>
                      <motion.p
                        className="text-gray-600 mb-6 text-lg lg:text-xl leading-relaxed"
                        whileHover={{ x: 5, color: "#dc2626" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Join our community of successful students
                      </motion.p>

                      <div className="flex flex-wrap gap-4">
                        {[
                          { icon: <BarChart2 className="w-5 h-5" />, text: "Score Improvement" },
                          { icon: <BookOpen className="w-5 h-5" />, text: "Daily Practice" },
                        ].map((item, i) => (
                          <motion.span
                            key={i}
                            className="inline-flex items-center bg-red-600/15 text-red-600 text-sm font-medium px-5 py-2 rounded-full border border-red-600/30"
                            whileHover={{ scale: 1.1, y: -3, backgroundColor: "rgba(220, 38, 38, 0.2)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            {item.icon} <span className="ml-2">{item.text}</span>
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Elements with Enhanced Animations */}
                  <motion.div
                    className="absolute top-8 left-8 w-16 h-16 bg-white/90 backdrop-blur-lg rounded-xl flex items-center justify-center shadow-xl border border-white/40"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <CheckCircle className="w-7 h-7 text-red-600 animate-pulse-slow" />
                  </motion.div>

                  {/* Animated Badge with Glow */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-28 h-28 bg-gradient-to-br from-red-600 to-red-500 rounded-3xl flex flex-col items-center justify-center shadow-2xl text-white border border-white/40"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      y: [0, -8, 0],
                      boxShadow: [
                        "0 0 10px rgba(220, 38, 38, 0.5)",
                        "0 0 20px rgba(220, 38, 38, 0.8)",
                        "0 0 10px rgba(220, 38, 38, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="text-3xl font-bold">90+</div>
                    <div className="text-sm font-medium">Avg. Score</div>
                  </motion.div>

                  {/* Glowing Border on Hover */}
                  <motion.div
                    className="absolute inset-0 border-4 border-red-600/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-border"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cursor Follower with Enhanced Effect */}
      <motion.div
        className="fixed pointer-events-none w-96 h-96 rounded-full bg-gradient-to-r from-red-500/10 to-transparent blur-2xl -z-10"
        style={{
          x: mouseX,
          y: mouseY,
          left: -48,
          top: -48,
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes wave {
            0% { d: path('M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z'); }
            50% { d: path('M0,40 C360,60 720,80 1080,40 C1260,20 1440,60 1440,60 L1440,100 L0,100 Z'); }
            100% { d: path('M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z'); }
          }
          @keyframes glow-border {
            0% { border-color: rgba(220, 38, 38, 0.4); box-shadow: 0 0 5px rgba(220, 38, 38, 0.4); }
            50% { border-color: rgba(220, 38, 38, 0.7); box-shadow: 0 0 20px rgba(220, 38, 38, 0.7); }
            100% { border-color: rgba(220, 38, 38, 0.4); box-shadow: 0 0 5px rgba(220, 38, 38, 0.4); }
          }
          @keyframes pulse-slow {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes underline {
            0% { width: 0; }
            50% { width: 100%; }
            100% { width: 0; }
          }
          .animate-wave {
            animation: wave 8s infinite ease-in-out;
          }
          .animate-glow-border {
            animation: glow-border 4s infinite ease-in-out;
          }
          .animate-pulse-slow {
            animation: pulse-slow 2s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;