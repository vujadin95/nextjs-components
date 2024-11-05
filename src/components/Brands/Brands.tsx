import Brand from "./Brand";
import { brandsCollecton } from "./brandsCollection";

const Brands = () => {
  return (
    <div className="group flex gap-5 overflow-hidden">
      <div className="animate-slide-left group-hover:paused flex items-center gap-5">
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
        className="animate-slide-left group-hover:paused flex items-center gap-5"
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
  );
};
export default Brands;
