import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';

const Courses = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [stats, setStats] = useState({ students: 0, successRate: 0, courses: 0 });

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
  const whatsappLink = 'https://wa.me/919876543210?text=I%20am%20interested%20in%20enrolling%20in%20a%20course%20at%20A%2B%20Academy!';

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

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden bg-white top-10">
        {/* Animated Background with Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-500/20 rounded-sm rotate-45 animate-float"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 py-16">
          <div className={`mb-6 inline-flex ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full text-white text-sm font-medium tracking-wide shadow-md hover:shadow-xl transition-all duration-300 group">
              <span className="relative z-10">Trusted by 5,000+ Students</span>
              <span className="absolute -inset-1 rounded-full bg-red-400/30 blur-md -z-0 animate-pulse group-hover:blur-lg transition-all duration-300"></span>
            </div>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-red-600 to-gray-800 animate-[typewriter_4s_steps(30)_1] overflow-hidden whitespace-nowrap border-r-4 border-red-500">
              Achieve Your
            </span>
            <span className="block mt-3">
              <span className="relative inline-block">
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-900">Dream Scores</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-red-100 -z-0"></span>
              </span>
            </span>
          </h1>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Expert PTE, NAATI, and IELTS courses designed to help you succeed faster with proven methodologies.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <a
              href="#pte-courses"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Courses
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <button className="px-6 py-3 bg-white border-2 border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
              Free Assessment
            </button>
          </div>
          <div className={`flex flex-wrap justify-center gap-6 mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {["4.9/5 Stars", "98% Success", "Expert Tutors"].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-gray-600 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

      {/* PTE Courses Section */}
      <div id="pte-courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <h2
          className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          PTE Courses
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: 'Minute Mastery',
              shortDescription: 'A quick 7-day course to master PTE essentials with daily practice and expert tips.',
              fullDescription:
                'The Minute Mastery course is designed for beginners who need a fast track to understanding the PTE exam. Over 7 days, you’ll cover the essentials of all four modules—Speaking, Writing, Reading, and Listening. With daily practice sessions, expert tips, and a mock test, this course ensures you build a strong foundation to tackle the PTE with confidence. Perfect for those with limited time who want quick results.',
              duration: '7 Days',
              price: '₹5,000',
              image: './images/MinuteMastery.png',
              features: ['Daily Practice Sessions', 'Essential Tips & Tricks', 'Mock Test'],
              level: 'Beginner',
            },
            {
              title: 'Booster',
              shortDescription: 'A 15-day course focusing on advanced strategies to boost your PTE scores.',
              fullDescription:
                'The Booster course is tailored for intermediate learners aiming to elevate their PTE scores. Spanning 15 days, this program dives deep into advanced strategies for each module, helping you master complex question types and improve your time management. Daily feedback from instructors ensures you’re on the right track, and two full-length mock tests give you the confidence to excel on exam day. Ideal for those seeking a significant score improvement.',
              duration: '15 Days',
              price: '₹8,000',
              image: './images/Booster.png',
              features: ['Advanced Strategies', 'Daily Feedback', 'Two Full Mock Tests'],
              level: 'Intermediate',
            },
            {
              title: 'Champion',
              shortDescription: 'A comprehensive 30-day course for in-depth PTE preparation with personalized coaching.',
              fullDescription:
                'The Champion course is the ultimate 30-day PTE preparation program for those aiming for top scores. This in-depth course covers every aspect of the PTE exam with a focus on personalized coaching to address your specific weaknesses. With five full-length mock tests, daily practice, and one-on-one feedback, you’ll be fully prepared to achieve your dream score. Perfect for advanced learners or those who want a thorough, structured approach to success.',
              duration: '30 Days',
              price: '₹12,000',
              image: './images/Champion.png',
              features: ['In-Depth Training', 'Personalized Coaching', 'Five Mock Tests'],
              level: 'Advanced',
            },
          ].map((course, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ff0000"
              className="transform transition-all duration-1000 ease-out"
            >
              <div
                className={`relative bg-white border-2 border-transparent rounded-xl overflow-hidden shadow-lg transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } group animate-[zoom-in_1s_ease-out] ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                } ${hoveredCard === index ? 'scale-105 border-red-500/50 shadow-2xl z-10' : 'scale-100'}`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-600/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                ></div>
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    width="200"
                    height="300"
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6">
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <div className="text-gray-600 text-sm mb-4">
                    <p className={`${expandedCard === index ? 'line-clamp-none' : 'line-clamp-3'}`}>
                      {expandedCard === index ? course.fullDescription : course.shortDescription}
                    </p>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-red-600 font-medium mt-2 hover:underline focus:outline-none"
                    >
                      {expandedCard === index ? 'Read Less' : 'Read More'}
                    </button>
                  </div>
                  <div className="flex justify-between text-gray-700 mb-4 text-sm font-medium">
                    <span>{course.duration}</span>
                    <span>{course.price}</span>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-500 ${
                      hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                    <ul className="text-gray-600 space-y-3">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-red-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]"
                    >
                      Enroll Now
                    </a>
                  </div>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] ${
                      hoveredCard === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
        {/* Gradient Fade Transition */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      {/* NAATI Courses Section */}
      <div className="bg-gray-100 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            NAATI Courses
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-2xl mx-auto">
            {[
              {
                title: 'One-Month Complete Course',
                shortDescription: 'A comprehensive 4-week NAATI preparation course with intensive training and mock tests.',
                fullDescription:
                  'The One-Month Complete Course for NAATI is designed to help you excel in the Credentialed Community Language (CCL) test within 4 weeks. This intensive program includes daily training sessions focusing on translation, dialogue interpretation, and cultural competency. With personalized feedback from expert instructors and multiple mock tests, you’ll gain the skills and confidence needed to pass the NAATI exam on your first attempt. Ideal for all levels, this course ensures you’re fully prepared for success.',
                duration: '4 Weeks',
                price: '₹15,000',
                image: './images/NAATIComplete.png',
                features: ['Intensive Training', 'Mock Tests', 'Personalized Feedback', 'Cultural Competency'],
                level: 'All Levels',
              },
            ].map((course, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ff0000"
                className="transform transition-all duration-1000 ease-out"
              >
                <div
                  className={`relative bg-white border-2 border-transparent rounded-xl overflow-hidden shadow-lg transform transition-all duration-1000 ease-out delay-${
                    index * 200
                  } group animate-[zoom-in_1s_ease-out] ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  } ${hoveredCard === index + 3 ? 'scale-105 border-red-500/50 shadow-2xl z-10' : 'scale-100'}`}
                  onMouseEnter={() => handleCardHover(index + 3)}
                  onMouseLeave={handleCardLeave}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-600/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  ></div>
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      width="200"
                      height="300"
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <div className="text-gray-600 text-sm mb-4">
                      <p className={`${expandedCard === index + 3 ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        {expandedCard === index + 3 ? course.fullDescription : course.shortDescription}
                      </p>
                      <button
                        onClick={() => toggleExpand(index + 3)}
                        className="text-red-600 font-medium mt-2 hover:underline focus:outline-none"
                      >
                        {expandedCard === index + 3 ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                    <div className="flex justify-between text-gray-700 mb-4 text-sm font-medium">
                      <span>{course.duration}</span>
                      <span>{course.price}</span>
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-500 ${
                        hoveredCard === index + 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="text-gray-600 space-y-3">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="w-5 h-5 text-red-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]"
                      >
                        Enroll Now
                      </a>
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] ${
                        hoveredCard === index + 3 ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-100"></div>
      </div>

      {/* IELTS Courses Section */}
      <div className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-16 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            IELTS Courses
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 max-w-2xl mx-auto">
            {[
              {
                title: 'One-Month Complete Course',
                shortDescription: 'A 4-week IELTS preparation course covering all modules with daily practice and mock tests.',
                fullDescription:
                  'The One-Month Complete Course for IELTS is a comprehensive 4-week program designed to help you achieve your target band score. Covering all four modules—Listening, Reading, Writing, and Speaking—this course offers daily practice sessions, expert strategies for each section, and multiple mock tests to simulate the real exam experience. With personalized feedback and band score improvement techniques, this course is perfect for learners of all levels aiming for success.',
                duration: '4 Weeks',
                price: '₹15,000',
                image: './images/IELTSComplete.png',
                features: ['All Modules Covered', 'Daily Practice', 'Mock Tests', 'Band Score Strategies'],
                level: 'All Levels',
              },
            ].map((course, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ff0000"
                className="transform transition-all duration-1000 ease-out"
              >
                <div
                  className={`relative bg-white border-2 border-transparent rounded-xl overflow-hidden shadow-lg transform transition-all duration-1000 ease-out delay-${
                    index * 200
                  } group animate-[zoom-in_1s_ease-out] ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  } ${hoveredCard === index + 4 ? 'scale-105 border-red-500/50 shadow-2xl z-10' : 'scale-100'}`}
                  onMouseEnter={() => handleCardHover(index + 4)}
                  onMouseLeave={handleCardLeave}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-600/30 to-red-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  ></div>
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      width="200"
                      height="300"
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                    <div className="text-gray-600 text-sm mb-4">
                      <p className={`${expandedCard === index + 4 ? 'line-clamp-none' : 'line-clamp-3'}`}>
                        {expandedCard === index + 4 ? course.fullDescription : course.shortDescription}
                      </p>
                      <button
                        onClick={() => toggleExpand(index + 4)}
                        className="text-red-600 font-medium mt-2 hover:underline focus:outline-none"
                      >
                        {expandedCard === index + 4 ? 'Read Less' : 'Read More'}
                      </button>
                    </div>
                    <div className="flex justify-between text-gray-700 mb-4 text-sm font-medium">
                      <span>{course.duration}</span>
                      <span>{course.price}</span>
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-xl p-6 transform transition-all duration-500 ${
                        hoveredCard === index + 4 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                      <ul className="text-gray-600 space-y-3">
                        {course.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="w-5 h-5 text-red-600 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]"
                      >
                        Enroll Now
                      </a>
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block text-center bg-gradient-to-r from-red-600 to-red-700 text-white font-medium text-sm py-2 px-4 rounded-full shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] ${
                        hoveredCard === index + 4 ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
      </div>

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
      <div className="bg-gray-100 py-24 relative">
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
      </div>

      {/* Call to Action Section */}
      <div className="bg-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 relative transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Ready to Start Your Journey?
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
          </h2>
          <p
            className={`text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto transform transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Enroll in one of our courses today and take the first step towards achieving your dream scores!
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] animate-[float_3s_ease-in-out_infinite] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Enroll Now via WhatsApp
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Sticky Quick Enroll Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] flex items-center gap-2 z-50 animate-[float_3s_ease-in-out_infinite]"
      >
        <svg
          className="w-6 h-6"
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
        </svg>
        Quick Enroll
      </a>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-red-500/20 rounded-sm rotate-45 animate-[float_12s_infinite]"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
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