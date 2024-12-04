import { useTranslations } from "next-intl";
import Brand from "./Brand";
import { brandsCollecton } from "./brandsCollection";

const Brands = () => {
  const t = useTranslations("HomePage.brands");
  return (
    <>
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-medium lg:text-5xl">
          {t("heading")}
        </h2>
        <h3 className="m-4 text-2xl">{t("subheading")}</h3>
      </div>
      <div className="slide-mask group flex w-full select-none gap-5 overflow-hidden">
        <div className="flex animate-slide-left items-center justify-between gap-5 group-hover:paused">
          {brandsCollecton.map((brand) => (
            <Brand
              key={brand.id}
              path={brand.path}
              img={brand.img}
              brandName={brand.brandName}
              bgColor={brand.bgColor}
            />
          ))}
        </div>
        <div className="flex animate-slide-left items-center gap-5 group-hover:paused">
          {brandsCollecton.map((brand) => (
            <Brand
              key={brand.id}
              path={brand.path}
              img={brand.img}
              brandName={brand.brandName}
              bgColor={brand.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Brands;
