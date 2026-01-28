"use client";

import * as React from "react";
import { cn } from "../../utils/cn";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
}: CarouselProps) {
  const [current, setCurrent] = React.useState(0);
  const length = children.length;

  const next = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prev = React.useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  // autoplay
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                current === index
                  ? "bg-primary w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
