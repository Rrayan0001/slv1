import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactInfoCards from "../components/ContactInfoCards";
import GoogleMapSection from "../components/GoogleMapSection";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Navbar - Fixed at top, travels with scroll */}
      <Navbar />

      {/* Hero Section with c2.png */}
      <div className="relative min-h-[70vh] sm:min-h-screen overflow-hidden">
        <div className="relative w-full h-[70vh] sm:h-screen">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
              <img
                src="/c2.png"
                alt="Contact Us"
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
                    Contact Us
                  </h1>
                </div>

                {/* Right Side - Subtitle and CTA */}
                <div className="flex-1 max-w-2xl w-full flex flex-col justify-start">
                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-[1.6] font-medium mb-4 sm:mb-6 lg:mb-8 max-w-xl" style={{ 
                    fontFamily: 'var(--font-inter)',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    letterSpacing: '0.3px'
                  }}>
                    Get in touch with our team. We're here to help you with all your logistics needs. Contact us for quotes, inquiries, or to discuss your cargo requirements.
                  </p>

                  {/* CTA Button */}
                  <a 
                    href="https://wa.me/919901389430?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 lg:px-10 lg:py-4 bg-[#2565F5] hover:bg-[#194bbd] text-white font-semibold rounded-[40px] transition-all duration-200 shadow-[0_2px_8px_rgba(37,101,245,0.18)] hover:shadow-[0_4px_12px_rgba(37,101,245,0.3)] text-sm sm:text-base lg:text-lg xl:text-xl w-full sm:w-fit min-h-[44px] justify-center sm:justify-start" style={{ 
                      fontFamily: 'var(--font-montserrat)',
                      fontWeight: 600
                    }}
                  >
                    Get In Touch
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <ContactInfoCards />
      </div>

      {/* Google Maps Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <GoogleMapSection />
      </div>

      {/* Footer Section */}
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4">
        <Footer />
      </div>
    </div>
  );
}

