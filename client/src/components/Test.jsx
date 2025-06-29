import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const swiperRef = useRef(null);
  const arrowsRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} bg-gradient-to-r from-red-600 to-amber-500 w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"></span>`;
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });

    // GSAP Animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo(
      arrowsRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    )
    .fromTo(
      '.swiper-slide',
      { opacity: 0, y: 50, scale: 0.9, stagger: 0.2 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.5)' },
      '-=0.4'
    );

    // Hover effect for cards
    gsap.utils.toArray('.testimonial-card').forEach(card => {
      gsap.to(card.querySelector('img'), {
        y: -5,
        duration: 0.3,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    return () => {
      swiper.destroy();
      tl.kill();
    };
  }, []);

  return (
    <>
      <style>
        {`
          .swiper-button-prev:after,
          .swiper-button-next:after {
            content: '' !important;
          }

          .swiper-button-prev,
          .swiper-button-next {
            width: 56px !important;
            height: 56px !important;
            border-radius: 50% !important;
            background: linear-gradient(135deg, #DC2626 0%, #EA580C 100%) !important;
            transition: all 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6) !important;
            box-shadow: 0 8px 24px rgba(220, 38, 38, 0.3) !important;
            position: relative !important;
            margin-top: 0 !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255,255,255,0.2);
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
            transform: translateY(-3px) scale(1.05) !important;
            box-shadow: 0 12px 32px rgba(220, 38, 38, 0.4) !important;
            background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%) !important;
          }

          .swiper-button-prev::before,
          .swiper-button-next::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            padding: 1px;
            background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }

          .swiper-slide {
            opacity: 0.6 !important;
            transition: all 0.5s cubic-bezier(0.5, 0, 0, 1) !important;
            transform-origin: center bottom;
          }

          .swiper-slide-active {
            opacity: 1 !important;
            border-color: rgb(220 38 38 / var(--tw-border-opacity)) !important;
            transform: translateY(-10px) scale(1.02) !important;
            z-index: 1;
          }

          .testimonial-card {
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
            box-shadow: 0 12px 24px -12px rgba(0, 0, 0, 0.1) !important;
            background: linear-gradient(145deg, #ffffff, #fef2f2) !important;
            position: relative;
            overflow: hidden;
          }

          .testimonial-card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(220,38,38,0.03) 0%, rgba(234,88,12,0.05) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .testimonial-card:hover {
            transform: translateY(-12px) !important;
            box-shadow: 0 24px 48px -12px rgba(220, 38, 38, 0.2) !important;
          }

          .testimonial-card:hover::before {
            opacity: 1;
          }

          .swiper-pagination {
            position: relative !important;
            margin-top: 32px !important;
            display: flex !important;
            justify-content: center !important;
            gap: 12px !important;
          }

          .stars svg {
            transition: transform 0.3s ease, fill 0.3s ease !important;
            filter: drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3));
          }

          .stars svg:hover {
            transform: scale(1.3) !important;
            fill: #F59E0B !important;
          }

          .testimonial-image {
            position: relative;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .testimonial-image::after {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            background: linear-gradient(135deg, #DC2626, #EA580C);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.4s ease, transform 0.4s ease;
          }

          .testimonial-card:hover .testimonial-image::after {
            opacity: 0.6;
            transform: scale(1.05);
          }

          .quote-mark {
            position: absolute;
            font-size: 120px;
            line-height: 1;
            color: rgba(220, 38, 38, 0.05);
            z-index: 0;
            transition: all 0.4s ease;
          }

          .testimonial-card:hover .quote-mark {
            transform: scale(1.1);
            color: rgba(220, 38, 38, 0.08);
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className=" md:py-20 bg-gradient-to-br from-white via-red-50/10 to-amber-50/10 overflow-hidden relative"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Header Section */}
            <div ref={headerRef} className="w-full lg:w-2/5">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500 uppercase tracking-widest mb-4 block">
                Success Stories
              </span>
              <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Hear from Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-500">
                  Exceptional Students
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Discover how A+ Academy's expert guidance transformed our students' journeys to achieve their dream scores.
              </p>
              
              <div ref={arrowsRef} className="flex items-center gap-6">
                <button
                  className="swiper-button-prev group flex justify-center items-center w-14 h-14 transition-all duration-500 relative"
                  aria-label="Previous testimonial"
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <svg
                    className="h-7 w-7 text-white relative z-10 transform group-hover:-translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="swiper-button-next group flex justify-center items-center w-14 h-14 transition-all duration-500 relative"
                  aria-label="Next testimonial"
                >
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
                  <svg
                    className="h-7 w-7 text-white relative z-10 transform group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Testimonials Carousel */}
            <div className="w-full lg:w-3/5">
              <div ref={swiperRef} className="swiper mySwiper">
                <div className="swiper-wrapper">
                  {[
                    {
                      name: 'Nitin Chhimpa',
                      role: 'PTE Academic Student',
                      score: '89 Overall',
                      image: '/images/Nitin.jpg',
                      text: 'The personalized speaking sessions with Arzoo Ma\'am helped me improve from 50 to 74 in just 7 classes. Her feedback was incredibly precise and actionable.',
                    },
                    {
                      name: 'Mukund',
                      role: 'IELTS Student',
                      score: 'Band 8.5',
                      image: '/images/Mukund.jpg',
                      text: 'Anshul Sir\'s grammar workshops transformed my writing. I went from struggling with coherence to scoring 7.5 in just 5 weeks of targeted practice.',
                    },
                    {
                      name: 'Pavni',
                      role: 'IELTS Student',
                      score: '+1.5 Bands',
                      image: '/images/Pavni.jpg',
                      text: 'Ayan Sir\'s listening strategies helped me boost my score by 1.5 bands. The note-taking techniques were game-changing for the exam.',
                    },
                    {
                      name: 'Simar',
                      role: 'PTE Student',
                      score: '+5 Points',
                      image: '/images/Simar.jpg',
                      text: 'The speaking fluency drills with Arzoo Ma\'am made all the difference. My pronunciation improved dramatically in just 6 sessions.',
                    },
                    {
                      name: 'Jashan',
                      role: 'PTE Student',
                      score: '+21 Points',
                      image: '/images/Jashan.jpg',
                      text: 'The writing templates provided structure I needed. Combined with Anshul Sir\'s feedback, my writing score jumped from 58 to 79 in a month.',
                    },
                  ].map((testimonial, index) => (
                    <div
                      key={index}
                      className="swiper-slide testimonial-card bg-white border border-solid border-gray-200 rounded-3xl p-8 max-sm:max-w-sm max-sm:mx-auto hover:border-red-600"
                    >
                      <div className="quote-mark top-2 right-6">"</div>
                      <div className="flex items-center gap-6 mb-6 relative z-10">
                        <div className="testimonial-image">
                          <img
                            className="rounded-full w-20 h-20 object-cover border-4 border-red-100/50 transition-transform duration-500 group-hover:scale-110"
                            src={testimonial.image}
                            alt={testimonial.name}
                             loading="lazy"
                          />
                        </div>
                        <div className="grid gap-1">
                          <h5 className="text-xl font-semibold text-gray-900">{testimonial.name}</h5>
                          <span className="text-sm text-gray-500">{testimonial.role}</span>
                          <span className="text-sm font-bold bg-gradient-to-r from-red-600 to-amber-500 text-transparent bg-clip-text">
                            {testimonial.score}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center mb-6 gap-2 text-amber-400 stars">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6"
                            viewBox="0 0 18 17"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                            />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed italic relative z-10">
                        "{testimonial.text}"
                      </p>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;