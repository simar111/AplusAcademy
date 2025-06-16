import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-20 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Tagline with Enhanced Design */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-extrabold text-white mb-4 flex items-center">
              <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full mr-3 shadow-lg animate-pulse">A+</span>
              <span className="relative">
                Academy
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent rounded-full animate-[underline_3s_infinite]"></span>
              </span>
            </h2>
            <p className="text-gray-400 text-base font-light leading-relaxed">
              Your Dream Score Starts Here – Expert PTE & IELTS Coaching
            </p>
            {/* Trust Badges */}
            <div className="flex space-x-4 mt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-gray-200 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Certified
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-gray-200 flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>

          {/* Quick Links with Hover Effects */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="relative text-gray-400 hover:text-red-600 transition-all duration-300 group"
                  >
                    <span className="relative z-10">{link}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-500 ease-out"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information with Interactive Icons */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center group">
                <svg className="w-6 h-6 text-red-600 mr-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400 group-hover:text-white transition-colors duration-300">123 Education Lane, Mumbai, India</span>
              </li>
              <li className="flex items-center group">
                <svg className="w-6 h-6 text-red-600 mr-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="text-gray-400 group-hover:text-white transition-colors duration-300">+91 987-654-3210</a>
              </li>
              <li className="flex items-center group">
                <svg className="w-6 h-6 text-red-600 mr-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@aplusacademy.com" className="text-gray-400 group-hover:text-white transition-colors duration-300">info@aplusacademy.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media and Back to Top */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-xl font-semibold text-white mb-6 tracking-wide">Follow Us</h3>
            <div className="flex space-x-5 mb-8">
              {[
                { platform: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', url: 'https://facebook.com/aplusacademy' },
                { platform: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', url: 'https://twitter.com/aplusacademy' },
                { platform: 'Instagram', icon: 'M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm2 16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm4-6a1 1 0 100-2 1 1 0 000 2z', url: 'https://instagram.com/aplusacademy' },
                { platform: 'LinkedIn', icon: 'M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm-4 18h-2v-8h2v8zm-1-9a2 2 0 110-4 2 2 0 010 4zm8 9h-2v-4a2 2 0 00-4 0v4h-2v-8h2v1.5a4 4 0 014-2h2v8z', url: 'https://linkedin.com/company/aplusacademy' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] group"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                  <span className="absolute inset-0 rounded-full border-2 border-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </a>
              ))}
            </div>
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] group"
            >
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar with Enhanced Design */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <p>
              © {new Date().getFullYear()} A+ Academy. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="hover:text-red-600 transition-colors duration-300">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-red-600 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements with Glow Effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-glow"
            style={{
              background: `radial-gradient(circle, rgba(220, 38, 38, ${Math.random() * 0.3 + 0.1}), transparent)`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(220, 38, 38, 0.5)`,
            }}
          />
        ))}
      </div>

      {/* Subtle Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.15,
        }}
      ></div>

      {/* Custom Animation Keyframes */}
      <style>
        {`
          @keyframes float-glow {
            0% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; box-shadow: 0 0 15px rgba(220, 38, 38, 0.8); }
            100% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
          }
          @keyframes underline {
            0% { width: 0; }
            50% { width: 100%; }
            100% { width: 0; }
          }
          .animate-float-glow {
            animation: float-glow 10s infinite ease-in-out;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;