import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const SocialMediaSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.68, -0.55, 0.265, 1.55], staggerChildren: 0.15 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -30 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
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

  const socialLinks = [
    // {
    //   name: 'Email',
    //   icon: (
    //     <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
    //       <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5z" />
    //     </svg>
    //   ),
    //   color: 'bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700',
    //   shadow: 'hover:shadow-red-500/40',
    //   href: 'mailto:contact@example.com',
    // },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      color: 'bg-gradient-to-br from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
      shadow: 'hover:shadow-purple-500/40',
      href: 'https://www.instagram.com/a_plusacademy2025?igsh=MXY0d2RoNm44YW9jNQ==',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
      color: 'bg-blue-600 hover:bg-blue-700',
      shadow: 'hover:shadow-blue-600/40',
      href: 'https://www.facebook.com/share/1HUKGgGbmR/',
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'bg-green-500 hover:bg-green-600',
      shadow: 'hover:shadow-green-500/40',
      href: 'https://wa.me/+917355825232?text=Hello%20there!',
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white to-red-100/60 py-32 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white via-red-50/50 to-pink-100/50"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => {
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

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg4MHY4MEgwdjgwTTQwIDB2NDBoNDBWMEg0MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] bg-[length:40px_40px]" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            variants={iconVariants}
            className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500 mb-6"
          >
            Connect With Us
          </motion.h2>
          <motion.p
            variants={iconVariants}
            className="text-lg text-gray-600 mb-12 relative inline-block"
          >
            <span className="relative z-10">Stay updated with our latest news and announcements</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-pink-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.p>

          {/* Social Icons */}
          <motion.div
            className="flex justify-center flex-wrap gap-8"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                glareEnable={true}
                glareMaxOpacity={0.6}
                glareColor="#ffcccc"
                className="transform-gpu"
              >
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  className={`relative w-16 h-16 ${social.color} rounded-xl flex items-center justify-center text-white shadow-xl ${social.shadow} transition-all duration-500 group`}
                  aria-label={social.name}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow: '0 0 30px rgba(255,105,135,0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full shadow-md"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </motion.a>
              </Tilt>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialMediaSection;