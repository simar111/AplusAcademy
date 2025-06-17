import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Users, Clock, BarChart2, CheckCircle, Globe, Star, Zap ,ArrowRight} from 'react-feather';
import PTEAchievements from '../components/Achive';


const AboutUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const Whatsapplink = 'https://wa.me/917355825232?text=Hello%2C%20I%20am%20interested%20in%20your%20PTE%2C%20IELTS%2C%20or%20NAATI%20courses.%20Please%20share%20details.';

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
       <section className="relative py-24 bg-white overflow-hidden">
      {/* Floating background elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i%3 === 0 ? 'bg-red-600/5' : i%3 === 1 ? 'bg-red-400/8' : 'bg-red-800/3'}`}
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() * 100) - 50],
            x: [0, (Math.random() * 60) - 30],
            opacity: [0.2, 0.6, 0.2],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Grid pattern background */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_60%,white)] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-gray-200/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated gradient circles */}
          <motion.div 
            className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-red-600/10 to-red-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-red-600/5 to-red-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          <div className="relative z-10">
            {/* Animated header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-red-600/10 to-red-400/10 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-sm"
                initial={{ y: -10 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Our Philosophy
              </motion.span>
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">Excellence</span> in PTE Training
              </motion.h2>
              <motion.div 
                className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ delay: 0.4, duration: 0.8 }}
              />
            </motion.div>
            
            {/* Animated content blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Proven Methodology",
                  content: "Our research-backed teaching approach has helped thousands achieve their target scores.",
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Personalized Coaching",
                  content: "Tailored feedback and one-on-one sessions to address your specific weaknesses.",
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                },
                {
                  title: "Cutting-Edge Resources",
                  content: "Access to the latest practice materials and AI-powered analysis tools.",
                  icon: (
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50 shadow-md hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 15, scale: 1.05 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Main commitment text */}
            <motion.div 
              className="mt-12 prose prose-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.p 
                className="text-xl leading-relaxed mb-6"
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.7 }}
              >
                At <strong className="text-red-600">A+ PTE Academy</strong>, we are passionately committed to transforming English proficiency into <span className="font-semibold">PTE success stories</span>. Our approach combines <span className="text-red-600 font-semibold">scientific methodology</span> with <span className="font-semibold">personalized attention</span> to unlock each student's full potential.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed mb-6"
                initial={{ x: 20 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.8 }}
              >
                Founded by <span className="font-semibold">PTE perfect scorers</span>, our academy has become the <span className="text-red-600 font-semibold">trusted choice</span> for students worldwide. We take pride in our <span className="font-semibold">98% satisfaction rate</span> and the thousands of students who've achieved their immigration and academic goals through our programs.
              </motion.p>
              
              <motion.p 
                className="text-xl leading-relaxed"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.9 }}
              >
                With our team of <span className="font-semibold">certified trainers</span>, continuously updated curriculum, and <span className="text-red-600 font-semibold">cutting-edge technology</span>, we provide the precise support needed to master time management, pronunciation, fluency, and overcome test anxiety.
              </motion.p>
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
      <PTEAchievements />
      {/* CTA Section */}
     <section className="relative py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
  {/* Floating particles background */}
  <div className="absolute inset-0 z-0">
    {[...Array(20)].map((_, i) => (
      <div 
        key={i}
        className="absolute rounded-full animate-float"
        style={{
          background: `radial-gradient(circle, rgba(220, 38, 38, ${Math.random() * 0.2 + 0.05}), transparent)`,
          width: `${Math.random() * 20 + 5}px`,
          height: `${Math.random() * 20 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 20 + 10}s`,
          filter: 'blur(8px)'
        }}
      />
    ))}
  </div>

  {/* Gradient glow */}
  <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-20">
    <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-red-500/30 blur-[100px] animate-pulse-slow" />
    <div className="absolute top-2/3 left-2/3 w-96 h-96 rounded-full bg-amber-500/30 blur-[100px] animate-pulse-slow delay-1000" />
  </div>

  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <motion.div 
      className="bg-white/90 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        damping: 15,
        stiffness: 100
      }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: 0.2,
          duration: 0.8,
          type: "spring"
        }}
      >
        <span className="bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
          Ready to Transform
        </span> <br className="hidden sm:block" />
        Your <span className="relative">
          Exam
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-amber-500 animate-underline" />
        </span> Score?
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Join thousands of successful students who've achieved their dream scores with our expert-led coaching and proven methods.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <button
          className="relative inline-flex items-center justify-center bg-gradient-to-r from-red-600 to-amber-500 text-white font-semibold text-lg px-12 py-5 rounded-full overflow-hidden group shadow-xl hover:shadow-2xl transition-all"
          onClick={() => window.open(Whatsapplink, '_blank')}
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 flex items-center gap-3">
            Start Your Journey 
            <motion.span
              initial={{ x: -5 }}
              animate={{ x: 5 }}
              transition={{ 
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </span>
          <span className="absolute inset-0 border-2 border-white/20 rounded-full pointer-events-none animate-ping-slow opacity-0 group-hover:opacity-100" />
        </button>
      </motion.div>
    </motion.div>
  </div>

  <style jsx>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-50px) translateX(20px); }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.2; }
      50% { opacity: 0.3; }
    }
    @keyframes underline {
      0% { width: 0; left: 0; }
      50% { width: 100%; left: 0; }
      100% { width: 0; left: 100%; }
    }
    .animate-float { animation: float linear infinite; }
    .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
    .animate-underline { animation: underline 3s ease-in-out infinite; }
    .animate-ping-slow { animation: ping 3s cubic-bezier(0,0,0.2,1) infinite; }
    @keyframes ping {
      0% { transform: scale(0.9); opacity: 0.5; }
      100% { transform: scale(1.2); opacity: 0; }
    }
  `}</style>
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