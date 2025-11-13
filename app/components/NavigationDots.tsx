"use client";

interface NavigationDotsProps {
  totalSlides: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

export default function NavigationDots({
  totalSlides,
  currentSlide,
  onDotClick,
}: NavigationDotsProps) {
  return (
    <>
      {/* Desktop - Vertical dots on the right */}
      <div className="hidden md:flex absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 sm:gap-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Navigate to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile - Horizontal dots at the bottom */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white shadow-lg scale-125 w-6"
                : "bg-white/40"
            }`}
            aria-label={`Navigate to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

