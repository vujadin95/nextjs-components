"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselProps } from "./carousel.types";

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
    <div className="overflow-hidden relative h-full">
      <div
        className="h-full w-full flex transition-transform ease-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((src) => (
          <Image
            src={src}
            alt={"some"}
            className="w-full object-cover shrink-0"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between bg-gradient-to-r from-black/40 from-5% via-transparent to-black/40 to-95% px-4">
        <button
          onClick={prev}
          className=" text-white hover:text-white/50 transition-colors duration-200"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="text-white hover:text-white/50 transition-colors duration-200"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <div
              onClick={() => goToSlide(index)}
              className={`
              transition-all w-4 h-2 bg-black border border-white rounded-full cursor-pointer
              ${curr === index ? "w-10" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
