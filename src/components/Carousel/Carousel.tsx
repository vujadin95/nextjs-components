"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselProps } from "./carousel.types";
import { cn } from "@/utils/utils";

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 3000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  // Reference to hold the interval ID
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    resetInterval();
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
    resetInterval();
  };

  const nextAutoSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  // Function to reset the interval when the user interacts
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (autoSlide) {
      intervalRef.current = setInterval(next, autoSlideInterval);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;

    // Initialize auto-slide if enabled
    intervalRef.current = setInterval(next, autoSlideInterval);

    // Cleanup interval on unmount or when autoSlide is turned off
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoSlide]);

  const goToSlide = (clickedImageIndex: number) => {
    setCurr(clickedImageIndex);
    resetInterval();
  };

  return (
    <div className="relative h-full w-full select-none overflow-hidden rounded-md">
      <div
        className="flex h-full w-full rounded-md bg-transparent transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={`hero image number ${slide.id}`}
            placeholder="blur"
            loading="lazy"
            className="h-full w-full shrink-0 rounded-md object-cover"
          />
        ))}
      </div>
      {/* control arrows */}
      <div className="group absolute inset-0 flex items-center justify-between px-4">
        <button
          aria-label="previous image"
          onClick={prev}
          className="rounded-full"
        >
          <ChevronLeft className="h-8 w-8 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-black/60 group-hover:block lg:hidden lg:h-10 lg:w-10" />
        </button>
        <button aria-label="next image" onClick={next} className="rounded-full">
          <ChevronRight className="h-8 w-8 cursor-pointer rounded-full bg-black/40 p-2 text-white transition-colors duration-200 hover:bg-black/60 group-hover:block lg:hidden lg:h-10 lg:w-10" />
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              aria-label="choose image from slides"
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2.5 w-2.5 cursor-pointer rounded-full bg-white/50 transition-all duration-200",
                curr === index && "scale-150 bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
