"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselProps } from "./carousel.types";
import { cn } from "@/utils/utils";

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 5000,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(autoSlide);

  const prev = () => {
    setIsAutoSliding(false);
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setIsAutoSliding(false);
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  const nextAutoSlide = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!isAutoSliding) return;
    const slideInterval = setInterval(nextAutoSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [isAutoSliding]);

  const goToSlide = (clickedImageIndex: number) => {
    setIsAutoSliding(false);
    setCurr(clickedImageIndex);
  };

  return (
    <div className="relative h-full overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={"some"}
            className="w-full shrink-0 object-cover"
          />
        ))}
      </div>
      {/* control arrows */}
      <div className="group-showArrow absolute inset-0 flex items-center justify-between bg-gradient-to-r from-black/40 from-5% via-transparent to-black/40 to-95% px-4">
        <button
          onClick={prev}
          className="rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      {/* dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-[6px] w-4 cursor-pointer rounded-full bg-black/60 transition-all",
                curr === index && "w-10 bg-black",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
