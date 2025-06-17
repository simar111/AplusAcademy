import React, { useEffect, useState,useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import PTECourses from '../components/PteCourse';
import HeroSection from '../components/CourseHero';
import NAATIandIELTSCourses from '../components/In';

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [stats, setStats] = useState({ students: 0, successRate: 0, courses: 0 });
   const pteCoursesRef = useRef(null);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);

    // Animate stats counters
    const interval = setInterval(() => {
      setStats((prev) => ({
        students: prev.students < 5000 ? prev.students + 100 : 5000,
        successRate: prev.successRate < 98 ? prev.successRate + 2 : 98,
        courses: prev.courses < 3 ? prev.courses + 1 : 3,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // WhatsApp link for enrollment
  const whatsappLink = 'https://wa.me/+917355825232?text=I%20am%20interested%20in%20enrolling%20in%20a%20course%20at%20A%2B%20Academy!';
   const emailLink = "mailto:aplusacademy48@gmail.com";

  // Handle card hover
  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  // Handle expand/collapse for description
  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };
   const scrollToPTECourses = () => {
    pteCoursesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  return (
    <section className="relative bg-gray-50 overflow-hidden top-10">
      {/* Hero Section */}
      {/* <div className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-white top-10"> */}
      
     <HeroSection scrollToPTECourses={scrollToPTECourses} />

      {/* PTE Courses Section */}
      <div ref={pteCoursesRef} id="pte-courses">
        <PTECourses />
      </div>
      <NAATIandIELTSCourses />

      {/* PTE Courses Section */}
     
      {/* NAATI Courses Section */}
      
      {/* Course Benefits Section */}
      <div className="bg-gray-100 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Course Benefits
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110 animate-[bounce_2s_infinite]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7h2m2 0h2m-6 8h4m-2-2v4" />
                  </svg>
                ),
                title: 'Expert Instructors',
                content: 'Learn from certified professionals with years of experience in PTE, NAATI, and IELTS coaching.',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110 animate-[bounce_2s_infinite]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-3-3v6m-9 5h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: 'Personalized Learning',
                content: 'Customized study plans and one-on-one feedback to help you succeed.',
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110 animate-[bounce_2s_infinite]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Proven Results',
                content: '98% of our students achieve their target scores with our proven methods.',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-lg transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] group ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-600/15 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="relative flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-100"></div>
      </div>

      {/* Success Stats Section */}
      <div className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Success Stats
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Students Trained', value: stats.students },
              { label: 'Success Rate', value: `${stats.successRate}%` },
              { label: 'Courses Offered', value: stats.courses },
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-lg transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] group ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-600/15 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <h3 className="text-4xl font-bold text-red-600 text-center mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="bg-gray-100 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What Our Students Say
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Priya Sharma',
                course: 'PTE Champion',
                quote: 'A+ Academy helped me achieve a 79+ in PTE in just 30 days! The instructors are amazing.',
                image: './images/Priya.png',
              },
              {
                name: 'Rahul Kapoor',
                course: 'IELTS Complete',
                quote: 'The personalized feedback and mock tests were key to my IELTS band 8. Highly recommend!',
                image: './images/Rahul.png',
              },
              {
                name: 'Anjali Mehta',
                course: 'NAATI Complete',
                quote: 'I passed my NAATI exam on the first attempt thanks to A+ Academy’s guidance.',
                image: './images/Anjali.png',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl p-6 shadow-lg transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] group animate-[zoom-in_1s_ease-out] ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-600/15 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-red-600/30 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-100"></div>
      </div> */}

      {/* Call to Action Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-28 overflow-hidden">
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-lg z-10"></div>

      {/* Main CTA Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 relative transform transition-all duration-1000 ease-out font-sans tracking-tight ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Launch Your Success Journey
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-40 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-[underline_2.5s_cubic-bezier(0.4,0,0.2,1)_infinite]"></span>
        </h2>
        <p
          className={`text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto transform transition-all duration-1000 ease-out delay-200 font-light leading-relaxed ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          Join our expert-led PTE & IELTS courses and unlock your potential with personalized coaching tailored to your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-lg px-12 py-4 rounded-full shadow-xl transform transition-[transform,box-shadow] duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.8)] pointer-events-auto z-20 overflow-hidden group ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              window.open(whatsappLink, '_blank');
            }}
          >
            <span className="relative z-10">Enroll Now via WhatsApp</span>
            <span className="absolute inset-0 bg-red-700/50 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center rounded-full"></span>
          </a>
          <a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-transparent border-2 border-red-500 text-red-500 font-semibold text-lg px-12 py-4 rounded-full shadow-md transform transition-[transform,box-shadow,background-color,color] duration-300 ease-in-out hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] pointer-events-auto z-20 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              window.open(emailLink, '_blank');
            }}
          >
            Contact via Email
          </a>
        </div>
      </div>

      {/* Sticky Quick Enroll Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-2xl transform transition-[transform,box-shadow] duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_25px_rgba(239,68,68,0.9)] flex items-center gap-3 z-50 animate-[float_3s_cubic-bezier(0.4,0,0.2,1)_infinite] pointer-events-auto"
        onClick={(e) => {
          e.stopPropagation();
          window.open(whatsappLink, '_blank');
        }}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v2a2 2 0 002 2h10a2 2 0 002-2v-2h-4m-6-2a4 4 0 004-4V6a4 4 0 00-8 0v4a4 4 0 004 4z"
          />
        </svg>
        Quick Enroll
      </a>

      {/* Decorative Elements with Parallax Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-400/15 rounded-full animate-[float_10s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            style={{
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              transform: `translateZ(${Math.random() * 20}px)`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(239, 68, 68, 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-gray-200 z-10"></div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateZ(0); }
            50% { transform: translateY(-15px) translateZ(10px); }
            100% { transform: translateY(0) translateZ(0); }
          }
          @keyframes underline {
            0% { width: 0; left: 0; }
            50% { width: 100%; left: 0; }
            100% { width: 0; left: 100%; }
          }
        `}
      </style>
    </div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
          @keyframes underline {
            0% { width: 0; }
            50% { width: 100%; }
            100% { width: 0; }
          }
          @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes scroll {
            0% { transform: translateY(0); }
            50% { transform: translateY(10px); }
            100% { transform: translateY(0); }
          }
          @keyframes zoom-in {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </section>
  );
};

export default Courses;