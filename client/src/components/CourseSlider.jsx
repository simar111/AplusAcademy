import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookText, 
  Languages, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Check,
  Star,
  BarChart2,
  Mic2,
  Edit3,
  BookOpenCheck,
  MessageCircle,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';

const CourseSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentSlide(prev => (prev === courses.length - 1 ? 0 : prev + 1));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, currentSlide]);

  const courses = [
    {
      id: 1,
      title: "PTE Academic Pro",
      description: "AI-powered test simulations with instant scoring and personalized feedback to guarantee 79+ scores.",
      image: "./images/imagee1.png",
      icon: <BookText className="w-7 h-7 text-white" />,
      features: [
        { 
          text: "Real-time speaking analysis", 
          icon: <Mic2 className="w-5 h-5 text-red-500" />,
          description: "Get instant feedback on pronunciation, fluency, and oral fluency with our AI-powered analysis system."
        },
        { 
          text: "Writing evaluation by experts", 
          icon: <Edit3 className="w-5 h-5 text-red-500" />,
          description: "Receive detailed scoring and personalized feedback from PTE-certified instructors within 24 hours."
        },
        { 
          text: "Adaptive practice tests", 
          icon: <BarChart2 className="w-5 h-5 text-red-500" />,
          description: "Smart tests that adjust difficulty based on your performance to maximize learning efficiency."
        }
      ],
      whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20PTE%20Academic%20Pro",
      badge: "79+ Score Guarantee",
      badgeColor: "from-red-600 to-red-500"
    },
    {
      id: 2,
      title: "IELTS Premium",
      description: "Band 7.5+ guaranteed program with ex-examiner insights and unlimited writing corrections.",
      image: "/images/imagee.png",
      icon: <Languages className="w-7 h-7 text-white" />,
      features: [
        { 
          text: "All modules masterclass", 
          icon: <BookOpenCheck className="w-5 h-5 text-red-500" />,
          description: "Comprehensive training covering Listening, Reading, Writing, and Speaking modules with expert strategies."
        },
        { 
          text: "Cambridge materials", 
          icon: <Star className="w-5 h-5 text-red-500" />,
          description: "Access to authentic Cambridge IELTS preparation materials and practice tests."
        },
        { 
          text: "1:1 speaking sessions", 
          icon: <Mic2 className="w-5 h-5 text-red-500" />,
          description: "Personalized speaking practice with ex-examiners to refine your pronunciation and fluency."
        }
      ],
      whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20IELTS%20Premium",
      badge: "7.5+ Band Guarantee",
      badgeColor: "from-blue-600 to-blue-500"
    },
    {
      id: 3,
      title: "NAATI CCL Expert",
      description: "5-point bonus strategies with native-level coaching and government-approved curriculum.",
      image: "/images/imagee2.png",
      icon: <Award className="w-7 h-7 text-white" />,
      features: [
        { 
          text: "Bilingual mentor support", 
          icon: <Languages className="w-5 h-5 text-red-500" />,
          description: "Guidance from certified bilingual mentors who understand the nuances of community languages."
        },
        { 
          text: "Official test patterns", 
          icon: <Check className="w-5 h-5 text-red-500" />,
          description: "Practice with real NAATI test patterns and scenarios to build confidence."
        },
        { 
          text: "Community language focus", 
          icon: <Star className="w-5 h-5 text-red-500" />,
          description: "Specialized training for your specific community language requirements."
        }
      ],
      whatsappLink: "https://wa.me/1234567890?text=I'm%20interested%20in%20NAATI%20CCL%20Expert",
      badge: "5-Point Bonus Guarantee",
      badgeColor: "from-purple-600 to-purple-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === courses.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? courses.length - 1 : prev - 1));
  };

  return (
    <section 
      className="relative py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.05)_0%,_transparent_70%)]"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-500/10 rounded-full"
            initial={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [`${Math.random() * 100 - 50}px`, `${Math.random() * 100 - 50}px`]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <motion.span 
            className="inline-block bg-red-600/10 text-red-600 text-sm font-medium px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Programs
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Your <span className="text-red-600">Success</span> Blueprint
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Certified courses designed by industry experts with proven results
          </motion.p>
        </div>

        {/* Full-width Slider Container */}
        <div className="relative w-full">
          {/* Navigation Arrows */}
          <motion.button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-red-600 hover:bg-red-50 transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous course"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </motion.button>
          
          <motion.button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-xl flex items-center justify-center text-red-600 hover:bg-red-50 transition-all"
            whileHover={{ scale: 1.1, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next course"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </motion.button>

          {/* Slides - Responsive Height */}
          <div className="relative h-[600px] sm:h-[650px] lg:h-[650px] overflow-hidden">
            <AnimatePresence mode="wait">
              {courses.map((course, index) => (
                currentSlide === index && (
                  <motion.div
                    key={course.id}
                    className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, x: index > currentSlide ? '100%' : '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: index < currentSlide ? '100%' : '-100%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex flex-col lg:flex-row h-full">
                      {/* Course Image - Full Width in Mobile, Half in Desktop */}
                      <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-full relative overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-transparent z-10"
                          animate={{
                            backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : '0% 0%'
                          }}
                          transition={{ duration: 2 }}
                        />
                        <motion.img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover object-top"
                          style={{
                            imageRendering: '-webkit-optimize-contrast',
                            imageRendering: 'crisp-edges'
                          }}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: isHovered ? 1.05 : 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        {/* Course Badge */}
                        <motion.div 
                          className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-lg flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {course.icon}
                          <span className="font-bold text-gray-800 ml-2 text-sm sm:text-base">
                            {course.title.split(' ')[0]}
                          </span>
                        </motion.div>
                        {/* Guarantee Badge */}
                        <motion.div 
                          className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r ${course.badgeColor} text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center text-sm sm:text-base`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                          <span>{course.badge}</span>
                        </motion.div>
                      </div>
                      
                      {/* Course Content with scrollable features */}
                      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col items-center lg:items-start text-center lg:text-left overflow-y-auto">
                        <div className="w-full max-w-md sm:max-w-lg lg:max-w-none">
                          <motion.h3 
                            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {course.title}
                          </motion.h3>
                          
                          <motion.p
                            className="text-gray-600 text-base sm:text-lg mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                          >
                            {course.description}
                          </motion.p>
                          
                          <div className="mb-8">
                            <motion.div 
                              className="flex items-center justify-center lg:justify-start mb-4"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 }}
                            >
                              <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-500 mr-2" />
                              <span className="font-medium text-gray-800 text-sm sm:text-base">
                                Key Features:
                              </span>
                            </motion.div>
                            
                            <motion.ul 
                              className="space-y-4 pr-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              {course.features.map((feature, i) => (
                                <motion.li 
                                  key={i}
                                  className="bg-gray-50 rounded-xl p-4"
                                  whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
                                  }}
                                >
                                  <div className="flex items-start">
                                    <span className="flex-shrink-0 mr-3 mt-0.5">
                                      {feature.icon}
                                    </span>
                                    <div>
                                      <div className="font-medium text-gray-800 text-sm sm:text-base">
                                        {feature.text}
                                      </div>
                                      <motion.p 
                                        className="text-gray-600 mt-1 text-xs sm:text-sm"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                      >
                                        {feature.description}
                                      </motion.p>
                                    </div>
                                  </div>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </div>
                        </div>
                        
                        {/* Fixed position for button at bottom */}
                        <div className="mt-auto pt-6 w-full max-w-md sm:max-w-lg lg:max-w-none">
                          <motion.a
                            href={course.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 px-6 rounded-xl font-medium hover:shadow-lg transition-all group relative overflow-hidden"
                            whileHover={{ 
                              scale: 1.02,
                              boxShadow: "0 10px 25px -5px rgba(25, 195, 125, 0.4)"
                            }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                          >
                            <span className="relative z-10 flex items-center justify-center">
                              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                              Enquire on WhatsApp
                            </span>
                            <motion.span 
                              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={{ x: '-100%' }}
                              animate={{ x: isHovered ? '0%' : '-100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </motion.a>
                          
                        
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center mt-8 sm:mt-12 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gradient-to-r from-red-600 to-red-400 w-8' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Floating Sparkles */}
        <motion.div 
          className="absolute -bottom-20 -right-20 text-red-400 opacity-70"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles size={200} />
        </motion.div>
      </div>
    </section>
  );
};

export default CourseSlider;