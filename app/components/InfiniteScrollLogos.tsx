"use client";

const companies = [
  { name: "MAHINDRA LOGISTICS", logo: "MAHINDRA LOGISTICS" },
  { name: "BOSCH", logo: "BOSCH" },
  { name: "RIVIGO", logo: "RIVIGO" },
  { name: "FSL", logo: "FSL" },
  { name: "ABFRL", logo: "ABFRL" },
];

export default function InfiniteScrollLogos() {
  // Duplicate the array multiple times to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="w-full bg-white pt-0 pb-2 sm:pb-4 md:pb-6 lg:pb-8 overflow-hidden infinite-logos-section">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 bg-white rounded-lg sm:rounded-xl shadow-sm border border-gray-200 flex items-center justify-center min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[220px] hover:shadow-md transition-shadow"
            >
              <span className="text-gray-900 font-bold text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">
                {company.logo}
              </span>
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
          .brand-section,
          .infinite-logos-section {
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

