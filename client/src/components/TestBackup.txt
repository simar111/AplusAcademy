 <section className="relative py-16 md:py-28 overflow-hidden bg-gradient-to-br from-white to-red-50">
  {/* Animated gradient background */}
  <div className="absolute inset-0 overflow-hidden">
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
    />
  </div>
  
  {/* Floating particles with different colors */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(20)].map((_, i) => {
      const colors = ['bg-red-600/10', 'bg-red-400/15', 'bg-red-800/5'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 10 + 5;
      
      return (
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
  </div>

  {/* Animated grid pattern */}
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section header with enhanced animation */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "backOut" }}
      className="text-center mb-16 md:mb-20"
    >
      <motion.span 
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
    </motion.div>

    {/* Enhanced testimonials carousel */}
    <div className="relative h-[450px] md:h-[500px]">
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
        >
          {/* Student image with enhanced effects */}
          <div className="w-40 h-40 md:w-56 md:h-56 mx-auto md:mx-0 relative group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
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
          </div>

          {/* Testimonial content with enhanced design */}
          <motion.div 
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
    </div>

    {/* Enhanced navigation with animation */}
    <motion.div 
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
    </motion.div>

    {/* Decorative elements */}
    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-red-400/10 blur-3xl -z-10" />
    <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-red-600/5 blur-3xl -z-10" />
  </div>
</section>
      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>