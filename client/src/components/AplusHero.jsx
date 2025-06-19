import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const APlusHero = () => {
  useEffect(() => {
    // Create floating particles
    const particles = [];
    const container = document.querySelector('.particle-container');
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-red-500/10';
      
      // Random properties
      const size = Math.random() * 10 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 15 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
      
      container?.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="particle-container absolute inset-0 overflow-hidden"></div>
      <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5e6c01bb5212506d6c119069/5e6c01bb8abd7761ed9f6d3b_pattern-white.svg')] opacity-10"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/20 to-red-50/10"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 relative z-10">
        {/* Left Content Column */}
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-red-600 mb-4 inline-block px-3 py-1 bg-red-100/50 rounded-full"
          >
            PREMIUM EDUCATION
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl p-2 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent tracking-loose"
          >
            A+ Academy
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 text-gray-900"
          >
            Excellence : The <span className="text-red-600">Timeless</span> Standard
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base text-gray-600 mb-6"
          >
            Join our premium courses and transform your academic performance with our expert guidance and proven methodologies.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#"
            className="relative overflow-hidden group bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-lg hover:shadow-xl py-3 px-6 border-0 hover:from-red-700 hover:to-red-600 transition-all duration-300"
          >
            <span className="relative z-10">Explore Programs</span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
        </div>

        {/* Right Image Column */}
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-48 flex flex-wrap content-center relative"
          >
            {/* Main Center Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 transform -translate-x-1/2"
            >
              <img
                className="w-64 h-64 object-contain"
                src="https://illustrations.popsy.co/amber/graduate.svg"
                alt="Academic excellence"
                loading="lazy"
              />
            </motion.div>
            
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-0 left-0 hidden xl:block"
            >
              <img
                className="w-24 h-24 object-contain"
                src="https://illustrations.popsy.co/amber/open-book.svg"
                alt="Education"
                loading="lazy"
              />
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="absolute bottom-0 right-0 hidden lg:block"
            >
              <img
                className="w-24 h-24 object-contain"
                src="https://illustrations.popsy.co/amber/medal.svg"
                alt="Success"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .particle-container div {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default APlusHero;