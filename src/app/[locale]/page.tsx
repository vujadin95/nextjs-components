import Brands from "@/components/Brands/Brands";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="my-3 flex h-[400px] flex-col items-center justify-center overflow-hidden md:my-5 md:h-[500px]">
        <Brands />
      </section>
    </>
  );
}
