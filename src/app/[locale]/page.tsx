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
import TextCarousel from "@/components/Carousel/TextCarousel";

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
  const slidesText = [
    {
      text: "Pružamo kompletnu uslugu, od projektovanja do puštanja u rad.",
      id: 1,
    },
    { text: "Realizujemo standardne i posebno prilagođene projekte.", id: 2 },
    { text: "Imamo sopstvenu proizvodnju i inženjering.", id: 3 },
    { text: "Mi smo kompetentan i pouzdan partner.", id: 4 },
    { text: "Stalno razvijamo nove tehnologije i rešenja.", id: 5 },
    {
      text: "Životna sredina ostaje našoj deci, učinite nešto dobro za nju.",
      id: 6,
    },
    {
      text: "Mi smo inovatori koji neprekidno nastoje da poboljšaju svoje sisteme i rešenja.",
      id: 7,
    },
    {
      text: "Naši sistemi za uštedu mogu umanjiti Vaše račune za struju za 35%.",
      id: 8,
    },
    { text: "Unapređujemo svet grejanja, hlađenja i klimatizacije.", id: 9 },
  ];
  return (
    <>
      <section className="mt-5 flex h-[calc(100vh_-_100px)] flex-col items-center gap-4 lg:flex-row">
        <div className="flex h-full w-full flex-col items-center justify-center text-center lg:w-2/5 lg:items-start lg:text-left">
          <h1 className="text-wrap text-2xl font-extrabold tracking-wide lg:text-5xl lg:leading-tight">
            Optimizacija procesa grejanja, hlađenja i klimatizacije.
          </h1>
          <div className="mb-3 mt-2 h-24 w-[300px] text-base lg:mb-8 lg:mt-6 lg:h-28 lg:w-[400px] xl:text-2xl">
            <TextCarousel slides={slidesText} autoSlideInterval={5000} />
          </div>
          <button className="w-fit rounded-md bg-textColor px-4 py-2 text-base font-bold text-background hover:bg-textColor/80 lg:px-8 lg:py-4 xl:text-2xl">
            Contact Us
          </button>
        </div>

        <div className="h-[400px] w-full lg:h-[650px] xl:w-3/5">
          <Carousel slides={slidesImage} />
        </div>
      </section>
      <section className="my-5 flex h-[500px] flex-col items-center justify-center overflow-hidden">
        <Brands />
      </section>
    </>
  );
}
