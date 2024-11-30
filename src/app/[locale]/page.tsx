import Brands from "@/components/Brands/Brands";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="my-5 flex h-[500px] flex-col items-center justify-center overflow-hidden">
        <Brands />
      </section>

    </>
  );
}
