import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Users, Clock, BarChart2, CheckCircle, Globe, Star, Zap } from 'react-feather';

const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Floating particles configuration
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 15,
    color: `rgba(220, 38, 38, ${Math.random() * 0.15 + 0.05})`
  }));

  // Animation variants
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

  const itemVariants = {
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
    <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.size / 2}px rgba(220, 38, 38, ${Math.random() * 0.1})`
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8 isolate top-10">
  {/* Advanced background effects */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Animated gradient mesh */}
    <div className="absolute inset-0 opacity-20">
      <svg viewBox="0 0 1000 1000" className="w-full h-full">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dc2626" offset="0%" />
            <stop stopColor="#fecaca" offset="100%" />
          </radialGradient>
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="15" fill="url(#gradient)" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" opacity="0.3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="120s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>

    {/* Floating 3D elements */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`shape-${i}`}
        className="absolute rounded-lg bg-red-500/5 backdrop-blur-sm border border-red-500/10"
        initial={{
          opacity: 0,
          rotate: Math.random() * 360,
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50
        }}
        animate={{
          opacity: [0, 0.3, 0],
          rotate: [0, 180, 360],
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100]
        }}
        transition={{
          duration: Math.random() * 20 + 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          width: `${Math.random() * 200 + 100}px`,
          height: `${Math.random() * 200 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          borderRadius: `${Math.random() * 50}%`
        }}
      />
    ))}

    {/* Micro-interaction particles */}
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={`particle-${i}`}
        className="absolute rounded-full bg-red-500/20"
        initial={{
          opacity: 0,
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50
        }}
        animate={{
          opacity: [0, 0.8, 0],
          x: [0, Math.random() * 300 - 150],
          y: [0, Math.random() * 300 - 150]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        style={{
          width: `${Math.random() * 8 + 2}px`,
          height: `${Math.random() * 8 + 2}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    ))}
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
          }
        }
      }}
    >
      {/* Text content with enhanced visibility */}
      <motion.div 
        className="text-center lg:text-left space-y-8 relative"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            } 
          }
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -left-20 -top-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.h1 
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }
          }}
        >
          <span className="relative inline-block">
            <span className="relative z-10">About</span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-red-600/40 to-red-500/40 z-0 rounded-full"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
          </span>{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 relative z-10">
              A+ PTE Academy
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-red-600/30 to-red-500/30 z-0 rounded-full"
              initial={{ scaleX: 0, transformOrigin: "left center" }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Floating A+ badge */}
            <motion.span
              className="absolute -top-6 -right-8 bg-gradient-to-br from-red-600 to-red-500 text-white font-bold text-sm rounded-full px-3 py-1 shadow-lg z-20"
              initial={{ opacity: 0, y: 20, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              whileHover={{ 
                y: -5,
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              A+
            </motion.span>
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed relative"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.4,
                duration: 1, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }
          }}
        >
          <span className="relative z-10">
            Your trusted partner in achieving{' '}
            <span className="font-semibold text-red-600 relative">
              <span className="relative z-10">exceptional PTE scores</span>
              <motion.span 
                className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-red-600/30 to-red-500/30 z-0 rounded-full"
                initial={{ scaleX: 0, transformOrigin: "left center" }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>{' '}
            through expert guidance and proven methodologies.
          </span>
        </motion.p>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { 
                delay: 0.6,
                duration: 0.8, 
                ease: [0.16, 1, 0.3, 1] 
              } 
            }
          }}
          className="relative flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="/contact"
            className="inline-flex bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 group relative overflow-hidden"
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ x: -100 }}
              whileHover={{ x: 100 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-2 h-10">
              Start Your Journey <Zap className="w-5 h-5 animate-pulse" />
            </span>
          </a>
          
          <motion.div
            className="flex items-center gap-2 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.img
                  key={i}
                  src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i+20}.jpg`}
                  alt="Happy student"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  initial={{ x: -20 * i, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
                  whileHover={{ y: -5 }}
                />
              ))}
            </div>
            <span className="text-sm">Join 1000+ successful students</span>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Premium image card */}
      <motion.div 
        className="relative"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1, 
            transition: { 
              delay: 0.5,
              duration: 1, 
              ease: [0.16, 1, 0.3, 1] 
            } 
          }
        }}
      >
        <motion.div 
          className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.3)] overflow-hidden border border-white/20 group transform-style-preserve-3d perspective-1000"
          whileHover={{ 
            y: -15,
            transition: { duration: 0.4 }
          }}
        >
          {/* 3D depth effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ transform: 'translateZ(20px)' }}
          />
          
          {/* Floating inner shadow */}
          <motion.div 
            className="absolute inset-0 border-8 border-transparent group-hover:border-red-600/20 rounded-3xl transition-all duration-700"
            whileHover={{
              scale: 0.98,
              transition: { duration: 0.7 }
            }}
          />
          
          {/* Parallax image */}
          <motion.img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="A+ PTE Academy students"
            className="w-full h-[28rem] object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.8 }
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
          
          {/* Success rate badge */}
          <motion.div 
            className="absolute bottom-0 left-0 p-8 text-white z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <motion.div 
                className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(220, 38, 38, 0.7)",
                    "0 0 0 15px rgba(220, 38, 38, 0)",
                    "0 0 0 0 rgba(220, 38, 38, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <Award className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold drop-shadow-lg">98% Success Rate</h3>
                <p className="text-red-200 text-sm">Highest in the region</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Floating 3D badges */}
        <motion.div 
          className="absolute -top-8 -right-8 bg-white shadow-2xl rounded-full p-3 z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -15, y: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          whileHover={{ 
            rotate: [0, 10, -10, 0],
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-inner">
            Expert <br /> Trainers
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-full p-3 z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: 15, y: 20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.1,
            transition: { duration: 0.6 }
          }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm text-center p-2 shadow-inner">
            Proven <br /> Methods
          </div>
        </motion.div>
        
        {/* Floating testimonial */}
        <motion.div
          className="absolute -right-10 top-1/4 bg-white p-4 rounded-xl shadow-xl z-20 max-w-xs"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, type: "spring" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-2">
              {[1, 2].map((i) => (
                <img
                  key={i}
                  src={`https://randomuser.me/api/portraits/women/${i+30}.jpg`}
                  alt="Student"
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="text-sm font-medium">Our Students Say:</div>
          </div>
          <p className="text-sm text-gray-600 italic">"A+ Academy helped me achieve my dream score in just 4 weeks!"</p>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Introduction Section */}
      <section className="relative py-24 bg-white z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-xl border border-gray-200/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">Our Commitment</span> to Excellence
              </motion.h2>
              
              <motion.div 
                className="prose prose-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-xl leading-relaxed mb-6">
                  At <strong>A+ PTE Academy</strong>, we are passionately committed to helping students achieve their <span className="text-red-600 font-semibold">dream PTE scores</span> through expert guidance, result-oriented strategies, and personalized attention.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  Founded with a vision to make <span className="font-semibold">quality PTE training accessible and effective</span>, we take immense pride in being the trusted choice for students aiming to study, work, or settle abroad. Our reputation is built on <span className="text-red-600 font-semibold">real results</span> and <span className="font-semibold">transformative learning experiences</span>.
                </p>
                
                <p className="text-xl leading-relaxed">
                  With our team of <span className="font-semibold">highly experienced trainers</span>, continuously updated material, and flexible online classes, we ensure every learner receives the <span className="text-red-600 font-semibold">precise support they need</span> — whether it's mastering time management, perfecting pronunciation, improving fluency, or overcoming test anxiety.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-100 to-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Why We're Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach. We mentor, motivate, and walk with you on your success journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-red-600" />,
                title: "Personalized Mentorship",
                description: "One-on-one guidance tailored to your specific strengths and weaknesses"
              },
              {
                icon: <BarChart2 className="w-10 h-10 text-red-600" />,
                title: "Proven Strategies",
                description: "Time-tested techniques that consistently deliver high scores"
              },
              {
                icon: <Clock className="w-10 h-10 text-red-600" />,
                title: "Flexible Learning",
                description: "Online classes designed to fit your schedule, not the other way around"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative py-24 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl sm:text-4xl font-extrabold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Students' Success Speaks Volumes
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                {[
                  { value: "150+", label: "Students Trained" },
                  { value: "98%", label: "Success Rate" },
                  { value: "4.9★", label: "Average Rating" },
                  { value: "15+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/90 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-xl text-white/90 text-center mt-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Our students' remarkable achievements fuel our passion every single day. Their success stories are our proudest accomplishments.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-white z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your PTE Score?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Join thousands of successful students who achieved their dream scores with our proven methodology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Your Journey <Zap className="w-5 h-5" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;