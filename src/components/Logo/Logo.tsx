import { Link } from "@/i18n/routing";
import Image from "next/image";
import logoBlack from "../../../public/logo/superheat-black.png";
import logoLight from "../../../public/logo/superheat-white.png";

const Logo = () => {
  return (
    <Link className="flex h-[50px] w-full" href={"/"}>
      <Image
        src={logoBlack}
        alt="Superheat logo for light theme"
        sizes="(max-width: 250px) 250px"
        className="object-contain dark:hidden"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo for dark theme"
        sizes="(max-width: 250px) 250px"
        className="hidden object-contain dark:block"
      />
    </Link>
  );
};
export default Logo;
