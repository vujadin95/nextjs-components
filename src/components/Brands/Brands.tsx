import Brand from "./Brand";
import { brandsCollecton } from "./brandsCollection";

const Brands = () => {
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="mb-2 bg-gradient-to-l from-neutral-900 to-red-700 bg-clip-text text-7xl font-semibold uppercase text-transparent dark:bg-gradient-to-l dark:from-slate-50 dark:to-red-700 dark:bg-clip-text dark:text-transparent">
          Our partners
        </h2>
        <p className="m-4 text-2xl font-semibold">
          We are working only with the best
        </p>
      </div>
      <div className="slide-mask group flex w-full select-none gap-5 overflow-hidden">
        <div className="group-hover:paused flex animate-slide-left items-center justify-between gap-5">
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
        <div
          className="group-hover:paused flex animate-slide-left items-center gap-5"
          aria-hidden="true"
        >
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
