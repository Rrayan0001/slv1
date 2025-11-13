"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavigationDots from "./NavigationDots";

interface Slide {
  id: number;
  backgroundImage: string;
  tag: string;
  headline: string;
  headlineWhite: string;
  headlineBlue: string;
  subtitle: string;
}

const slides: Slide[] = [
      {
        id: 1,
        backgroundImage: "/s3.png",
        tag: "DEDICATED CARGO SPECIALISTS",
        headline: "Your cargo our commitment",
        headlineWhite: "Your cargo our ",
        headlineBlue: "commitment",
        subtitle: "Precision-engineered freight and warehousing for enterprises across India. Trusted by India's Top Enterprises since 2005.",
      },
      {
        id: 2,
        backgroundImage: "/s1.png",
        tag: "INDIA'S TRUSTED CARGO EXPERTS",
        headline: "Driven by commitment delivered with care",
        headlineWhite: "Driven by commitment delivered ",
        headlineBlue: "with care",
        subtitle: "Professional cargo transportation nationwide. 18+ years of experience delivering excellence with 98% on-time delivery rate.",
      },
      {
        id: 3,
        backgroundImage: "/s4.png",
        tag: "YOUR TRUSTED LOGISTICS PARTNER",
        headline: "We deliver more than packages-we deliver promise",
        headlineWhite: "We deliver more than packages-we deliver ",
        headlineBlue: "promise",
        subtitle: "From logistics and cargo moving to packing and end-to-end delivery – we provide comprehensive cargo solutions tailored to your needs.",
      },
    ];

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow (optional - can be removed if not needed)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-[70svh] sm:min-h-screen overflow-hidden slideshow-wrapper" style={{ marginBottom: 0, paddingBottom: 0 }}>
      {/* Slides Container */}
      <div className="relative w-full h-[70svh] sm:h-screen slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
                <img
                  src={slide.backgroundImage}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>

            {/* Hero Content Overlay */}
            <div className="relative z-20 h-full flex items-end hero-content-overlay">
              <div className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[6%] md:pr-[6%] pb-4 sm:pb-8 md:pb-12 lg:pb-16 hero-content">
                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-6 w-full">
                  {/* Left Side - Headline */}
                  <div className="flex-1 max-w-xl sm:max-w-2xl">
                    <AnimatePresence mode="wait">
                      <motion.h1
                        key={`headline-${slide.id}-${currentSlide}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="font-bold leading-[1.2] tracking-tight text-[2.25rem] sm:text-[2.8125rem] md:text-[3.375rem] lg:text-[4.5rem] xl:text-[5.625rem] 2xl:text-[6.75rem]" 
                        style={{ 
                          fontFamily: 'var(--font-poppins), sans-serif',
                          fontWeight: 700,
                          color: '#ffffff',
                          letterSpacing: '0.5px',
                          textShadow: 'none'
                        }}
                      >
                        <span style={{ color: '#ffffff' }}>{slide.headlineWhite}</span>
                        <span style={{ color: '#2944F3' }}>{slide.headlineBlue}</span>
                      </motion.h1>
                    </AnimatePresence>
                  </div>

                  {/* Right Side - Subtitle and CTA */}
                  <div className="flex-1 max-w-xl sm:max-w-lg flex flex-col items-end sm:items-end">
                    {/* Subtitle */}
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`subtitle-${slide.id}-${currentSlide}`}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-[1.5] font-medium mb-3 sm:mb-4 text-right max-w-md" 
                        style={{ 
                          fontFamily: 'var(--font-montserrat), sans-serif',
                          fontWeight: 400,
                          textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                          letterSpacing: '0.3px'
                        }}
                      >
                        {slide.subtitle}
                      </motion.p>
                    </AnimatePresence>

                    {/* CTA Button */}
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                      href="https://wa.me/919901389430?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 bg-[#2565F5] hover:bg-[#194bbd] text-white font-semibold rounded-[40px] transition-all duration-200 shadow-[0_2px_8px_rgba(37,101,245,0.18)] hover:shadow-[0_4px_12px_rgba(37,101,245,0.3)] text-xs sm:text-sm md:text-base min-h-[40px] sm:min-h-[44px] justify-center sm:justify-start" 
                      style={{ 
                        fontFamily: 'var(--font-montserrat)',
                        fontWeight: 600
                      }}
                    >
                      Get In Touch
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <NavigationDots
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onDotClick={goToSlide}
      />
      <style jsx>{`
        @media (max-width: 768px) {
          .hero,
          .hero-section,
          .slideshow,
          .slideshow-section,
          .slideshow-wrapper,
          .slideshow-container {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
          .hero-content-overlay {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
          .hero-content {
            margin-bottom: 0 !important;
            padding-bottom: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}

