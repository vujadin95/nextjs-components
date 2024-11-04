import { Link } from "@/i18n/routing";
import Image from "next/image";
import logoBlack from "../../../public/logo/superheat-black.png";
import logoLight from "../../../public/logo/superheat-white.png";

const Logo = () => {
  return (
    <Link className="relative select-none flex items-center" href={"/"}>
      <Image
        src={logoBlack}
        alt="Superheat Logo for light theme"
        width={250}
        height={60}
        className="dark:hidden w-auto object-contain"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo for dark theme"
        width={250}
        height={60}
        className="hidden dark:block w-auto object-contain"
      />
    </Link>
  );
};
export default Logo;
