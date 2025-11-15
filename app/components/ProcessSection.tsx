"use client";

import React from "react";
import { motion } from "framer-motion";

const Steps = [
  {
    key: "quote",
    title: "Request a Quote",
    description:
      "Provide shipment details, pickup and delivery locations, cargo description, and preferred schedule for a fast response.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
      >
        <path
          d="M8 9h16M8 15h12M8 21h7"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M6 6h20a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "plan",
    title: "Receive a Tailored Logistics Plan",
    description:
      "Get a customized logistics plan with transparent pricing, expert recommendations, and a no-obligation consultation.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
      >
        <path
          d="M6 10h20M6 16h20M6 22h11"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    ),
  },
  {
    key: "pickup",
    title: "Schedule Pickup",
    description:
      "Choose a pickup time that suits your operations. Our trained crew handles packing, loading, and documentation precisely.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
      >
        <path
          d="M11 22h-3a2 2 0 0 1-2-2v-4h5m0 6h11m-11 0v3m11-3h3.5a1.5 1.5 0 0 0 1.5-1.5V15h-5m0 7v3m-11-9h11V9H11v9Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: "track",
    title: "Track & Monitor",
    description:
      "Stay updated from dispatch to delivery with real-time tracking and milestone alerts across our logistics network.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
      >
        <path
          d="M8 14a8 8 0 1 1 16 0c0 6-8 12-8 12s-8-6-8-12Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="14" r="2.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    key: "delivery",
    title: "Safe & Timely Delivery",
    description:
      "Your cargo reaches the destination safely and on schedule with immediate delivery confirmation and careful handling.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-white"
      >
        <path
          d="M6 18v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v13H8a2 2 0 0 1-2-2Zm15 0h3l4 5v3h-7V18Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m10 16 3 3 6-6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f9fafb] py-12 sm:py-16 lg:py-20 px-4 font-[var(--font-inter)]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-[#2565F5] uppercase font-semibold">
          Our Process
        </p>
        <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
          A clear, reliable workflow designed for seamless cargo movement.
        </h2>
      </div>

      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-7 max-w-6xl mx-auto">
        {Steps.map((step, index) => (
          <motion.div
            key={step.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="bg-white rounded-2xl px-6 py-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)] transition duration-200 hover:-translate-y-1.5 border border-slate-100"
          >
            <div className="w-20 h-20 rounded-full bg-[#2565F5] flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#2565F5] uppercase">
              Step {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-base sm:text-lg font-bold text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-[240px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

