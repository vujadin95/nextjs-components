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
    { text: "Pružamo kompletnu uslugu, od projektovanja do puštanja u rad.", id: 1 },
    { text: "Realizujemo standardne i posebno prilagođene projekte.", id: 2 },
    { text: "Imamo sopstvenu proizvodnju i inženjering.", id: 3 },
    { text: "Mi smo kompetentan i pouzdan partner.", id: 4 },
    { text: "Stalno razvijamo nove tehnologije i rešenja.", id: 5 },
    { text: "Životna sredina ostaje našoj deci, učinite nešto dobro za nju.", id: 6 },
    { text: "Mi smo inovatori koji neprekidno nastoje da poboljšaju svoje sisteme i rešenja.", id: 7 },
    { text: "Naši sistemi za uštedu mogu umanjiti Vaše račune za struju za 35%.", id: 8 },
    { text: "Unapređujemo svet grejanja, hlađenja i klimatizacije.", id: 9 },
  ]
  return (
    <>
      <section className="h-[calc(100vh_-_100px)] flex flex-col lg:flex-row items-center gap-4 mt-5">

        <div className="lg:w-2/5 h-full flex flex-col w-full text-center items-center lg:text-left lg:items-start justify-center">
          <h1 className="text-2xl  lg:text-5xl font-extrabold lg:leading-tight tracking-wide text-wrap">Optimizacija procesa grejanja, hlađenja i klimatizacije.</h1>
          <div className="text-base xl:text-2xl w-[300px] lg:w-[400px] mt-2 mb-3 lg:mt-6 lg:mb-8 h-24 lg:h-28">
            <TextCarousel slides={slidesText} autoSlideInterval={5000} />
          </div>
          <button
            className="px-4 py-2 lg:px-8 lg:py-4 bg-textColor text-background w-fit font-bold rounded-md text-base xl:text-2xl hover:bg-textColor/80"
          >
            Contact Us
          </button>
        </div>

        <div className="w-full xl:w-3/5 h-full">
          <Carousel slides={slidesImage} />
        </div>
      </section>
      <section className="my-5 flex h-[500px] flex-col items-center justify-center overflow-hidden">
        <Brands />
      </section>
    </>
  );
}
