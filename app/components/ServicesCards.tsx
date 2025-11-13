"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  key: string;
  title: string;
  subtitle: string;
  img: string;
  details: {
    description: string;
    features: string[];
    benefits: string[];
  };
};

const services: Service[] = [
  {
    key: "logistics",
    title: "Logistics Orchestration",
    subtitle: "01 LOGISTICS",
    img: "/image.png",
    details: {
      description: "End-to-end logistics with assured schedules, live tracking, and accountable teams. Precision-engineered freight and warehousing for enterprises across India.",
      features: [
        "End-to-end logistics management",
        "Domestic coverage focused on cities",
        "Efficient route planning",
        "Real-time shipment tracking",
        "Professional handling and care",
        "Flexible scheduling"
      ],
      benefits: [
        "Assured delivery schedules",
        "Live tracking visibility",
        "Accountable professional teams",
        "Enterprise-grade solutions"
      ]
    }
  },
  {
    key: "cargo",
    title: "Cargo Movers",
    subtitle: "02 CARGO",
    img: "/image1.png",
    details: {
      description: "Reliable cargo moving services ensuring safe and timely transportation of your goods with professional handling. Professional cargo transportation nationwide.",
      features: [
        "Safe cargo transportation",
        "Professional handling",
        "Timely delivery",
        "Insurance coverage options",
        "Expert drivers and crew",
        "Vehicle tracking system"
      ],
      benefits: [
        "98% on-time delivery rate",
        "Secure handling",
        "Professional service",
        "Nationwide coverage"
      ]
    }
  },
  {
    key: "packers",
    title: "Packers",
    subtitle: "03 PACKING",
    img: "/image2.png",
    details: {
      description: "Expert packing services to ensure your goods are protected and secure during transit with quality materials and techniques. Professional packaging solutions.",
      features: [
        "Professional packing services",
        "Quality packing materials",
        "Secure packaging techniques",
        "Item protection and safety",
        "Custom packing solutions",
        "Fragile item handling"
      ],
      benefits: [
        "Maximum protection",
        "Quality materials",
        "Expert techniques",
        "Customized solutions"
      ]
    }
  },
  {
    key: "delivery",
    title: "End-to-End Delivery",
    subtitle: "04 DELIVERY",
    img: "/image3.png",
    details: {
      description: "Complete door-to-door delivery service handling everything from pickup to final delivery at your destination. Full logistics management from start to finish.",
      features: [
        "Pickup from your location",
        "Secure transportation",
        "Door-to-door delivery",
        "Full logistics management",
        "End-to-end tracking",
        "Delivery confirmation"
      ],
      benefits: [
        "Complete service",
        "No hassle for you",
        "Full visibility",
        "Guaranteed delivery"
      ]
    }
  },
  {
    key: "freight",
    title: "Freight Movers",
    subtitle: "05 FREIGHT",
    img: "/image4.png",
    details: {
      description: "Efficient freight moving services for commercial and industrial shipments with specialized handling equipment. Perfect for enterprise and industrial cargo needs.",
      features: [
        "Commercial freight services",
        "Industrial shipments",
        "Heavy cargo handling",
        "Specialized equipment",
        "Bulk freight solutions",
        "Flexible freight options"
      ],
      benefits: [
        "Specialized handling",
        "Industrial expertise",
        "Heavy cargo capability",
        "Enterprise solutions"
      ]
    }
  },
];

export default function ServicesCards() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <div className="w-3 h-3 bg-[#2565F5] rounded-sm"></div>
            <h3 className="text-[#2565F5] tracking-[2px] text-xs sm:text-sm md:text-base font-semibold uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
              Our services
            </h3>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight px-2" style={{ fontFamily: 'var(--font-inter)' }}>
            Logistics Solution <br className="hidden sm:block" /> and <span className="text-[#2565F5]">Services</span>
          </h1>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.key}
              className="relative group cursor-pointer"
              onClick={() => setSelectedService(selectedService?.key === service.key ? null : service)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  {/* Subtitle */}
                  <p className="text-gray-300 text-xs sm:text-sm font-semibold uppercase mb-1 sm:mb-2 tracking-wider">
                    {service.subtitle}
                  </p>
                  
                  {/* Title */}
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                    {service.title}
                  </h2>

                  {/* Arrow Icon */}
                  <div className="flex justify-end">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 min-w-[44px] min-h-[44px]">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal/Expanded View */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Modal Header */}
                <div className="relative h-48 sm:h-64 md:h-80">
                  <Image
                    src={selectedService.img}
                    alt={selectedService.title}
                    fill
                    className="object-cover rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                    <p className="text-gray-300 text-xs sm:text-sm font-semibold uppercase mb-1 sm:mb-2 tracking-wider">
                      {selectedService.subtitle}
                    </p>
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'var(--font-inter)' }}>
                      {selectedService.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-all min-w-[44px] min-h-[44px]"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
                    {selectedService.details.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-[#2565F5] text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                        Key Features
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedService.details.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#2565F5] mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'var(--font-inter)' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-[#2565F5] text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                        Benefits
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedService.details.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#2565F5] mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm sm:text-base" style={{ fontFamily: 'var(--font-inter)' }}>
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-[#2565F5] hover:bg-[#194bbd] text-white font-semibold rounded-[40px] transition-all duration-200 shadow-[0_2px_8px_rgba(37,101,245,0.18)] hover:shadow-[0_4px_12px_rgba(37,101,245,0.3)] text-sm sm:text-base lg:text-lg w-full sm:w-fit min-h-[44px] justify-center sm:justify-start" style={{ 
                      fontFamily: 'var(--font-montserrat)',
                      fontWeight: 600
                    }}>
                      Get Quote
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

