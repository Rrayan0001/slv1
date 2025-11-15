"use client";

import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
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

      {/* Main Container with Rounded Corners and Shadow */}
      <main className="relative min-h-screen bg-white rounded-none sm:rounded-xl lg:rounded-[2rem] shadow-none sm:shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-0 sm:border-2 border-white/50 mx-0 sm:mx-2 lg:mx-4 mt-8 sm:mt-6 lg:mt-4 xl:mt-2 mb-0 sm:mb-2 lg:mb-4 xl:mb-6 max-w-[1920px] overflow-hidden main-slideshow-container">
        {/* Slideshow Component - Each image in its own slide */}
        <Slideshow />
      </main>

      {/* Infinite Scrolling Logos Section */}
      <InfiniteScrollLogos />
      <style jsx>{`
        @media (max-width: 768px) {
          .hero,
          .hero-section,
          .slideshow,
          .slideshow-section,
          .main-slideshow-container,
          .slideshow-wrapper,
          .slideshow-container {
            margin-bottom: 0 !important;
          }
          .main-slideshow-container {
            min-height: auto !important;
            height: auto !important;
          }
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
