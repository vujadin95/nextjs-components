"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselProps } from "./carousel.types";
import { cn } from "@/utils/utils";

export default function Carousel({
  slides,
  autoSlide = true,
  autoSlideInterval = 4000,
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
    <div className="relative h-full w-full select-none overflow-hidden rounded-md">
      <div
        className="flex h-full w-full rounded-md transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide) => (
          <Image
            key={slide.id}
            src={slide.src}
            alt={"some"}
            placeholder="blur"
            loading="lazy"
            className="h-auto w-full shrink-0 rounded-md object-cover"
          />
        ))}
      </div>
      {/* control arrows */}

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <ChevronLeft
          onClick={prev}
          size={40}
          className="cursor-pointer rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        />
        <ChevronRight
          size={40}
          onClick={next}
          className="cursor-pointer rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        />
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-[6px] w-4 cursor-pointer rounded-full bg-black/60 transition-all duration-200",
                curr === index && "w-10 bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const TestCarousel = ({
  slides,
  autoSlide = true,
  autoSlideInterval = 4000,
}: {
  slides: { url: string; id: number }[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) => {
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
    <div className="relative h-full w-full select-none overflow-hidden">
      <div
        className="z-50 flex h-full w-full bg-cover bg-center duration-700"
        style={{ backgroundImage: `url(${slides[curr].url})` }}
      >
        {/* <Image
          key={slides[curr].id}
          src={slides[curr].src}
          alt={"some"}
          placeholder="blur"
          className="w-full h-auto shrink-0 object-cover"
        /> */}
      </div>
      {/* control arrows */}

      <div className="absolute inset-0 flex items-center justify-between bg-gradient-to-r from-black/40 from-5% via-transparent to-black/40 to-95% px-4">
        <ChevronLeft
          onClick={prev}
          size={40}
          className="cursor-pointer rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        />
        <ChevronRight
          size={40}
          onClick={next}
          className="cursor-pointer rounded-full bg-black/20 p-2 text-white transition-colors duration-200 hover:bg-black/40"
        />
      </div>

      {/* dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-[6px] w-4 cursor-pointer rounded-full bg-black/60 transition-all duration-200",
                curr === index && "w-10 bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
