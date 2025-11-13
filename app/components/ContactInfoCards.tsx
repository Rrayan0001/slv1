"use client";

import React from "react";

export default function ContactInfoCards() {
  const contactCards = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mail Us 24/7",
      details: [
        "slvcargomoverss@gmail.com",
        "www.slvcargo.in"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Location",
      details: [
        "SAHAKARNAGAR, BANGALORE-560092,",
        "India"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call US 24/7",
      details: [
        "Phone: +91 99013 89430",
        "WhatsApp: +91 99013 89430"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Working Days",
      details: [
        "Mon to Sat - 09:00 AM To 06:00 PM",
        "Sunday - Closed"
      ]
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
                <div className="text-[#2565F5]">
                  <div className="w-10 h-10 sm:w-12 sm:h-12">
                    {card.icon}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
                {card.title}
              </h3>

              {/* Details */}
              <div className="space-y-1.5 sm:space-y-2">
                {card.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 text-xs sm:text-sm md:text-base text-center leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

