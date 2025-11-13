"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";

export default function VelocityScrollSection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <ScrollVelocityContainer className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.02em] md:leading-[5rem]">
        <ScrollVelocityRow baseVelocity={20} direction={1}>
          <span className="px-8 md:px-12 lg:px-16">SLV CARGO MOVERS AND PACKERS</span>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={20} direction={-1}>
          <span className="px-8 md:px-12 lg:px-16">SLV CARGO MOVERS AND PACKERS</span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>
    </div>
  );
}

