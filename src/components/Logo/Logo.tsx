import Link from "next/link";
import Image from "next/image";
import logoBlack from "./images/superheat-black.png";
import logoLight from "./images/superheat-white.png";

const Logo = () => {
  return (
    <Link
      className="relative flex  w-full max-w-[180px] md:max-w-[250px] items-center justify-center h-[60px]"
      href={"/"}
    >
      <Image
        src={logoBlack}
        alt="Superheat Logo"
        fill
        className="dark:hidden object-contain"
      />
      <Image
        src={logoLight}
        alt="Superheat Logo"
        fill
        className="hidden dark:block object-contain"
      />
    </Link>
  );
};
export default Logo;
