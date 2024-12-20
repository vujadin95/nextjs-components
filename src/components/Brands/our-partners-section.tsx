import { useTranslations } from "next-intl";
import { brandsCollecton } from "./brandsCollection";
import { OurPartnersCarousel } from "./our-partners-carousel";

const OurPartnersSection = () => {
  const t = useTranslations("HomePage.brands");
  return (
    <div className="py-10">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-medium lg:text-5xl">
          {t("heading")}
        </h2>
        <h3 className="m-4 text-2xl">{t("subheading")}</h3>
      </div>
      <OurPartnersCarousel brands={brandsCollecton} />
    </div>
  );
};
export default OurPartnersSection;
