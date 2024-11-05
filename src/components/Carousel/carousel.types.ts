import { StaticImageData } from "next/image";

export interface CarouselItemProps {
  src: StaticImageData;
  id: number;
  text?: string;
}

export interface CarouselProps {
  slides: CarouselItemProps[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
