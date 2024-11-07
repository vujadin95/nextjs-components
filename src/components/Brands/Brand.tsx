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
        "shrink-0 rounded-md border border-border shadow-xl",
        bgColor,
        bgColor && "text-black",
      )}
    >
      <div className="relative flex h-28 w-48 items-center justify-center">
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 140px) 100vw"
          className="object-scale-down"
        />
      </div>
    </a>
  );
};

export default Brand;
