import { cn } from "@/utils/utils";
import Image from "next/image";

interface BrandType {
  path: string;
  img: string;
  brandName: string;
  bgColor?: string;
}
const PartnerDetails = ({ path, brandName, img, bgColor }: BrandType) => {
  return (
    <a
      href={path}
      target="_blank"
      className="flex h-full w-full items-center justify-center rounded-md"
    >
      <div
        className={cn(
          "relative h-full w-full rounded-md transition-transform duration-200 hover:scale-[1.15]",
          bgColor,
          bgColor && "text-black",
        )}
      >
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 192px) 192px"
          className="w-full rounded-md object-scale-down"
        />
      </div>
    </a>
  );
};

export default PartnerDetails;
