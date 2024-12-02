import { Link } from "@/i18n/routing";
import Image from "next/image";
import logoBlack from "../../../public/logo/superheat-black.png";
import logoLight from "../../../public/logo/superheat-white.png";

const Logo = () => {
  return (
    <Link className="w-full max-w-[250px]" href={"/"}>
      <Image
        src={logoBlack}
        alt="Superheat logo for light theme"
        className="h-auto w-full object-contain dark:hidden"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo for dark theme"
        className="hidden h-auto w-full object-contain dark:block"
      />
    </Link>
  );
};
export default Logo;
