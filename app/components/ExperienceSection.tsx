"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <div className="w-full bg-white pt-4 pb-0 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 experience-section">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            {/* Left - Our Experience */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-900">Our Experience</span>
            </div>

            {/* Center Right - Headline and Contact */}
            <div className="flex-1 lg:max-w-3xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                India's Trusted Cargo Experts—{" "}
                <span className="text-blue-600">On Time, Every Time</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-6">
                {/* Contact Information */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-600 uppercase tracking-wide">CALL US ANYTIME</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">+91 99013 89430</p>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-900 hover:bg-gray-800 text-white font-[700] rounded-lg transition-all duration-300 flex items-center gap-2 text-sm sm:text-base min-h-[44px] w-full sm:w-auto justify-center sm:justify-start">
                  Know More
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Three Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Card - Road Freight */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
            <div className="relative h-56 sm:h-64 lg:h-80">
              <Image
                src="/s2.png"
                alt="Road Freight"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs sm:text-sm font-bold rounded-lg">
                  Road Freight
                </span>
              </div>
            </div>
          </div>

          {/* Middle Card - 520+ */}
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-blue-600 p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center min-h-[200px] sm:min-h-[256px] lg:min-h-[320px]">
            <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">18+</h3>
            <p className="text-white text-center text-sm sm:text-base lg:text-lg font-normal px-2">
              Years of Experience in Logistics & Cargo Services
            </p>
          </div>

          {/* Right Card - Certified Award */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="relative h-56 sm:h-64 lg:h-80">
              <Image
                src="/s23.png"
                alt="Certified Award Logistic Services"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4">
                <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm text-gray-900 text-xs sm:text-sm font-bold rounded-lg">
                  #1 & <span className="text-blue-600">certified award</span> logistic services in the world
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

