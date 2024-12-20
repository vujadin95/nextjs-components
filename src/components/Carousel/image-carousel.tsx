"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";

interface ImageCarouselProps {
  slides: { src: StaticImageData; id: number }[];
}

export function ImageCarousel({ slides }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = useCallback(() => {
    if (autoplay.current) {
      const newIsPlaying = !isPlaying;
      setIsPlaying(newIsPlaying);
      if (newIsPlaying) {
        autoplay.current.play();
      } else {
        autoplay.current.stop();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setIsPlaying(true);
    });
  }, [api, isPlaying]);

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="group rounded-md"
    >
      <CarouselContent className="rounded-md">
        {slides.map((slide) => (
          <CarouselItem key={slide.id} className="rounded-md">
            <div className="relative h-[400px] w-full rounded-md md:h-[500px] xl:h-[600px]">
              <Image
                src={slide.src}
                alt={`slide image for hero section No.${slide.id}`}
                fill
                sizes="(max-width: 1064px) 100vw, 1064px"
                className="h-full rounded-md object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-5 z-40 hidden opacity-60 sm:group-hover:flex" />
      <CarouselNext className="right-5 z-40 hidden opacity-60 sm:group-hover:flex" />

      <Button
        variant="outline"
        size="icon"
        className="absolute right-3 top-3 h-8 w-8 rounded-full text-primary opacity-60 transition-all hover:opacity-80 sm:h-10 sm:w-10"
        onClick={toggleAutoplay}
      >
        {isPlaying ? <Pause /> : <Play />}
        <span className="sr-only">
          {isPlaying ? "Pause autoplay" : "Play autoplay"}
        </span>
      </Button>
      <div className="absolute bottom-1 left-1/2 z-40 flex h-10 -translate-x-1/2 transform cursor-pointer items-center gap-1.5">
        {slides.map((slide) => (
          <Button
            key={slide.id}
            variant="outline"
            size="icon"
            className={`h-1.5 w-4 border-none p-0 transition-all duration-300 ${
              slide.id === current ? "w-8 bg-primary" : "bg-white"
            }`}
            onClick={() => {
              api?.scrollTo(slide.id - 1);
              api?.plugins().autoplay.reset();
              api?.plugins().autoplay.play();
            }}
          >
            <span className="sr-only">Go to slide {slide.id}</span>
          </Button>
        ))}
      </div>
    </Carousel>
  );
}
