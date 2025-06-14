import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

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

  // Trigger animations on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // EmailJS sending logic
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_USER_ID' // Replace with your EmailJS User ID
      );
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle FAQ expansion
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Hero Section (Revamped) */}
      <div className="relative h-[70vh] flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/80 z-10"></div>
        <img
          src="https://via.placeholder.com/1920x1080?text=Contact+Us+Background"
          alt="Contact Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 transform transition-all duration-1000 ease-out animate-[fadeIn_1s_ease-out] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Let’s <span className="text-red-600">Connect</span> at A+ Academy
          </h1>
          <p
            className={`text-lg sm:text-xl text-gray-300 mb-8 transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We’re here to help you achieve your goals. Reach out to us today!
          </p>
          <a
            href="#contact-form"
            className={`inline-block bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] animate-[bounce_2s_infinite] ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Contact Us Now
          </a>
        </div>
        {/* Particles in Hero */}
        <div className="absolute inset-0 z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-red-600/20 rounded-full animate-[float_10s_infinite]"
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: (
                <svg className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              title: "Our Address",
              content: "123 Education Lane, Mumbai, India",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              title: "Phone Number",
              content: "+91 987-654-3210",
            },
            {
              icon: (
                <svg className="w-12 h-12 text-red-600 transition-transform duration-500 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              title: "Email Address",
              content: "info@aplusacademy.com",
            },
          ].map((info, index) => (
            <div
              key={index}
              className={`relative bg-white/95 backdrop-blur-xl rounded-2xl p-8 shadow-xl transform transition-all duration-1000 ease-out delay-${
                index * 200
              } hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] group ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-600/15 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">{info.title}</h3>
              <p className="text-gray-600 text-center">{info.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Send Message Section (Enhanced) */}
      <div className="bg-gradient-to-br from-red-600/10 via-white to-red-600/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Send Us a Message
          </h2>
          <div
            className={`max-w-3xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-red-600/30 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
            id="contact-form"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full bg-gray-50/80 border border-gray-200 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-full bg-gray-50/80 border border-gray-200 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-full bg-gray-50/80 border border-gray-200 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
                  rows="6"
                  placeholder="Your Message"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`relative bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 animate-spin mr-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <span className="absolute inset-0 rounded-full border-2 border-red-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    </>
                  )}
                </button>
              </div>
              {formStatus && (
                <p
                  className={`text-center mt-4 transform transition-all duration-500 ${
                    formStatus.includes('successfully')
                      ? 'text-green-600 animate-[bounce_1s_ease-out]'
                      : 'text-red-600 animate-[shake_0.5s_ease-out]'
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Office Hours Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Office Hours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
            { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
            { day: 'Sunday', hours: 'Closed' },
            { day: 'Holidays', hours: 'Closed' },
          ].map((schedule, index) => (
            <div
              key={index}
              className={`relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl transform transition-all duration-1000 ease-out delay-${
                index * 200
              } hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-red-600/15 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{schedule.day}</h3>
              <p className="text-gray-600 text-center">{schedule.hours}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-gradient-to-br from-red-600/5 via-white to-red-600/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                question: "What courses do you offer?",
                answer: "We offer comprehensive coaching for PTE and IELTS, tailored to help you achieve your target scores.",
              },
              {
                question: "How can I schedule a consultation?",
                answer: "You can schedule a consultation by filling out the contact form above, and our team will reach out to you within 24 hours.",
              },
              {
                question: "Do you offer online classes?",
                answer: "Yes, we provide both online and in-person classes to suit your schedule and preferences.",
              },
              {
                question: "What is the success rate of your students?",
                answer: "Our students have a 98% success rate in achieving their target scores in PTE and IELTS.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl transform transition-all duration-1000 ease-out delay-${
                  index * 200
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-red-600 transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFAQ === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2
          className={`text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Follow Us
        </h2>
        <div
          className={`flex justify-center space-x-6 transform transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
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
              className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-600 transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.7)] hover:rotate-6"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={social.icon} />
              </svg>
            </a>
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
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
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

export default ContactUs;