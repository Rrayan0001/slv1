"use client";

import Navbar from "./components/Navbar";
import InfiniteScrollLogos from "./components/InfiniteScrollLogos";
import ExperienceSection from "./components/ExperienceSection";
import VelocityScrollSection from "./components/VelocityScrollSection";
import LogisticsServices from "./components/LogisticsServices";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Navbar - Fixed at top, travels with scroll */}
      <Navbar />

      {/* Hero Section with landing_image.png - Same form factor as services page */}
      <div className="relative min-h-[70vh] sm:min-h-screen overflow-hidden">
        <div className="relative w-full h-[70vh] sm:h-screen">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
              <img
                src="/landing_image.png"
                alt="Your cargo our commitment"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-20 h-full flex items-end">
            <div className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[6%] md:pr-[6%] pb-8 sm:pb-12 md:pb-16 lg:pb-[8%]">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
                {/* Headline */}
                <div className="w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-[1.1] tracking-tight" style={{ 
                    fontFamily: 'var(--font-inter)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    Your cargo our <span style={{ color: "#2944F3" }}>commitment</span>
                  </h1>
                </div>

                {/* Subtitle - Right aligned below */}
                <div className="w-full flex justify-end">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white leading-[1.6] font-medium max-w-md lg:max-w-lg text-right" style={{ 
                    fontFamily: 'var(--font-inter)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '0.3px'
                  }}>
                    Precision-engineered freight and warehousing for enterprises across India. Trusted by India's Top Enterprises since 2005.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Logos Section */}
      <InfiniteScrollLogos />
      <style jsx>{`
        @media (max-width: 768px) {
          .infinite-logos-section {
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          .experience-section {
            margin-top: 0 !important;
          }
        }
      `}</style>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Velocity Scroll Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <VelocityScrollSection />
      </div>

      {/* Logistics Services Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <LogisticsServices />
      </div>

      {/* Process Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <ProcessSection />
      </div>

      {/* Testimonials Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <TestimonialsSection />
      </div>

      {/* Footer Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <Footer />
      </div>
    </div>
  );
}
