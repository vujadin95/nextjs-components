import HeroText from "./HeroText";
import BackgroundShape from "./BackgroundShape";
import Cards from "./Cards";
import { ImageCarousel } from "../Carousel/image-carousel";
import { slidesImage } from "./hero-carousel-images";

const HeroSection = () => {
  return (
    <>
      <section className="relative mt-5 pt-8 lg:pt-12">
        <BackgroundShape />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
          <div className="w-full shrink-0 lg:w-2/5 lg:max-w-[400px]">
            <HeroText />
          </div>
          <div className="h-[400px] w-full rounded-md shadow-xl md:h-[500px] xl:h-[600px]">
            <ImageCarousel slides={slidesImage} />
          </div>
        </div>
        <Cards />
      </section>
    </>
  );
};
export default HeroSection;
