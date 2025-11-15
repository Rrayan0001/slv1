import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesCards from "../components/ServicesCards";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Navbar - Fixed at top, travels with scroll */}
      <Navbar />

      {/* Hero Section with c1.png */}
      <div className="relative min-h-[70vh] sm:min-h-screen overflow-hidden">
        <div className="relative w-full h-[70vh] sm:h-screen">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
              <img
                src="/c1.png"
                alt="Services"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center" }}
              />
            </div>
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-20 h-full flex items-end">
            <div className="w-full pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-[6%] md:pr-[6%] pb-8 sm:pb-12 md:pb-16 lg:pb-[8%]">
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-16 items-start">
                {/* Left Side - Headline */}
                <div className="flex-1 max-w-2xl w-full">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight" style={{ 
                    fontFamily: 'var(--font-inter)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    Services
                  </h1>
                </div>

                {/* Right Side - Subtitle */}
                <div className="flex-1 max-w-2xl w-full flex flex-col justify-start">
                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-[1.6] font-medium mb-4 sm:mb-6 lg:mb-8 max-w-xl" style={{ 
                    fontFamily: 'var(--font-inter)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '0.3px'
                  }}>
                    Comprehensive logistics solutions tailored to your business needs. From air freight to road transport, we deliver excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <ServicesCards />
      </div>

      {/* Footer Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <Footer />
      </div>
    </div>
  );
}

