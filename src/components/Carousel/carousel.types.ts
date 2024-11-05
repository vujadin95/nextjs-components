import { StaticImageData } from "next/image";

export interface CarouselItemProps {
  src: string | StaticImageData;
  id: number;
  text?: string;
}

export interface CarouselProps {
  slides: CarouselItemProps[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
