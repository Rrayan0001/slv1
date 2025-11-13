"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  children: ReactNode;
  animation?: "blurInUp" | "fadeIn" | "slideUp";
  by?: "character" | "word" | "line";
  duration?: number;
  className?: string;
}

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  duration = 5,
  className,
}: TextAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const text = typeof children === "string" ? children : String(children);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "blurInUp":
        return "animate-blur-in-up";
      case "fadeIn":
        return "animate-fade-in";
      case "slideUp":
        return "animate-slide-up";
      default:
        return "animate-blur-in-up";
    }
  };

  const renderText = () => {
    if (by === "character") {
      return text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block",
            isVisible && getAnimationClass()
          )}
          style={{
            animationDelay: `${(index * duration) / text.length}s`,
            animationDuration: `${duration}s`,
            animationFillMode: "both",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    } else if (by === "word") {
      return text.split(" ").map((word, index) => (
        <span
          key={index}
          className={cn(
            "inline-block",
            isVisible && getAnimationClass()
          )}
          style={{
            animationDelay: `${(index * duration) / text.split(" ").length}s`,
            animationDuration: `${duration}s`,
            animationFillMode: "both",
            marginRight: "0.25em",
          }}
        >
          {word}
        </span>
      ));
    } else {
      return (
        <span
          className={cn(
            "inline-block",
            isVisible && getAnimationClass()
          )}
          style={{
            animationDuration: `${duration}s`,
            animationFillMode: "both",
          }}
        >
          {text}
        </span>
      );
    }
  };

  return <span className={className}>{renderText()}</span>;
}

