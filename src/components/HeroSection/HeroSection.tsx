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
    <section className="relative mt-5 flex h-[calc(100vh_-_100px)] flex-col items-center justify-center gap-10 lg:flex-row">
      <BackgroundShape />

      <div className="w-full max-w-[450px] lg:w-2/5">
        <HeroText />
      </div>

      <div className="h-[400px] w-full rounded-md lg:h-[600px]">
        <Carousel slides={slidesImage} />
      </div>
    </section>
  );
};
export default HeroSection;
