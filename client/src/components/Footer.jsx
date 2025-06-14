import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4 flex items-center">
              <span className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-full mr-3">A+</span>
               Academy
            </h2>
            <p className="text-gray-400 text-sm">
              Your Dream Score Starts Here – Expert PTE & IELTS Coaching
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Courses', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Education Lane, Mumbai, India</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 987-654-3210</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@aplusacademy.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup and Social Media */}
          <div
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
            <div className="mb-6">
              <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter for updates and tips!</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-full bg-gray-800 text-gray-300 border border-gray-700 focus:outline-none focus:border-red-600 transition-colors duration-300"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              {[
                { platform: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { platform: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { platform: 'Instagram', icon: 'M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm2 16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm4-6a1 1 0 100-2 1 1 0 000 2z' },
                { platform: 'LinkedIn', icon: 'M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm-4 18h-2v-8h2v8zm-1-9a2 2 0 110-4 2 2 0 010 4zm8 9h-2v-4a2 2 0 00-4 0v4h-2v-8h2v1.5a4 4 0 014-2h2v8z' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={`https://${social.platform.toLowerCase()}.com/aplusacademy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(220,38,38,0.7)]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} A+ Academy. All rights reserved.
          </p>
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
          @keyframes float {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-15px) translateX(5px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;