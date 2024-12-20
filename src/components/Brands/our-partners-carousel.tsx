"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import PartnerDetails from "./partner-details";

interface OurPartnerCarouselProps {
  brands: {
    id: number;
    path: string;
    brandName: string;
    img: string;
    bgColor?: string;
  }[];
}

export function OurPartnersCarousel({ brands }: OurPartnerCarouselProps) {
  const autoscroll = useRef(
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      startDelay: 500,
    }),
  );
  return (
    <Carousel
      plugins={[autoscroll.current]}
      opts={{
        align: "start",
        dragFree: true,
        loop: true,
      }}
      className="slide-mask"
    >
      <CarouselContent className="py-10">
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="mx-2.5 aspect-video basis-1/3 pl-0 shadow-lg sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-[12.5%]"
          >
            <PartnerDetails
              path={brand.path}
              brandName={brand.brandName}
              bgColor={brand.bgColor}
              img={brand.img}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
