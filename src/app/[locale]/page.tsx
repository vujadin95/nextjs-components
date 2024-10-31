"use client";
import Carousel from "@/components/Carousel/Carousel";
import img3 from "@/components/Carousel/images/3.jpg";
import img4 from "@/components/Carousel/images/4.jpg";
import img6 from "@/components/Carousel/images/6.jpg";
import img7 from "@/components/Carousel/images/7.jpg";
import img8 from "@/components/Carousel/images/8.jpg";

export default function Home() {
  const slides = [
    { src: img3, id: 1 },
    { src: img4, id: 2 },
    { src: img6, id: 3 },
    { src: img7, id: 4 },
    { src: img8, id: 5 },
  ];

  return (
    <div className="space-y-5">
      <div className="max-w-screen-2xl h-[800px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
