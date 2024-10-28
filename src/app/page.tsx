"use client";
import Carousel from "@/components/Carousel/Carousel";
import img3 from "@/components/Carousel/images/3.jpg";
import img4 from "@/components/Carousel/images/4.jpg";
import img6 from "@/components/Carousel/images/6.jpg";
import img7 from "@/components/Carousel/images/7.jpg";
import img8 from "@/components/Carousel/images/8.jpg";

export default function Home() {
  const slides = [img3, img4, img6, img7, img8];
  return (
    <div className="space-y-5">
      <div className="max-w-screen-2xl h-[800px]">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
