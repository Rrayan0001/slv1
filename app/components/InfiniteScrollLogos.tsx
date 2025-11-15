"use client";

import Image from "next/image";
import { useState } from "react";

const companies = [
  { name: "Aditya Birla Fashion and Retail", logo: "/Aditya Birla Fashion and Retail.png" },
  { name: "BOSCH", logo: "/BOSCH.png" },
  { name: "MAHINDRA LOGISTICS", logo: "/MAHINDRA LOGISTICS.png" },
  { name: "FSC", logo: "/FSC.jpg" },
  { name: "RIVIGO", logo: "/RIVIGO.png" },
];

export default function InfiniteScrollLogos() {
  // Duplicate the array multiple times to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  return (
    <div className="w-full bg-white pt-4 pb-4 sm:pb-4 md:pb-6 lg:pb-8 overflow-hidden infinite-logos-section">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-12 lg:py-8 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 flex items-center justify-center min-w-[200px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[320px] h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full flex items-center justify-center p-3">
                {imageErrors.has(company.logo) ? (
                  <span className="text-gray-700 font-bold text-sm sm:text-base md:text-lg text-center px-2">
                    {company.name}
                  </span>
                ) : (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={300}
                    height={120}
                    className="object-contain"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%', 
                      width: 'auto', 
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    unoptimized
                    priority={index < 5}
                    onError={() => {
                      setImageErrors(prev => new Set(prev).add(company.logo));
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .logo-section,
          .client-slider,
          .clients-area,
          .partners-wrapper,
          .brand-section {
            margin-top: 0 !important;
            padding-top: 0 !important;
            height: auto !important;
            min-height: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

