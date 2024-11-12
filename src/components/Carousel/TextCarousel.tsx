import { useState, useEffect, useRef } from "react";
import { cn } from "@/utils/utils";

interface TextCarouselItemProps {
 text: string;
 id: number;
}

interface TextCarouselProps {
 slides: TextCarouselItemProps[];
 autoSlide?: boolean;
 autoSlideInterval?: number;
}

export default function TextCarousel({
 slides,
 autoSlide = true,
 autoSlideInterval = 3000,
}: TextCarouselProps) {

 const [curr, setCurr] = useState(0);
 const intervalRef = useRef<NodeJS.Timeout | null>(null);

 const next = () => {
  setCurr((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
 };

 const goToSlide = (clickedImageIndex: number) => {
  setCurr(clickedImageIndex);

  // Reset the interval when a slide is clicked
  if (autoSlide) {
   if (intervalRef.current) {
    clearInterval(intervalRef.current);
   }
   intervalRef.current = setInterval(next, autoSlideInterval);
  }
 };

 useEffect(() => {
  if (!autoSlide) return;

  // Set the initial interval when autoSlide is enabled
  intervalRef.current = setInterval(next, autoSlideInterval);

  // Clear interval on cleanup
  return () => {
   if (intervalRef.current) {
    clearInterval(intervalRef.current);
   }
  };
 }, [autoSlide, autoSlideInterval]);

 return (
  <div className="relative h-full w-full select-none rounded-md overflow-hidden">
   <div
    className="flex justify-end w-full bg-transparent rounded-md transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(${curr * 100}%)` }}
   >
    {slides.map((slide) => (
     <h2 key={slide.id} className="w-full block shrink-0">{slide.text}</h2>
    ))}
   </div>

   {/* Dots */}
   <div className="absolute bottom-1 left-0 right-0">
    <div className="flex items-center justify-center gap-2">
     {slides.map((slide, index) => (
      <div
       key={slide.id}
       onClick={() => goToSlide(index)}
       className={cn(
        "h-2 w-2 cursor-pointer rounded-full bg-black/60 transition-all duration-200 hover:scale-150",
        curr === index && "scale-125 dark:bg-white bg-black",
       )}
      />
     ))}
    </div>
   </div>
  </div>
 );
}
