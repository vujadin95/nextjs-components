"use client";
import Carousel from "@/components/Carousel/Carousel";
import img3 from "../../../public/hero-slider-images/3.jpg";
import img4 from "../../../public/hero-slider-images/4.jpg";
import img6 from "../../../public/hero-slider-images/6.jpg";
import img7 from "../../../public/hero-slider-images/7.jpg";
import img8 from "../../../public/hero-slider-images/8.jpg";
import img9 from "../../../public/hero-slider-images/9.jpg";
import img10 from "../../../public/hero-slider-images/10.jpg";
import img11 from "../../../public/hero-slider-images/11.jpg";
import Brands from "@/components/Brands/Brands";

export default function Home() {
  const slidesImage = [
    { src: img3, id: 1 },
    { src: img4, id: 2 },
    { src: img6, id: 3 },
    { src: img7, id: 4 },
    { src: img8, id: 5 },
    { src: img9, id: 6 },
    { src: img10, id: 7 },
    { src: img11, id: 8 },
  ];
  return (
    <>
      <section className="mx-auto mt-4 h-[calc(100vh_-_84px)] w-full max-w-screen-2xl">
        <Carousel slides={slidesImage} />
      </section>
      <section className="my-5 flex h-[500px] flex-col items-center justify-center overflow-hidden">
        <Brands />
      </section>
    </>
  );
}
