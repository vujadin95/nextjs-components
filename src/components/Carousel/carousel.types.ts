import { StaticImageData } from "next/image";

export interface CarouselItemProps {
  src: string | StaticImageData;
  id: number;
}

export interface CarouselProps {
  slides: CarouselItemProps[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
