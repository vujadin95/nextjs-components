import { cn } from "@/utils/utils";
import Image from "next/image";

interface BrandType {
  path: string;
  img: string;
  brandName: string;
  bgColor?: string;
}
const Brand = ({ path, brandName, img, bgColor }: BrandType) => {
  return (
    <a
      href={path}
      target="_blank"
      className={cn(
        "shrink-0 rounded-md shadow-xl",
        bgColor,
        bgColor && "text-black",
      )}
    >
      <div className="relative flex h-20 w-40 items-center justify-center md:h-28 md:w-48">
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 192px) 192px"
          className="w-full object-scale-down"
        />
      </div>
    </a>
  );
};

export default Brand;
