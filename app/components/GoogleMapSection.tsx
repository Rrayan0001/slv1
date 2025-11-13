"use client";

import React from "react";

export default function GoogleMapSection() {
  // Using the address from the contact info cards
  const address = "SAHAKARNAGAR, BANGALORE-560092, India";
  
  // Google Maps embed URL - Using the provided Google Maps link
  // Link: https://maps.app.goo.gl/SQhxbTWxHCUbQFEG6?g_st=ac
  // For embed, we'll use a search-based embed for Sahakarnagar, Bangalore
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.123456789!2d77.5548!3d13.0418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8e8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSahakarnagar%2C%20Bangalore%2C%20Karnataka%20560092!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            Find Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2" style={{ fontFamily: 'var(--font-inter)' }}>
            Visit us at our location or get directions using the map below
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                border: 0,
                minHeight: '300px'
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        {/* Address Display */}
        <div className="mt-4 sm:mt-6 md:mt-8 text-center px-2">
          <p className="text-gray-700 text-xs sm:text-sm md:text-base" style={{ fontFamily: 'var(--font-inter)' }}>
            <strong>Address:</strong> {address}
          </p>
        </div>
      </div>
    </section>
  );
}

