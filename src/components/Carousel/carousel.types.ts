import { StaticImageData } from "next/image";
export interface CarouselProps {
  slides: (string | StaticImageData)[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
