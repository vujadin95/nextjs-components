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
import ImageMask from "@/components/ImageMask";

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
  // const slidesImageTest = [
  //   { url: '/hero-slider-images/3.jpg', id: 1 },
  //   { url: '/hero-slider-images/4.jpg', id: 2 },
  //   { url: '/hero-slider-images/6.jpg', id: 3 },
  //   { url: '/hero-slider-images/7.jpg', id: 4 },
  //   { url: '/hero-slider-images/8.jpg', id: 5 },
  //   { url: '/hero-slider-images/9.jpg', id: 6 },
  //   { url: '/hero-slider-images/10.jpg', id: 7 },
  //   { url: '/hero-slider-images/11.jpg', id: 8 },
  // ]

  return (
    <>
      <section className="mx-auto mt-4 h-[700px] w-full max-w-screen-2xl">
        <Carousel slides={slidesImage} />
      </section>
      <section className="my-10 h-96 flex flex-col items-center overflow-hidden">
        <div className="mt-10 mb-6 text-center">
          <h2 className="text-6xl mb-2 font-semibold">Our associates</h2>
          <p>We are working only with the best </p>
        </div>
        <Brands />
      </section>
    </>
  );
}
