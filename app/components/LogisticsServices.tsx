"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
  key: string;
  title: string;
  subtitle: string;
  img: string;
};

const services: Service[] = [
  {
    key: "express",
    title: "Express Parcel",
    subtitle: "Express",
    img: "/Express_Parcel.png",
  },
  {
    key: "warehousing",
    title: "Warehousing",
    subtitle: "Storage",
    img: "/Warehousing.png",
  },
  {
    key: "part-truckload",
    title: "Part Truckload",
    subtitle: "PTL",
    img: "/Part_Truckload.png",
  },
  {
    key: "full-truckload",
    title: "Full Truckload",
    subtitle: "FTL",
    img: "/Full_Truckload.png",
  },
  {
    key: "cross-border",
    title: "Cross Border",
    subtitle: "International",
    img: "/Cross_Border.png",
  },
];

export default function LogisticsServices() {
  const [hovered, setHovered] = useState<Service>(services[0]);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [highlightStyle, setHighlightStyle] = useState({ top: 0, height: 0 });

  useEffect(() => {
    const hoveredIndex = services.findIndex(s => s.key === hovered.key);
    const node = itemRefs.current[hoveredIndex];
    
    if (node) {
      setHighlightStyle({ 
        top: node.offsetTop, 
        height: node.offsetHeight 
      });
    }
  }, [hovered.key]);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Box Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg border border-gray-200/50 p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Content and Image */}
          <div className="flex-1 lg:pr-12">
            <h3 className="text-[#2565F5] tracking-[2px] text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-5 uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
              Our Services
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
              Logistics Solution <br className="hidden sm:block" /> and <span className="text-[#2565F5]">Services</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#535672] mb-4 sm:mb-6 md:mb-8 max-w-lg" style={{ fontFamily: 'var(--font-inter)' }}>
              Express parcel, warehousing, PTL, FTL, and cross-border logistics under one roof. We tailor the mode, fleet, and storage mix to your cargo so you get speed, visibility, and reliability every mile.
            </p>
            
            {/* Image Box */}
            <div className="w-full sm:w-full md:w-[370px] h-[200px] sm:h-[250px] md:h-[370px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-100 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hovered.key}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.38, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={hovered.img}
                    alt={hovered.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - Services List */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative">
              {/* Sliding Highlight */}
              <motion.div
                className="absolute left-0 rounded-xl bg-[#eaf1ff] shadow-[0_2px_12px_rgba(37,101,245,0.09)]"
                style={{
                  top: `${highlightStyle.top}px`,
                  height: `${highlightStyle.height}px`,
                  width: "100%",
                  zIndex: 0,
                }}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              />

              {/* Service Items */}
              {services.map((service, idx) => (
                <motion.div
                  key={service.key}
                  ref={(el) => { itemRefs.current[idx] = el; }}
                  className={`relative z-10 flex items-center bg-transparent px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl cursor-pointer mb-2 sm:mb-3 md:mb-4 select-none ${
                    hovered.key === service.key ? "text-gray-900" : "text-[#23244a]"
                  }`}
                  onMouseEnter={() => setHovered(service)}
                  onFocus={() => setHovered(service)}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${service.title} service`}
                  initial={false}
                  animate={{
                    scale: hovered.key === service.key ? 1.03 : 1,
                    color: hovered.key === service.key ? "#181b28" : "#23244a",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                >
                  <span className="text-[#2565F5] font-semibold mr-3 sm:mr-4 md:mr-6 text-base sm:text-lg md:text-xl">
                    0{idx + 1}
                  </span>
                  <div className="flex-1">
                    <div className="text-[#2565F5] text-xs sm:text-sm font-semibold uppercase mb-1">
                      {service.subtitle}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold" style={{ fontFamily: 'var(--font-inter)' }}>
                      {service.title}
                    </div>
                  </div>
                  <motion.span
                    className="ml-auto text-xl sm:text-2xl bg-white text-[#2565F5] rounded-full shadow-[0_2px_8px_rgba(37,101,245,0.08)] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center min-w-[44px] min-h-[44px]"
                    animate={{
                      background: hovered.key === service.key ? "#2565F5" : "#fff",
                      color: hovered.key === service.key ? "#fff" : "#2565F5",
                      scale: hovered.key === service.key ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.22 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

