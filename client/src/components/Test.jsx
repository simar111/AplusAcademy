import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

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


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: (index, current) => (index > current ? 200 : -200), rotateY: 30 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, ease: [0.68, -0.55, 0.265, 1.55] } },
  };

  const floatVariants = {
    animate: (i) => ({
      y: [0, -20 * Math.sin(i), 0],
      x: [0, 15 * Math.cos(i), 0],
      scale: [1, 1.15, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: { duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut' },
    }),
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-red-100/60">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-red-50/50 to-pink-100/50"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Layered Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
          const colors = ['bg-red-600/20', 'bg-pink-400/15', 'bg-orange-400/10'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 15 + 8;
          return (
            <motion.div
              key={i}
              className={`absolute ${color} rounded-full`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={floatVariants}
              animate="animate"
              custom={i}
            />
          );
        })}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-red-200/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-20%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-pink-200/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-15%', right: '-5%' }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwdjQwTTQwIDB2NDBoNDBWMEg0MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-20 md:mb-24"
        >
          <motion.span
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            className="inline-block bg-gradient-to-r from-red-600/20 to-pink-400/20 text-red-600 text-base font-semibold px-6 py-2 rounded-full mb-6 shadow-md"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Success Stories
          </motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6"
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
              Students
            </span>{' '}
            Say
          </motion.h2>
          <motion.div
            variants={{ hidden: { width: 0 }, visible: { width: '8rem' } }}
            className="w-32 h-2 bg-gradient-to-r from-red-600 to-pink-500 mx-auto rounded-full shadow-[0_0_15px_rgba(255,105,135,0.5)]"
            transition={{ delay: 0.4, duration: 1 }}
          />
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative h-[500px] md:h-[600px] perspective-1000">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4 ${
                index === currentTestimonial ? 'z-10' : 'z-0 pointer-events-none'
              }`}
              variants={testimonialVariants}
              initial="hidden"
              animate={index === currentTestimonial ? 'visible' : 'hidden'}
              custom={{ index, current: currentTestimonial }}
            >
              {/* Student Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 relative group">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-pink-500/30 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white shadow-2xl group-hover:shadow-[0_0_25px_rgba(255,105,135,0.5)] transition-all duration-500"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-full p-2.5 shadow-lg z-20"
                  whileHover={{ scale: 1.2, rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-red-600 to-pink-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                    {testimonial.score}
                  </div>
                </motion.div>
              </div>

              {/* Testimonial Content */}
              <motion.div
                className="flex-1 bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-xl max-w-2xl mx-auto border border-white/30 group"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255,105,135,0.2)' }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  className="w-12 h-12 text-red-500 mb-6 opacity-90"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <motion.p
                  className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  "{testimonial.quote}"
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <h4 className="text-gray-900 font-bold text-2xl">{testimonial.name}</h4>
                  <p className="text-gray-500 text-base mt-2">{testimonial.role}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center mt-16 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`relative w-14 h-3 rounded-full transition-all duration-400 ${
                index === currentTestimonial
                  ? 'bg-gradient-to-r from-red-600 to-pink-500 shadow-[0_0_15px_rgba(255,105,135,0.6)]'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
              whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(255,105,135,0.4)' }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentTestimonial && (
                <motion.span
                  className="absolute inset-0 bg-white/40 rounded-full"
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 0 }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-red-400/10 blur-3xl -z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-400/10 blur-3xl -z-10"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Custom Animation Keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;