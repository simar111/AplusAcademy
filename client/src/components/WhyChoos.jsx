import React, { useEffect, useState ,} from 'react';
import { motion ,useAnimation} from 'framer-motion';
import Testimonials from './Test';
const WhyChooseUsAndTestimonials = () => {
  // const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Trigger animations on mount
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0 });
      // setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [controls]);

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: { y: 0, opacity: 1, rotateX: 0 },
    hover: { 
      y: -20, 
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      boxShadow: "0 30px 60px -12px rgba(220, 38, 38, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)"
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 360,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in enrolling at A+ Academy. Can you please provide more details about your courses?";
    const phoneNumber = "+917358825232"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const features = [
    {
      icon: (
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <svg className="w-14 h-14 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
          </svg>
          <motion.div 
            className="absolute inset-0 border-2 border-red-300 rounded-3xl opacity-0"
            whileHover={{ 
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      ),
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of experience in PTE and IELTS coaching.",
      stats: "15+ Years Average Experience",
      color: "from-red-500 to-red-600"
    },
    {
      icon: (
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <svg className="w-14 h-14 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <motion.div 
            className="absolute inset-0 border-2 border-red-300 rounded-3xl opacity-0"
            whileHover={{ 
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      ),
      title: "Proven Results",
      description: "98% success rate with students achieving their target scores.",
      stats: "98% Success Rate",
      color: "from-red-500 to-red-600"
    },
    {
      icon: (
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <svg className="w-14 h-14 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253" />
          </svg>
          <motion.div 
            className="absolute inset-0 border-2 border-red-300 rounded-3xl opacity-0"
            whileHover={{ 
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      ),
      title: "Personalized Learning",
      description: "Tailored study plans to meet your individual needs and goals.",
      stats: "100% Custom Plans",
      color: "from-red-500 to-red-600"
    },
    {
      icon: (
        <motion.div 
          className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center relative overflow-hidden"
          variants={iconVariants}
          whileHover="hover"
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <svg className="w-14 h-14 text-red-600 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <motion.div 
            className="absolute inset-0 border-2 border-red-300 rounded-3xl opacity-0"
            whileHover={{ 
              opacity: 1,
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      ),
      title: "Flexible Schedules",
      description: "Classes designed to fit your busy lifestyle, online or in-person.",
      stats: "24/7 Access",
      color: "from-red-500 to-red-600"
    },
  ];
  // Testimonials data
  
  const testimonials = [
    {
      name: "Nitin Chhimpa",
      role: "PTE Academic Student",
      score: "Scored 89 Overall",
      quote: "I had taken 7 one-on-one sessions with Arzoo Ma'am for the Speaking and Writing sections, and the improvement was clearly visible. She focused on my weak areas with precision. I went from scoring mid-50s to a confident 74 overall. The way she breaks down complex tasks is just brilliant",
      image: "/images/Nitin.jpg",
    },
    {
      name: "Mukund ",
      role: "IELTS Student",
      score: "Band 8.5 Overall",
      quote: "Big thanks to Anshul Sir! His grammar workshops and one-on-one reading strategies helped me understand where I was going wrong. After 5 personalized sessions, I could see my consistency improving. The mock tests felt very close to the real exam format",
      image: "/images/Mukund.jpg",
    },
    {
      name: "Pavni",
      role: "IELTS Student",
      score: "5-Point Bonus Achieved",
      quote: "Ayan Sir was my go-to mentor during my time at APlus Academy. I took 6 private sessions focusing on the listening section. His tips about note-taking and managing time were extremely useful. Overall a great learning experience. Just wish the practice portal was available on mobile too",
      image: "/images/Pavni.jpg",
    },
    {
      name: "Simar",
      role: "PTE Student",
      score: "5-Point Bonus Achieved",
      quote: "I joined APlus Academy after a friend's recommendation and it turned out to be a game-changer. I had 7 one-to-one classes with both Arzoo Ma'am and Anshul Sir. They focused on building my fluency and writing structure. The environment is super friendly, and the support is always available",
      image: "/images/Simar.jpg",
    },
    {
      name: "Jashan",
      role: "PTE Student",
      score: "5-Point Bonus Achieved",
      quote: "The structured one-on-one guidance from Ayan Sir and Anshul Sir helped me overcome my hesitation in the Speaking module. I attended 6 sessions and each one was packed with actionable feedback. The course material is exactly what you need for PTE – no fluff",
      image: "/images/Jashan.jpg",
    }
  ];

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Why Choose Us Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-red-500/10' : 
              i % 3 === 1 ? 'bg-red-400/10' : 
              'bg-red-300/10'
            }`}
            initial={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
              x: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 8
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-transparent to-red-50/30 z-0" />

      {/* Section Header with enhanced animation */}
      <motion.h2
        className={`text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 text-center mb-16 relative z-10 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ y: 100, opacity: 0, scale: 0.8 }}
        animate={isVisible ? { y: 0, opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Why Choose A+ Academy
        {/* <span className="relative inline-block">
          <motion.span
            className="relative z-10"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(220, 38, 38, 0.5)"
            }}
          >
            A+ Academy
          </motion.span>
          <motion.span 
            className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.2 }}
          />
          <motion.div
            className="absolute -inset-2 bg-red-400/20 rounded-2xl blur-xl opacity-0"
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </span> */}
        <span className="text-red-600">?</span>
      </motion.h2>

      {/* Enhanced cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="group relative"
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
            transition={{ delay: index * 0.2, duration: 0.8 }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
          >
            {/* Card container with glass effect */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-white/20">
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5`}
                transition={{ duration: 0.5 }}
              />
              
              {/* Glowing border effect */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-20`}
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating particles on hover */}
              {hoveredCard === index && (
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-red-400 rounded-full"
                      initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: 0
                      }}
                      animate={{
                        y: '-100%',
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Enhanced icon with multiple hover effects */}
                <motion.div
                  className="mb-8 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.3, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Enhanced title with color transition */}
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300"
                  whileHover={{ 
                    color: "#dc2626",
                    scale: 1.02
                  }}
                >
                  {item.title}
                </motion.h3>
                
                {/* Description with fade effect */}
                <motion.p 
                  className="text-gray-600 mb-6 leading-relaxed"
                  whileHover={{ color: "#4b5563" }}
                >
                  {item.description}
                </motion.p>
                
                {/* Enhanced stats badge */}
                <motion.div 
                  className={`text-sm font-bold text-white bg-gradient-to-r ${item.color} px-4 py-2 rounded-full shadow-lg relative overflow-hidden`}
                  initial={{ scale: 0.9, opacity: 0.8 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="relative z-10">{item.stats}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
                
                {/* Animated decorative line */}
                <motion.div 
                  className={`w-20 h-1 bg-gradient-to-r ${item.color} mt-6 rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  whileHover={{ scaleX: 1.2 }}
                  transition={{ delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced CTA with WhatsApp integration */}
      <motion.div 
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.2 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl relative overflow-hidden group border-2 border-red-300/30"
          whileHover={{ 
            scale: 1.08,
            boxShadow: "0 20px 40px -10px rgba(220, 38, 38, 0.5)",
            borderColor: "rgba(220, 38, 38, 0.6)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center justify-center">
            <motion.svg 
              className="w-6 h-6 mr-3" 
              fill="currentColor" 
              viewBox="0 0 24 24"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690"/>
            </motion.svg>
            Enroll Now
            <motion.div
              className="ml-3 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </span>
          
          {/* Animated background overlay */}
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: '-100%' }}
            whileHover={{ x: '0%' }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 bg-red-400 rounded-full opacity-0"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}
          />
        </motion.button>
      </motion.div>

      {/* Enhanced floating decorative elements */}
      <motion.div 
        className="absolute -bottom-32 -right-32 text-red-400/20 z-0"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L4 12l8 10 8-10-8-10zm0 2.8L18 12l-6 7.2L6 12l6-7.2z" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute -top-20 -left-20 text-red-400/20 z-0"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </motion.div>
    </div>

      {/* Testimonials Section */}
     {/* <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-white to-red-50"> */}
  {/* Animated gradient background */}
  {/* <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-white to-red-50"
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%']
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear"
      }}
    /> */}
  {/* </div> */}
  
  {/* Floating particles with different colors */}
  {/* <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => {
      const colors = ['bg-red-600/10', 'bg-red-400/15', 'bg-red-800/5'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
       */}
      {/* return (
        <motion.div
          key={i}
          className={`absolute ${color} rounded-full`}
          initial={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: `${Math.random() * 100 - 50}px`,
            y: `${Math.random() * 100 - 50}px`
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 10
          }}
        />
      );
    })}
  </div> */}

  {/* Animated grid pattern */}
  {/* <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
  </div> */}

  {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> */}
    {/* Section header with enhanced animation */}
    {/* <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className="text-center mb-16 md:mb-20"
    > */}
      {/* <motion.span 
        className="inline-block bg-gradient-to-r from-red-600/10 to-red-400/10 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-4 shadow-sm"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Success Stories
      </motion.span>
      <motion.h2 
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Students</span> Say
      </motion.h2>
      <motion.div 
        className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "6rem" }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
    </motion.div> */}

    {/* Enhanced testimonials carousel */}
    {/* <div className="relative h-[450px] md:h-[500px]">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 ${
            index === currentTestimonial ? 'z-10' : 'z-0'
          }`}
          initial={{ 
            opacity: 0, 
            x: index > currentTestimonial ? 150 : -150,
            scale: index === currentTestimonial ? 1 : 0.9
          }}
          animate={{ 
            opacity: index === currentTestimonial ? 1 : 0,
            x: index === currentTestimonial ? 0 : (index > currentTestimonial ? 150 : -150),
            scale: index === currentTestimonial ? 1 : 0.95
          }}
          transition={{ 
            duration: 0.7, 
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 0.5 }
          }}
        > */}
          {/* Student image with enhanced effects */}
          {/* <div className="w-40 h-40 md:w-56 md:h-56 mx-auto md:mx-0 relative group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            /> */}
            {/* <motion.div 
              className="absolute inset-0 rounded-full border-4 border-white shadow-2xl transition-all duration-300 group-hover:shadow-red-200/50"
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg z-20 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-red-600 to-red-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                {testimonial.score}
              </div>
            </motion.div>
          </div> */}

          {/* Testimonial content with enhanced design */}
          {/* <motion.div 
            className="flex-1 bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl max-w-2xl mx-auto border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <svg 
              className="w-10 h-10 text-red-400 mb-6 opacity-90" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <motion.p 
              className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "{testimonial.quote}"
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-gray-900 font-bold text-xl">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm mt-1">{testimonial.role}</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div> */}

    {/* Enhanced navigation with animation */}
    {/* <motion.div 
      className="flex justify-center mt-12 space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {testimonials.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => setCurrentTestimonial(index)}
          className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
            index === currentTestimonial 
              ? 'bg-gradient-to-r from-red-600 to-red-400' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
          aria-label={`View testimonial ${index + 1}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {index === currentTestimonial && (
            <motion.span 
              className="absolute inset-0 bg-white/30 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </motion.button>
      ))}
    </motion.div> */}

    {/* Decorative elements */}
    {/* <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-red-400/10 blur-3xl -z-10" />
    <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/5 blur-3xl -z-10" />
  </div>
</section> */}
      {/* Custom Animation Keyframes */}
      {/* <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style> */}
      <Testimonials />
    </section>
  );
};

export default WhyChooseUsAndTestimonials;