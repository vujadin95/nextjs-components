import { Link } from "@/i18n/routing";

import TextCarousel from "../Carousel/TextCarousel";
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

const HeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
      <h1 className="text-3xl font-medium lg:text-5xl lg:leading-snug">
        Optimizacija procesa grejanja, hlađenja i klimatizacije.
      </h1>
      <div className="mb-3 mt-2 h-24 w-full text-base lg:mb-8 lg:mt-6 lg:h-28 xl:text-2xl">
        <TextCarousel slides={slidesText} autoSlideInterval={5000} />
      </div>
      <p className="text-base md:text-lg">
        Mi smo inovatori koji neprekidno nastoje da poboljšaju svoje sisteme i
        rešenja.
      </p>
      <Link
        href={"/contact"}
        className="bg-textColor hover:bg-textColor/80 w-fit rounded-md px-4 py-2 text-base font-semibold text-background"
      >
        Contact Us
      </Link>
    </div>
  );
};
export default HeroText;
