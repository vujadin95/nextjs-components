import Brand from "./Brand";
import { brandsCollecton } from "./brandsCollection";

const Brands = () => {
  return (
    <>
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-medium uppercase lg:text-5xl">
          Our partners
        </h2>
        <p className="m-4 text-2xl">We are working only with the best</p>
      </div>
      <div className="slide-mask group flex w-full select-none gap-5 overflow-hidden">
        <div className="animate-slide-left flex items-center justify-between gap-5 group-hover:paused">
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
          className="animate-slide-left flex items-center gap-5 group-hover:paused"
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
