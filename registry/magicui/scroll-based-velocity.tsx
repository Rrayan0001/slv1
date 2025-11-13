"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollVelocityContainerProps {
  children: ReactNode;
  className?: string;
}

interface ScrollVelocityRowProps {
  children: ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
}

export function ScrollVelocityContainer({
  children,
  className,
}: ScrollVelocityContainerProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 20,
  direction = 1,
  className,
}: ScrollVelocityRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const scrollVelocityRef = useRef(0);
  const lastScrollY = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const repeatCount = 6;

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Initialize scroll position on client side
    lastScrollY.current = window.scrollY;
    lastTimeRef.current = performance.now();

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTimeRef.current;
      
      if (deltaTime > 0) {
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        // Calculate velocity based on scroll speed
        const velocity = (scrollDelta / deltaTime) * 200; // Scale factor
        scrollVelocityRef.current = Math.max(-100, Math.min(100, velocity)); // Cap velocity
      }
      
      lastScrollY.current = currentScrollY;
      lastTimeRef.current = currentTime;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let frame: number;
    let x = 0;

    function animate() {
      // Decay velocity gradually when not scrolling
      scrollVelocityRef.current *= 0.98;
      
      // Combine base velocity with scroll velocity
      const totalSpeed = (baseVelocity + scrollVelocityRef.current) * direction * 0.15;
      x += totalSpeed;

      const node = rowRef.current;
      if (node && node.scrollWidth > 0) {
        // The width of one "chunk"
        const chunkWidth = node.scrollWidth / repeatCount;

        // Reset position for infinite effect
        if (direction === 1 && x > chunkWidth) {
          x -= chunkWidth;
        }
        if (direction === -1 && x < -chunkWidth) {
          x += chunkWidth;
        }

        node.style.transform = `translateX(${-x}px)`;
      }

      frame = requestAnimationFrame(animate);
    }

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [baseVelocity, direction, repeatCount]);

  // Render children repeated N times for seamless infinite effect
  const repeated = Array.from({ length: repeatCount }).map((_, i) => (
    <span key={i} className="whitespace-nowrap flex-shrink-0" style={{ marginRight: 32 }}>
      {children}
    </span>
  ));

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={rowRef}
        className={cn("flex flex-nowrap", className)}
        style={{
          willChange: "transform",
          whiteSpace: "nowrap",
        }}
      >
        {repeated}
      </div>
    </div>
  );
}

