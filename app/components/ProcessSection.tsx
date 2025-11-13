"use client";

// components/ProcessSection.tsx

import React from "react";
import { motion } from "framer-motion";

const Steps = [
  {
    key: "quote",
    title: "Request Quote",
    subtitle: "Step 01",
    description:
      "Contact us with your shipment details including pickup location, delivery address, item description, weight/volume, and preferred date/time.",
    icon: (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="32" fill="#2565F5" />
        <rect x="22" y="28" width="24" height="18" rx="5" fill="#fff" />
        <rect x="30" y="34" width="8" height="9" rx="2" fill="#2565F5" />
        {/* Dot line crosshairs */}
        <circle cx="34" cy="34" r="29" stroke="#2565F5" strokeDasharray="3 6" strokeWidth="3"/>
        {/* Small bag icon */}
        <rect x="31" y="32" width="6" height="5" rx="1.5" fill="#2565F5"/>
        <path d="M34 32v-3" stroke="#2565F5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "plan",
    title: "Get Customized Plan",
    subtitle: "Step 02",
    description:
      "We provide a tailored logistics solution with pricing based on your goods and requirements. Get professional advice with no obligation.",
    icon: (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="32" fill="#2565F5" />
        {/* Warehouse icon */}
        <rect x="22" y="36" width="24" height="10" rx="2" fill="#fff" />
        <polygon points="20,36 34,22 48,36" fill="#fff" />
        {/* Doors as lines */}
        <rect x="29" y="37" width="2.5" height="7" rx="1.2" fill="#2565F5"/>
        <rect x="36.5" y="37" width="2.5" height="7" rx="1.2" fill="#2565F5"/>
      </svg>
    ),
  },
  {
    key: "pickup",
    title: "Schedule Pickup",
    subtitle: "Step 03",
    description:
      "Arrange pickup at your location at a convenient time that works for you. Our professional team handles everything from packing to loading.",
    icon: (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="32" fill="#2565F5" />
        {/* Package icon */}
        <rect x="30" y="29" width="8" height="12" rx="2" fill="#fff" />
        <rect x="32" y="31" width="4" height="8" rx="1.2" fill="#2565F5"/>
        {/* arrows for distribution */}
        <path d="M38,39 l8,0 m-2,-2 l2,2 l-2,2" stroke="#2565F5" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M30,39 l-8,0 m2,-2 l-2,2 l2,2" stroke="#2565F5" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    key: "track",
    title: "Track & Monitor",
    subtitle: "Step 04",
    description:
      "Monitor your shipment as it moves through our logistics network. Real-time tracking keeps you informed every step of the way.",
    icon: (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="32" fill="#2565F5" />
        {/* Truck icon */}
        <rect x="25" y="34" width="18" height="9" rx="2" fill="#fff" />
        <rect x="40" y="29" width="8" height="7" rx="2" fill="#2565F5" />
        <circle cx="30" cy="44" r="3" fill="#2565F5" />
        <circle cx="44" cy="44" r="3" fill="#2565F5" />
        {/* Checkmark */}
        <path d="M43 33 l2 2 l3 -3" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    key: "delivery",
    title: "Safe Delivery",
    subtitle: "Step 05",
    description:
      "Your cargo is delivered safely to the destination with confirmation. We ensure professional handling and on-time delivery every time.",
    icon: (
      <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
        <circle cx="34" cy="34" r="32" fill="#2565F5" />
        {/* Delivery/Checkmark icon */}
        <circle cx="34" cy="34" r="12" fill="#fff" />
        <path d="M30 34 l3 3 l6 -6" stroke="#2565F5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="process-section">
      <div className="header">
        <div className="process-tag">Our Process</div>
        <h1>
          Let us take the stress <br />
          out of <span className="highlight">your move.</span>
        </h1>
      </div>
      <div className="steps-row">
        {Steps.map((step, idx) => (
          <motion.div
            key={step.key}
            className="step"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.33 }}
            transition={{ duration: 0.45, delay: idx * 0.17 }}
          >
            <motion.div
              className="step-icon"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 21 }}
            >
              {step.icon}
            </motion.div>
            <motion.div
              className="step-title"
              whileHover={{ color: "#2565F5" }}
              transition={{ duration: 0.2 }}
            >
              {step.title}
            </motion.div>
            <div className="step-subtitle-wrapper">
              <motion.div
                className="step-subtitle"
                whileHover={{ backgroundColor: "#eaf1ff", color: "#2565F5" }}
                transition={{ duration: 0.2 }}
              >
                {step.subtitle}
              </motion.div>
              {idx < Steps.length - 1 && <div className="divider-line" />}
            </div>
            <div className="step-desc">{step.description}</div>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .process-section {
          background: #f6f6fa;
          padding: 2rem 1rem 2rem 1rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          .process-section {
            padding: 3rem 1.5rem 2.5rem 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .process-section {
            padding: 4rem 2rem 2.8rem 2rem;
          }
        }
        .header {
          margin-bottom: 2.4rem;
        }
        .process-tag {
          font-size: 1rem;
          font-weight: 500;
          color: #2565F5;
          letter-spacing: 2px;
          margin-bottom: 0.8rem;
        }
        h1 {
          font-size: 1.75rem;
          margin: 0.4rem 0 0.8rem 0;
          font-weight: bold;
          line-height: 1.2;
          text-align: center;
        }
        @media (min-width: 640px) {
          h1 {
            font-size: 2rem;
          }
        }
        @media (min-width: 768px) {
          h1 {
            font-size: 2.4rem;
          }
        }
        .highlight {
          color: #2565F5 !important;
        }
        .steps-row {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 0;
          padding-bottom: 2.2rem;
          position: relative;
        }
        .step {
          flex: 1 1 20%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          min-width: 200px;
          padding-bottom: 0.5rem;
          cursor: pointer;
          transition: color 0.16s;
        }
        @media (min-width: 768px) {
          .step {
            min-width: 240px;
          }
        }
        .step-icon {
          margin-bottom: 1.3rem;
        }
        .step-title {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.55rem;
          color: #181b28;
          transition: color 0.16s;
          text-align: center;
          line-height: 1.3;
        }
        @media (min-width: 640px) {
          .step-title {
            font-size: 1.1rem;
          }
        }
        @media (min-width: 768px) {
          .step-title {
            font-size: 1.2rem;
          }
        }
        .step-subtitle-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 0.69rem;
          margin-top: 0.28rem;
        }
        .step-subtitle {
          background: #fff;
          color: #2565F5;
          font-size: 1.09rem;
          font-weight: 600;
          padding: 0.3rem 1.2rem;
          border-radius: 12px;
          border: 2px solid #2565F5;
          box-shadow: 0 2px 12px rgba(37,101,245,0.06);
          transition: background 0.16s, color 0.16s;
          white-space: nowrap;
        }
        .divider-line {
          position: absolute;
          left: 100%;
          top: 50%;
          width: calc((100% - 240px * 4) / 3);
          max-width: 150px;
          height: 2px;
          border-top: 2px dotted #d8e3fd;
          transform: translateY(-50%);
        }
        .step-desc {
          color: #868899;
          font-size: 0.875rem;
          margin-top: 0.4rem;
          max-width: 240px;
          line-height: 1.6;
          text-align: center;
          padding: 0 0.5rem;
        }
        @media (min-width: 640px) {
          .step-desc {
            font-size: 0.9375rem;
          }
        }
        @media (min-width: 768px) {
          .step-desc {
            font-size: 1rem;
          }
        }
        .divider {
          display: none;
        }
        @media (max-width: 992px) {
          .steps-row {
            flex-direction: column;
            border-bottom: none;
            gap: 2rem;
          }
          .step {
            min-width: unset;
            width: 100%;
            margin-bottom: 1.5rem;
            border-bottom: 2px dotted #d8e3fd;
            padding-bottom: 1.5rem;
          }
          .step:last-child { 
            border-bottom: none;
            margin-bottom: 0;
          }
          .divider-line {
            display: none;
          }
        }
        @media (max-width: 1200px) and (min-width: 993px) {
          .step { min-width: 180px; }
        }
      `}</style>
    </section>
  );
}

