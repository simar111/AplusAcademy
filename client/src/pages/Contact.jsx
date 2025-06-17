import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import SocialMediaSection from '../components/Scocial';

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    setIsVisible(true);
    emailjs.init('JcFPbmJjYDF62gZPW');
  }, []);

  // Fixed input handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        'service_i1go3eh',
        'template_bfv8x57',
        formData,
        'JcFPbmJjYDF62gZPW'
      );
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Hero Section with Red Gradient */}
     <div className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden top-16">
  {/* Background Image with Parallax Effect */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      alt="Students learning"
      className="w-full h-full object-cover transform transition-transform duration-1000 ease-out animate-parallax"
    />
  </div>

  {/* Gradient Overlay with Animated Pulse */}
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/70 via-red-800/60 to-red-900/70 z-10 animate-gradient-pulse"></div>

  {/* Subtle Noise Texture Overlay */}
  <div
    className="absolute inset-0 z-10"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      opacity: 0.15,
    }}
  ></div>

  {/* Content Container */}
  <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Animated Heading with Staggered Text Reveal */}
    <h1
      className={`text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white mb-6 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <span className="inline-block animate-stagger-reveal delay-0">Let’s</span>{' '}
      <span className="inline-block text-red-300 animate-stagger-reveal delay-200">Connect</span>{' '}
      <span className="inline-block animate-stagger-reveal delay-400">at</span>{' '}
      <span className="inline-block animate-stagger-reveal delay-600">A+</span>{' '}
      <span className="inline-block animate-stagger-reveal delay-800">Academy</span>
      <div className="relative mt-4">
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
      </div>
    </h1>

    {/* Subheading with Fade-In Effect */}
    <p
      className={`text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-10 transition-all duration-1000 delay-1000 ease-out font-light tracking-wide leading-relaxed ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Your pathway to academic excellence starts with a meaningful conversation.
    </p>

    {/* Call to Action Button with Hover Effect */}
    <a
      href="#contact-form"
      className={`inline-block relative bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-12 py-5 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] group ${
        isVisible ? 'opacity-100' : 'opacity-0' 
      }`}
    >
      Get in Touch
      <span className="absolute inset-0 rounded-full border-2 border-red-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-md"></span>
    </a>

    {/* Social Media Quick Links (Floating Below CTA) */}
    <div
      className={`flex justify-center space-x-6 mt-10 transition-all duration-1000 delay-1200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {[
        { platform: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', url: 'https://www.facebook.com/share/1HUKGgGbmR/' },
        // { platform: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', url: 'https://twitter.com/aplusacademy' },
        { platform: 'Instagram', icon: 'M16 0H8a8 8 0 00-8 8v8a8 8 0 008 8h8a8 8 0 008-8V8a8 8 0 00-8-8zm2 16a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8a2 2 0 012 2v8zm-6-8a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm4-6a1 1 0 100-2 1 1 0 000 2z', url: 'https://www.instagram.com/a_plusacademy2025?igsh=MXY0d2RoNm44YW9jNQ==' },
      ].map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-gray-200 hover:text-white hover:bg-red-600 transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] hover:rotate-6"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={social.icon} />
          </svg>
        </a>
      ))}
    </div>
  </div>

  {/* Animated Floating Elements with Enhanced Effects */}
  <div className="absolute inset-0 z-10 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-float-glow"
        style={{
          background: `radial-gradient(circle, rgba(220, 38, 38, ${Math.random() * 0.3 + 0.1}), transparent)`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 12 + 8}s`,
          boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(220, 38, 38, 0.5)`,
        }}
      />
    ))}
  </div>

  {/* Interactive Floating Cards with Info Snippets */}
  <div className="absolute inset-0 z-15 pointer-events-none">
    {[
      { text: '98% Success Rate', left: '10%', top: '20%', delay: '0s' },
      { text: '5,000+ Students', left: '80%', top: '15%', delay: '1s' },
      { text: 'Expert Tutors', left: '15%', top: '70%', delay: '2s' },
    ].map((snippet, index) => (
      <div
        key={index}
        className="absolute bg-white/20 backdrop-blur-lg rounded-xl p-4 text-white text-sm font-medium animate-float-card"
        style={{
          left: snippet.left,
          top: snippet.top,
          animationDelay: snippet.delay,
          animationDuration: '15s',
        }}
      >
        <span className="relative z-10">{snippet.text}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-700/20 rounded-xl blur-sm animate-pulse"></div>
      </div>
    ))}
  </div>

  {/* Scroll Indicator at Bottom */}
  <div
    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    <div className="flex flex-col items-center">
      <span className="text-gray-200 text-sm mb-2 animate-pulse">Scroll to Explore</span>
      <div className="w-6 h-12 border-2 border-red-400/50 rounded-full flex justify-center p-1">
        <div className="w-2 h-4 bg-red-400 rounded-full animate-scroll-indicator"></div>
      </div>
    </div>
  </div>

  {/* Custom Styles and Animations */}
  <style>
    {`
      @keyframes parallax {
        0% { transform: scale(1.1) translateY(0); }
        100% { transform: scale(1.1) translateY(-30px); }
      }
      @keyframes gradient-pulse {
        0% { opacity: 0.7; }
        50% { opacity: 0.9; }
        100% { opacity: 0.7; }
      }
      @keyframes stagger-reveal {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes float-glow {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
        50% { transform: translateY(-20px) translateX(10px); opacity: 1; box-shadow: 0 0 15px rgba(220, 38, 38, 0.8); }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
      }
      @keyframes float-card {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        50% { transform: translateY(-30px) rotate(5deg); opacity: 0.9; }
        90% { opacity: 1; }
        100% { transform: translateY(0) rotate(0deg); opacity: 0; }
      }
      @keyframes scroll-indicator {
        0% { transform: translateY(0); opacity: 1; }
        50% { transform: translateY(10px); opacity: 0.5; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes underline {
        0% { width: 0; }
        50% { width: 100%; }
        100% { width: 0; }
      }
      .animate-parallax {
        animation: parallax 10s infinite alternate ease-in-out;
      }
      .animate-gradient-pulse {
        animation: gradient-pulse 8s infinite ease-in-out;
      }
      .animate-stagger-reveal {
        animation: stagger-reveal 0.8s ease-out forwards;
      }
      .animate-float-glow {
        animation: float-glow 10s infinite ease-in-out;
      }
      .animate-float-card {
        animation: float-card 15s infinite ease-in-out;
      }
      .animate-scroll-indicator {
        animation: scroll-indicator 2s infinite ease-in-out;
      }
    `}
  </style>
</div>

      {/* Contact Information - Red & White Cards */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 overflow-hidden top-16">
  {/* Gradient Background with Subtle Animation */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 z-0 animate-gradient-pulse"></div>

  {/* Subtle Noise Texture Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      opacity: 0.15,
    }}
  ></div>

  {/* Floating Decorative Elements */}
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
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 12 + 8}s`,
          boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(220, 38, 38, 0.5)`,
        }}
      />
    ))}
  </div>

  {/* Section Heading with Staggered Animation */}
  <h2
    className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center mb-20 transition-all duration-1000 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    <span className="inline-block animate-stagger-reveal delay-0">Contact</span>{' '}
    <span className="inline-block animate-stagger-reveal delay-200 text-red-600">Information</span>
    <div className="relative mt-4">
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
    </div>
  </h2>

  {/* Contact Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
    {[
      {
        icon: (
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Our Address",
        content: "Auckland, New Zealand",
        link: "https://maps.google.com/?q=Auckland,New Zealand",
      },
      {
        icon: (
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        title: "Phone Number",
        content: "+64 20 4034 1907",
        link: "tel:+642040341907",
      },
      {
        icon: (
          <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: "Email Address",
        content: "aplusacademy48@gmail.com",
        link: "mailto:aplusacademy48@gmail.com",
      },
    ].map((info, index) => (
      <div
        key={index}
        className={`relative bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 transition-all duration-500 ease-out delay-${
          index * 200
        } hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] group ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      >
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-red-600/20 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Card Content */}
        <div className="relative p-10 text-center">
          {/* Icon with Pulse Animation */}
          <div className="w-16 h-16 mx-auto bg-red-50/50 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300 animate-pulse-slow">
            {info.icon}
          </div>
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide group-hover:text-red-600 transition-colors duration-300">
            {info.title}
          </h3>
          {/* Content with Clickable Link */}
          <a
            href={info.link}
            target={info.title === "Our Address" ? "_blank" : "_self"}
            rel={info.title === "Our Address" ? "noopener noreferrer" : ""}
            className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300"
          >
            {info.content}
          </a>
        </div>

        {/* Glowing Border Effect on Hover */}
        <div className="absolute inset-0 border-2 border-red-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow-border"></div>
      </div>
    ))}
  </div>

  {/* Additional Info Badges */}
  <div
    className={`flex justify-center space-x-6 mt-16 transition-all duration-1000 delay-800 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
  >
    {[
      { text: "Available 24/7", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
      { text: "Quick Response", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    ].map((badge, index) => (
      <div
        key={index}
        className="flex items-center bg-white/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/40 hover:bg-white/50 transition-all duration-300"
      >
        <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={badge.icon} />
        </svg>
        <span className="text-gray-800 font-medium">{badge.text}</span>
      </div>
    ))}
  </div>

  {/* Custom Animation Keyframes */}
  <style>
    {`
      @keyframes gradient-pulse {
        0% { opacity: 0.8; }
        50% { opacity: 1; }
        100% { opacity: 0.8; }
      }
      @keyframes float-glow {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
        50% { transform: translateY(-20px) translateX(10px); opacity: 1; box-shadow: 0 0 15px rgba(220, 38, 38, 0.8); }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
      }
      @keyframes stagger-reveal {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glow-border {
        0% { border-color: rgba(220, 38, 38, 0.3); box-shadow: 0 0 5px rgba(220, 38, 38, 0.3); }
        50% { border-color: rgba(220, 38, 38, 0.6); box-shadow: 0 0 15px rgba(220, 38, 38, 0.6); }
        100% { border-color: rgba(220, 38, 38, 0.3); box-shadow: 0 0 5px rgba(220, 38, 38, 0.3); }
      }
      @keyframes pulse-slow {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      @keyframes underline {
        0% { width: 0; }
        50% { width: 100%; }
        100% { width: 0; }
      }
      .animate-gradient-pulse {
        animation: gradient-pulse 8s infinite ease-in-out;
      }
      .animate-float-glow {
        animation: float-glow 10s infinite ease-in-out;
      }
      .animate-stagger-reveal {
        animation: stagger-reveal 0.8s ease-out forwards;
      }
      .animate-glow-border {
        animation: glow-border 3s infinite ease-in-out;
      }
      .animate-pulse-slow {
        animation: pulse-slow 2s infinite ease-in-out;
      }
    `}
  </style>
</div>
      {/* Contact Form Section */}
     <div className="relative bg-gradient-to-br from-red-50 to-white py-32 overflow-hidden">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 z-0 animate-gradient-pulse"></div>

  {/* Subtle Noise Texture Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      opacity: 0.15,
    }}
  ></div>

  {/* Floating Decorative Elements */}
  <div className="absolute inset-0 z-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-float-glow"
        style={{
          background: `radial-gradient(circle, rgba(220, 38, 38, ${Math.random() * 0.3 + 0.1}), transparent)`,
          width: `${Math.random() * 10 + 5}px`,
          height: `${Math.random() * 10 + 5}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 12 + 8}s`,
          boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(220, 38, 38, 0.5)`,
        }}
      />
    ))}
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      {/* Heading with Staggered Animation */}
      <h2
        className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 text-center mb-4 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="inline-block animate-stagger-reveal delay-0">Send</span>{' '}
        <span className="inline-block animate-stagger-reveal delay-200">Us</span>{' '}
        <span className="inline-block animate-stagger-reveal delay-400 text-red-600">a Message</span>
        <div className="relative mt-4">
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-48 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_2s_ease-in-out_infinite]"></span>
        </div>
      </h2>
      <p
        className={`text-lg lg:text-xl text-gray-600 text-center mb-12 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        Have questions? We're here to help! Fill out the form below and we'll get back to you soon.
      </p>

      {/* Form Container with Glassmorphism */}
      <div
        id="contact-form"
        className={`relative bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 border-2 border-red-600/30 rounded-3xl animate-glow-border"></div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Name Field */}
            <div className="relative group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-red-600"
              >
                Your Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all duration-300 peer"
                  placeholder="John Doe"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/10 to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-red-600"
              >
                Email Address *
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all duration-300 peer"
                  placeholder="your@email.com"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/10 to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Subject Field */}
          <div className="mt-8 relative group">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-red-600"
            >
              Subject *
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all duration-300 peer"
                placeholder="What's this about?"
                required
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/10 to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-8 relative group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2 transition-all duration-300 group-focus-within:text-red-600"
            >
              Your Message *
            </label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-3 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white transition-all duration-300 peer"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-600/10 to-transparent opacity-0 peer-focus:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`relative w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.7)] group ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <span className="relative z-10">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 animate-spin mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending your message...
                  </span>
                ) : (
                  'Send Message'
                )}
              </span>
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></span>
            </button>
          </div>

          {/* Form Status Message */}
          {formStatus && (
            <div
              className={`mt-6 p-4 rounded-lg text-center transition-all duration-500 ${
                formStatus.includes('successfully')
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              } animate-[fadeIn_0.5s_ease-out]`}
            >
              {formStatus}
            </div>
          )}
        </form>
      </div>

      {/* Additional Info Badges */}
      <div
        className={`flex justify-center space-x-6 mt-12 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {[
          { text: "Response Within 24 Hours", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          { text: "Secure Submission", icon: "M12 11c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4zm-6 0c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm-6 0c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H2a2 2 0 01-2-2v-4z" },
        ].map((badge, index) => (
          <div
            key={index}
            className="flex items-center bg-white/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-white/40 hover:bg-white/50 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={badge.icon} />
            </svg>
            <span className="text-gray-800 font-medium">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Custom Animation Keyframes */}
  <style>
    {`
      @keyframes gradient-pulse {
        0% { opacity: 0.7; }
        50% { opacity: 1; }
        100% { opacity: 0.7; }
      }
      @keyframes float-glow {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
        50% { transform: translateY(-20px) translateX(10px); opacity: 1; box-shadow: 0 0 15px rgba(220, 38, 38, 0.8); }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
      }
      @keyframes stagger-reveal {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glow-border {
        0% { border-color: rgba(220, 38, 38, 0.3); box-shadow: 0 0 5px rgba(220, 38, 38, 0.3); }
        50% { border-color: rgba(220, 38, 38, 0.6); box-shadow: 0 0 15px rgba(220, 38, 38, 0.6); }
        100% { border-color: rgba(220, 38, 38, 0.3); box-shadow: 0 0 5px rgba(220, 38, 38, 0.3); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(10px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes underline {
        0% { width: 0; }
        50% { width: 100%; }
        100% { width: 0; }
      }
      .animate-gradient-pulse {
        animation: gradient-pulse 8s infinite ease-in-out;
      }
      .animate-float-glow {
        animation: float-glow 10s infinite ease-in-out;
      }
      .animate-stagger-reveal {
        animation: stagger-reveal 0.8s ease-out forwards;
      }
      .animate-glow-border {
        animation: glow-border 3s infinite ease-in-out;
      }
    `}
  </style>
</div>

      {/* FAQ Section */}
    <div className="relative bg-gradient-to-br from-gray-50 to-white py-36 overflow-hidden">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-transparent to-red-600/15 z-0 animate-gradient-pulse"></div>

  {/* Subtle Noise Texture Overlay */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      opacity: 0.12,
    }}
  ></div>

  {/* Animated Wave Effect at the Top */}
  <div className="absolute top-0 left-0 w-full h-24 overflow-hidden z-0">
    <svg className="w-full h-full text-red-600/20" preserveAspectRatio="none" viewBox="0 0 1440 100">
      <path
        className="animate-wave"
        fill="currentColor"
        d="M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z"
      />
    </svg>
  </div>

  {/* Floating Decorative Elements with Enhanced Glow */}
  <div className="absolute inset-0 z-0">
    {[...Array(25)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full animate-float-glow"
        style={{
          background: `radial-gradient(circle, rgba(220, 38, 38, ${Math.random() * 0.4 + 0.2}), transparent)`,
          width: `${Math.random() * 12 + 6}px`,
          height: `${Math.random() * 12 + 6}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${Math.random() * 10 + 6}s`,
          boxShadow: `0 0 ${Math.random() * 12 + 8}px rgba(220, 38, 38, ${Math.random() * 0.5 + 0.5})`,
        }}
      />
    ))}
  </div>

  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center mb-24">
      {/* Heading with Smoother Staggered Animation */}
      <h2
        className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <span className="inline-block animate-stagger-reveal delay-0">Frequently</span>{' '}
        <span className="inline-block animate-stagger-reveal delay-300">Asked</span>{' '}
        <span className="inline-block animate-stagger-reveal delay-600 text-red-600">Questions</span>
        <div className="relative mt-4">
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-56 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-[underline_3s_ease-in-out_infinite]"></span>
        </div>
      </h2>
      <p
        className={`text-lg lg:text-xl text-gray-600 transition-all duration-1200 delay-800 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        Can't find what you're looking for?{' '}
        <a href="#contact-form" className="text-red-600 hover:text-red-700 transition-colors duration-300 underline decoration-wavy">
          Contact us directly.
        </a>
      </p>
    </div>

    {/* FAQ Accordion */}
    <div className="max-w-3xl mx-auto space-y-8 relative z-10">
      {[
        {
          question: "What courses do you offer?",
          answer: "We offer comprehensive coaching for PTE and IELTS, tailored to help you achieve your target scores.",
        },
        {
          question: "How can I schedule a consultation?",
          answer: "You can schedule a free consultation by filling out our contact form or calling our office.",
        },
        {
          question: "Do you offer online classes?",
          answer: "Yes! We provide both online and in-person classes to accommodate different learning preferences.",
        },
        {
          question: "What is your success rate?",
          answer: "Our students have a 98% success rate in achieving their target scores.",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className={`relative bg-white/30 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] delay-${
            index * 150
          } hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] group ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-red-600/25 to-red-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] rounded-2xl"></div>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 border-2 border-red-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] animate-glow-border"></div>

          {/* FAQ Button */}
          <button
            onClick={() => toggleFAQ(index)}
            className="relative w-full px-6 py-5 text-left flex justify-between items-center bg-transparent hover:bg-white/15 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <span className="text-lg font-medium text-gray-800 group-hover:text-red-600 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
              {faq.question}
            </span>
            <svg
              className={`w-5 h-5 text-red-600 transform transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
                expandedFAQ === index ? 'rotate-180' : ''
              } group-hover:scale-125 group-hover:-rotate-12`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* FAQ Answer */}
          <div
            className={`px-6 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
              expandedFAQ === index ? 'max-h-96 py-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-600 leading-relaxed animate-[fadeIn_0.7s_ease-out]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Call to Action Button */}
    <div
      className={`flex justify-center mt-16 transition-all duration-1200 delay-1200 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <a
        href="#contact-form"
        className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full shadow-xl transition-all duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:scale-110 hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] group"
      >
        <span className="relative z-10">Ask a Question</span>
        <svg
          className="w-5 h-5 ml-2 transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-2 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] blur-md"></span>
        <span className="absolute inset-0 rounded-full border-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-glow-border"></span>
      </a>
    </div>
  </div>

  {/* Custom Animation Keyframes */}
  <style>
    {`
      @keyframes gradient-pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      @keyframes float-glow {
        0% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
        50% { transform: translateY(-25px) translateX(15px); opacity: 1; box-shadow: 0 0 20px rgba(220, 38, 38, 0.9); }
        100% { transform: translateY(0) translateX(0); opacity: 0.7; box-shadow: 0 0 5px rgba(220, 38, 38, 0.5); }
      }
      @keyframes stagger-reveal {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes glow-border {
        0% { border-color: rgba(220, 38, 38, 0.4); box-shadow: 0 0 5px rgba(220, 38, 38, 0.4); }
        50% { border-color: rgba(220, 38, 38, 0.7); box-shadow: 0 0 20px rgba(220, 38, 38, 0.7); }
        100% { border-color: rgba(220, 38, 38, 0.4); box-shadow: 0 0 5px rgba(220, 38, 38, 0.4); }
      }
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(15px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes underline {
        0% { width: 0; }
        50% { width: 100%; }
        100% { width: 0; }
      }
      @keyframes wave {
        0% { d: path('M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z'); }
        50% { d: path('M0,40 C360,60 720,80 1080,40 C1260,20 1440,60 1440,60 L1440,100 L0,100 Z'); }
        100% { d: path('M0,50 C360,80 720,20 1080,50 C1260,70 1440,40 1440,40 L1440,100 L0,100 Z'); }
      }
      .animate-gradient-pulse {
        animation: gradient-pulse 10s infinite ease-in-out;
      }
      .animate-float-glow {
        animation: float-glow 12s infinite ease-in-out;
      }
      .animate-stagger-reveal {
        animation: stagger-reveal 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }
      .animate-glow-border {
        animation: glow-border 4s infinite ease-in-out;
      }
      .animate-wave {
        animation: wave 8s infinite ease-in-out;
      }
    `}
  </style>
</div>

      {/* Social Media Section
     <div className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
  {/* === Background Effects === */}
  {/* Floating gradient blobs */}
  {/* <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-400/10 rounded-full filter blur-3xl animate-float1"></div>
  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-400/10 rounded-full filter blur-3xl animate-float2"></div>
   */}
  {/* Subtle grid texture */}
  {/* <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div> */}

  {/* === Content === */}
  {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-3xl mx-auto text-center"> */}
      {/* Animated Heading */}
      {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600 mb-4">
        Follow Us
      </h2> */}
      
      {/* Description with underline effect */}
      {/* <p className="text-lg text-gray-600 mb-12 relative inline-block">
        <span className="relative z-10">Stay connected for updates & announcements</span>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-300 to-blue-300"></span>
      </p> */}
      
      {/* Social Icons (Vibrant & Animated) */}
      {/* <div className="flex justify-center flex-wrap gap-6">
        {[
          { 
            name: 'Facebook', 
            icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            ),
            color: 'bg-blue-600 hover:bg-blue-700',
            shadow: 'hover:shadow-blue-500/30'
          },
          { 
            name: 'Twitter (X)', 
            icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            ),
            color: 'bg-black hover:bg-gray-800',
            shadow: 'hover:shadow-gray-800/30'
          },
          { 
            name: 'Instagram', 
            icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            ),
            color: 'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
            shadow: 'hover:shadow-purple-500/30'
          },
          { 
            name: 'LinkedIn', 
            icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            ),
            color: 'bg-blue-700 hover:bg-blue-800',
            shadow: 'hover:shadow-blue-700/30'
          },
          { 
            name: 'YouTube', 
            icon: (
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            ),
            color: 'bg-red-600 hover:bg-red-700',
            shadow: 'hover:shadow-red-600/30'
          }
        ].map((social, index) => (
          <a
            key={index}
            href="#"
            className={`w-14 h-14 ${social.color} rounded-xl flex items-center justify-center text-white shadow-md hover:shadow-lg ${social.shadow} transition-all duration-300 hover:-translate-y-1.5 hover:scale-105`}
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div> */}

  {/* === Animations === */}
  <style jsx global>{`
    @keyframes float1 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(-20px, -20px) rotate(5deg); }
    }
    @keyframes float2 {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      50% { transform: translate(20px, 20px) rotate(-5deg); }
    }
    .animate-float1 { animation: float1 15s ease-in-out infinite; }
    .animate-float2 { animation: float2 18s ease-in-out infinite; }
  `}</style>
{/* </div> */} 
<SocialMediaSection />

      {/* Floating particles animation */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;