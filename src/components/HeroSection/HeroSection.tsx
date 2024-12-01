import Carousel from "../Carousel/Carousel";
import HeroText from "./HeroText";
import img3 from "../../../public/hero-slider-images/3.jpg";
import img4 from "../../../public/hero-slider-images/4.jpg";
import img6 from "../../../public/hero-slider-images/6.jpg";
import img7 from "../../../public/hero-slider-images/7.jpg";
import img8 from "../../../public/hero-slider-images/8.jpg";
import img9 from "../../../public/hero-slider-images/9.jpg";
import img10 from "../../../public/hero-slider-images/10.jpg";
import img11 from "../../../public/hero-slider-images/11.jpg";
import BackgroundShape from "./BackgroundShape";
import Cards from "./Cards";

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

const HeroSection = () => {
  return (
    <>
      <section className="relative mt-5 pt-8 lg:pt-12">
        <BackgroundShape />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <div className="w-full shrink-0 lg:w-2/5 lg:max-w-[400px]">
            <HeroText />
          </div>
          <div className="h-[400px] w-full rounded-md shadow-xl md:h-[500px] lg:h-[600px]">
            <Carousel slides={slidesImage} />
          </div>
        </div>
        <Cards />
      </section>
    </>
  );
};
export default HeroSection;
