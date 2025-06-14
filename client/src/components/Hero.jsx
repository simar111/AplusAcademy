import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setImageVisible(true), 300);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
      {/* Background Particles Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(220,38,38,0.15)_0%,transparent_70%)] animate-[pulse_12s_infinite]"></div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-600/20 rounded-full animate-[float_8s_infinite]"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 transform transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Left Section: Text Content - Made slightly wider */}
      <div className="lg:w-[62%] text-center lg:text-left space-y-8">

          {/* Tagline with Typewriter Animation */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-[2.85rem]  font-extrabold text-gray-800 leading-tight animate-typewriter overflow-hidden whitespace-nowrap tracking-wide`}
            style={{ borderRight: '4px solid #dc2626' }}
          >
            Your Dream Score Starts Here – <br />
            <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              A Plus Academy
            </span>{' '}
            for PTE & IELTS
          </h1>

          {/* Subheading with Typewriter Animation */}
          <p
            className={`text-lg sm:text-xl lg:text-[1.1rem] text-gray-600 max-w-lg mx-auto lg:mx-0 animate-typewriter-sub overflow-hidden whitespace-nowrap tracking-wide`}
            style={{ borderRight: '4px solid #dc2626' }}
          >
            Achieve Your Goals with Expert Guidance and Free Demo Classes
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center lg:justify-start space-x-4 mt-6">
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.7)]"
            >
              Enroll Now
            </a>
            <a
              href="/courses"
              className="inline-block bg-transparent border-2 border-red-600 text-red-600 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-red-600 hover:text-white hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            >
              Explore Courses
            </a>
          </div>

          {/* Success Rate Badge */}
          <div
            className={`inline-flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-red-600 font-bold text-lg mr-2">98%</span>
            <span className="text-gray-700 font-semibold">Success Rate</span>
          </div>
        </div>

        {/* Right Section: Enhanced Image Section - Adjusted position */}
        <div
          className={`lg:w-[38%] mt-16 lg:mt-24 transform transition-all duration-1000 ${
            imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative max-w-md mx-auto lg:ml-8">
            {/* General Image with Decorative Overlay */}
            <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-4 border border-red-600/20 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"></div>
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-600/50 rounded-2xl transition-all duration-500"></div>
              <img
                src="./images/hero.jpg"
                alt="Academic success theme"
                className="w-full h-72 object-cover rounded-xl relative z-10 transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg animate-[pulse_3s_infinite] z-20">
                <span className="text-white font-bold text-xl">A+</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg z-20">
                <span className="text-red-600 font-semibold text-sm">High Achievers</span>
              </div>
              {/* Floating Icons */}
              <div
                className={`absolute top-4 left-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-1000 delay-600 ${
                  imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 20h9M12 20h-9m9 0V4m0 0H9m3 0h3"
                  />
                </svg>
              </div>
              <div
                className={`absolute bottom-10 right-4 w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-1000 delay-800 ${
                  imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332-.477-4.5-1.253"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes typewriter-sub {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink-cursor {
            from, to { border-color: transparent; }
            50% { border-color: #dc2626; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .animate-typewriter {
            animation: typewriter 4s steps(70) 1s 1 normal both,
                       blink-cursor 0.75s step-end 6;
          }
          .animate-typewriter-sub {
            animation: typewriter-sub 3.5s steps(60) 4.5s 1 normal both,
                       blink-cursor 0.75s step-end 9;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;