import React, { useEffect, useState, useRef, lazy, Suspense, memo } from 'react';
import PTECourses from '../components/PteCourse';
import HeroSection from '../components/CourseHero';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy-load NAATIandIELTSCourses
const NAATIandIELTSCourses = lazy(() =>
  import('../components/In').catch((err) => {
    console.error('Failed to load NAATIandIELTSCourses:', err);
    return { default: () => <div className="text-red-600 p-4">Error loading NAATI & IELTS Courses</div> };
  })
);

const ErrorFallback = ({ error }) => (
  <div className="text-red-600 p-4 text-center">
    Error: {error.message}
  </div>
);

const Courses = memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ students: 0, successRate: 0, courses: 0 });
  const pteCoursesRef = useRef(null);

  // Optimize stats animation
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setStats((prev) => {
        if (prev.students >= 5000 && prev.successRate >= 98 && prev.courses >= 3) {
          clearInterval(interval);
          return prev;
        }
        return {
          students: prev.students < 5000 ? prev.students + 100 : 5000,
          successRate: prev.successRate < 98 ? prev.successRate + 2 : 98,
          courses: prev.courses < 3 ? prev.courses + 1 : 3,
        };
      });
    }, 100); // Slower interval
    return () => clearInterval(interval);
  }, []);

  const whatsappLink = 'https://wa.me/+917355825232?text=I%20am%20interested%20in%20enrolling%20in%20a%20course%20at%20A%2B%20Academy!';
  const emailLink = 'mailto:aplusacademy48@gmail.com';

  const scrollToPTECourses = () => {
    pteCoursesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HeroSection scrollToPTECourses={scrollToPTECourses} />

        <div ref={pteCoursesRef} id="pte-courses">
          <PTECourses />
        </div>

        <Suspense
          fallback={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="h-8 w-48 mx-auto bg-gray-200/50 backdrop-blur-md rounded-xl animate-pulse"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 animate-pulse">
                    <div className="h-60 w-full bg-gray-200/50 rounded-t-2xl"></div>
                    <div className="mt-4 h-6 w-32 bg-gray-200/50 rounded-xl"></div>
                    <div className="mt-2 h-4 w-64 bg-gray-200/50 rounded-xl"></div>
                    <div className="mt-4 h-10 w-36 bg-gray-200/50 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <NAATIandIELTSCourses />
        </Suspense>

        {/* Course Benefits Section */}
        <div className="bg-gray-100 py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12 transform transition-opacity duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Course Benefits
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-red-600 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7h2m2 0h2m-6 8h4m-2-2v4" />
                    </svg>
                  ),
                  title: 'Expert Instructors',
                  content: 'Learn from certified professionals with years of experience in PTE, NAATI, and IELTS coaching.',
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-9 5h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Personalized Learning',
                  content: 'Customized study plans and one-on-one feedback to help you succeed.',
                },
                {
                  icon: (
                    <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Proven Results',
                  content: '98% of our students achieve their target scores with our proven methods.',
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{benefit.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stats Section */}
        <div className="bg-white py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12 transform transition-opacity duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Our Success Stats
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-1 bg-red-600 rounded-full" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Students Trained', value: stats.students },
                { label: 'Success Rate', value: `${stats.successRate}%` },
                { label: 'Courses Offered', value: stats.courses },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <h3 className="text-3xl font-bold text-red-600 text-center mb-2">{stat.value}</h3>
                  <p className="text-gray-600 text-center text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-200 py-16">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-6 transition-opacity duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Launch Your Success Journey
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-32 h-1 bg-red-500 rounded-full" />
            </h2>
            <p
              className={`text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto transition-opacity duration-700 delay-100 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Join our expert-led PTE & IELTS courses and unlock your potential with personalized coaching tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-medium text-base px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                aria-label="Enroll via WhatsApp"
              >
                Enroll Now via WhatsApp
              </a>
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent border-2 border-red-500 text-red-500 font-medium text-base px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                aria-label="Contact via Email"
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
            className="fixed bottom-6 right-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center gap-2 z-50"
            aria-label="Quick Enroll via WhatsApp"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v2a2 2 0 002 2h10a2 2 0 002-2v-2h-4m-6-2a4 4 0 004-4V6a4 4 0 00-8 0v4a4 4 0 004 4z"
              />
            </svg>
            Quick Enroll
          </a>

          {/* Reduced Particles */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-red-400/10 rounded-full"
                style={{
                  width: `${Math.random() * 8 + 4}px`,
                  height: `${Math.random() * 8 + 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0); }
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-pulse,
              [class*='animate-'],
              [class*='group-hover'],
              [class*='hover:scale-'],
              [class*='transition-all'],
              [class*='transition-transform'] {
                animation: none !important;
                transition: none !important;
                transform: none !important;
              }
            }
          `}
        </style>
      </ErrorBoundary>
    </section>
  );
});

export default Courses;