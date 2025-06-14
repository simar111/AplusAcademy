import React, { useEffect, useState } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Introduction Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div
            className={`lg:w-1/2 text-center lg:text-left space-y-6 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
              About <span className="text-red-600">A+ Academy</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-md mx-auto lg:mx-0">
              A+ Academy is your trusted partner in achieving top scores in PTE and IELTS. With a proven track record and personalized coaching, we empower students to reach their dreams.
            </p>
            <a
              href="/contact"
              className="inline-block bg-red-600 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_25px_rgba(220,38,38,0.7)]"
            >
              Get in Touch
            </a>
          </div>
          {/* Right: Image */}
          <div
            className={`lg:w-1/2 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <div className="relative bg-white/95 backdrop-blur-lg rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-4 border border-red-600/20 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent"></div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-red-600/50 rounded-2xl transition-all duration-500"></div>
                <img
                  src="https://via.placeholder.com/400x300?text=About+A+Academy"
                  alt="About A+ Academy"
                  className="w-full h-72 object-cover rounded-xl relative z-10 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg animate-[pulse_3s_infinite] z-20">
                  <span className="text-white font-bold text-xl">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div
          className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At A+ Academy, our mission is to empower students worldwide to achieve their dream scores in PTE and IELTS through expert guidance, innovative teaching methods, and personalized support. We strive to make success accessible to everyone.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gradient-to-br from-red-600/5 via-white to-red-600/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Anita Rao",
                role: "Lead Instructor",
                image: "https://via.placeholder.com/150?text=Anita",
              },
              {
                name: "Mr. Vikram Seth",
                role: "IELTS Expert",
                image: "https://via.placeholder.com/150?text=Vikram",
              },
              {
                name: "Ms. Neha Kapoor",
                role: "PTE Specialist",
                image: "https://via.placeholder.com/150?text=Neha",
              },
              {
                name: "Mr. Arjun Patel",
                role: "Academic Counselor",
                image: "https://via.placeholder.com/150?text=Arjun",
              },
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } hover:scale-105 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] group ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600/30 transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">{member.name}</h3>
                <p className="text-gray-600 text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our History Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2
          className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our History
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-600 h-full"></div>
          {[
            {
              year: "2015",
              event: "A+ Academy Founded",
              description: "Started with a small team dedicated to helping students excel in PTE and IELTS.",
              side: "left",
            },
            {
              year: "2018",
              event: "Expanded Globally",
              description: "Opened online courses, reaching students worldwide with our proven methods.",
              side: "right",
            },
            {
              year: "2020",
              event: "Achieved 98% Success Rate",
              description: "Celebrated a milestone with thousands of students achieving their target scores.",
              side: "left",
            },
            {
              year: "2025",
              event: "10,000+ Students",
              description: "Proudly served over 10,000 students on their journey to success.",
              side: "right",
            },
          ].map((milestone, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 transform transition-all duration-1000 ease-out delay-${
                index * 200
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`w-1/2 ${milestone.side === 'left' ? 'pr-8 text-right' : 'hidden'}`}>
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-red-600/20">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {milestone.year}
                </div>
              </div>
              <div className={`w-1/2 ${milestone.side === 'right' ? 'pl-8 text-left' : 'hidden'}`}>
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-red-600/20">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-600/15 rounded-full animate-[float_12s_infinite]"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
    </section>
  );
};

export default AboutUs;