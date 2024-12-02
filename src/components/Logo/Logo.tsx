import { Link } from "@/i18n/routing";
import Image from "next/image";
import logoBlack from "../../../public/logo/superheat-black.png";
import logoLight from "../../../public/logo/superheat-white.png";

const Logo = () => {
  return (
    <Link className="flex w-full max-w-[250px]" href={"/"}>
      <div className="relative h-[52px] w-full dark:hidden">
        <Image
          src={logoBlack}
          alt="Superheat logo for light theme"
          fill
          sizes="(max-width: 250px) 250px"
          className="object-contain"
        />
      </div>
      <div className="relative hidden h-[52px] w-full dark:block">
        <Image
          src={logoLight}
          alt="Superheat Logo for dark theme"
          fill
          sizes="(max-width: 250px) 250px"
          className="object-contain"
        />
      </div>
    </Link>
  );
};
export default Logo;
