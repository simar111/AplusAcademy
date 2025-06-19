import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PrivacyPolicy = () => {
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
    { id: 'introduction', title: 'Introduction' },
    { id: 'information-collected', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'information-sharing', title: 'Information Sharing' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'cookies', title: 'Cookies and Tracking Technologies' },
    { id: 'security', title: 'Data Security' },
    { id: 'third-party-links', title: 'Third-Party Links' },
    { id: 'childrens-privacy', title: "Children's Privacy" },
    { id: 'changes', title: 'Changes to This Privacy Policy' },
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
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">Policy</span>
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

          {/* Privacy Policy Content */}
          <motion.div variants={sectionVariants} id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600">
              Welcome to [Company Name] (“we,” “us,” or “our”). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Website URL] (the “Site”) or use our services, including NAATI, IELTS, and PTE preparation courses.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="information-collected" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and payment information provided when you enroll in courses or contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on the Site, collected via cookies and analytics tools.
              </li>
              <li>
                <strong>Course Interaction Data:</strong> Progress, quiz results, and feedback submitted during course participation.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} id="how-we-use" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Provide and improve our services, including course delivery and customer support.</li>
              <li>Process payments and manage enrollments.</li>
              <li>Send promotional emails about new courses or offers (you can opt-out anytime).</li>
              <li>Analyze Site usage to enhance user experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </motion.div>

          <motion.div variants={sectionVariants} id="information-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors like payment processors (e.g., Stripe) and analytics providers (e.g., Google Analytics).
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to protect our rights.
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
              </li>
            </ul>
            <p className="text-gray-600 mt-4">
              We do not sell your personal information to third parties.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="your-rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt-out of marketing communications.</li>
              <li>Request data portability.</li>
              <li>Restrict or object to certain data processing activities.</li>
            </ul>
            <p className="text-gray-600 mt-4">
              To exercise these rights, contact us at [Contact Email].
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="cookies" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-600">
              We use cookies and similar technologies to enhance your experience. You can manage cookie preferences through your browser settings. For more details, see our [Cookie Policy Link].
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="third-party-links" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600">
              Our Site may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="childrens-privacy" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not directed to individuals under 13. We do not knowingly collect personal information from children. If we become aware of such data, we will delete it.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.
            </p>
          </motion.div>

          <motion.div variants={sectionVariants} id="contact-us" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, contact us at:
              <br />
              Email: aplusacademy48@gmail.com
              <br />
              Address: Auckland,New Zealand
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;