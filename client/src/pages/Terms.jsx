import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TermsOfService = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55], staggerChildren: 0.2 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const floatVariants = {
    animate: (i) => ({
      y: [0, -25 * Math.sin(i), 0],
      x: [0, 15 * Math.cos(i), 0],
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
      transition: { duration: 6 + i * 1.5, repeat: Infinity, ease: 'easeInOut' },
    }),
  };

  const sections = [
    { id: 'agreement', title: 'Agreement to Terms' },
    { id: 'use-of-services', title: 'Use of Our Services' },
    { id: 'account', title: 'Account Registration' },
    { id: 'payment', title: 'Payment Terms' },
    { id: 'content', title: 'Content Ownership and Use' },
    { id: 'prohibited', title: 'Prohibited Activities' },
    { id: 'termination', title: 'Termination' },
    { id: 'disclaimer', title: 'Disclaimer of Warranties' },
    { id: 'liability', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact-us', title: 'Contact Us' },
  ];

  return (
    <div className="relative py-32 bg-gradient-to-br from-white to-red-100/60 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-red-50/50 to-pink-100/50"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(25)].map((_, i) => {
          const colors = ['bg-red-600/20', 'bg-pink-400/15', 'bg-orange-400/10'];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const size = Math.random() * 20 + 10;
          return (
            <motion.div
              key={i}
              className={`absolute ${color} rounded-full`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={floatVariants}
              animate="animate"
              custom={i}
            />
          );
        })}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-red-200/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '-15%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-pink-200/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{ bottom: '-10%', right: '-5%' }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY4MEgwdjgwTTQwIDB2NDBoNDBWMEg0MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.68, -0.55, 0.265, 1.55] }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Service</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effective Date: June 17, 2025
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/30 max-w-3xl mx-auto p-8 sm:p-12"
        >
          {/* Table of Contents */}
          <motion.div variants={sectionVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
            <ul className="space-y-3">
              {sections.map((section) => (
                <motion.li
                  key={section.id}
                  whileHover={{ x: 10, color: '#ef4444' }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${section.id}`}
                    className="text-gray-700 hover:text-red-500 transition-colors duration-300"
                  >
                    {section.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Terms of Service Content */}
          <motion.div variants={sectionVariants} id="agreement" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-600">
              By accessing or using [Website URL] (the “Site”) or our services, you agree to be bound by these Terms of Service (“Terms”). If you do not agree, please do not use our Site or services.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="use-of-services" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Services</h2>
            <p className="text-gray-600">
              You may use our services, including NAATI, IELTS, and PTE preparation courses, only for lawful purposes and in accordance with these Terms. You agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Provide accurate information during registration.</li>
              <li>Not share your account credentials with others.</li>
              <li>Not use our services to harm others or violate any laws.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} id="account" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Registration</h2>
            <p className="text-gray-600">
              To access certain services, you must create an account. You are responsible for maintaining the confidentiality of your account and for all activities under your account.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="payment" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-600">
              All payments for courses are processed through secure third-party providers. Fees are non-refundable except as specified in our refund policy. You agree to pay all applicable taxes.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="content" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Ownership and Use</h2>
            <p className="text-gray-600">
              All course materials, including videos, quizzes, and documents, are owned by [Company Name] or our licensors. You may not reproduce, distribute, or create derivative works without permission.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="prohibited" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
            <p className="text-gray-600">
              You may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Attempt to gain unauthorized access to our systems.</li>
              <li>Use automated tools to scrape content.</li>
              <li>Engage in fraudulent activities or misrepresent your identity.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} id="termination" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-600">
              We may suspend or terminate your access to our services if you violate these Terms. You may terminate your account at any time by contacting us.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="disclaimer" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-600">
              Our services are provided “as is” without warranties of any kind. We do not guarantee specific results from using our courses.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="liability" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              To the fullest extent permitted by law, [Company Name] shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="governing-law" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of [Jurisdiction]. Any disputes will be resolved in the courts of [Jurisdiction].
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these Terms periodically. Changes will be posted on this page with an updated effective date.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="contact-us" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about these Terms, contact us at:
              <br />
              Email: aplusacademy48
              <br />
              Address:Auckland,New Zealand
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;