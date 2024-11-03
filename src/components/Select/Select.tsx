"use client";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MouseEvent, useTransition } from "react";
import SerbiaFlagSrc from "../../../public/flags/serbia.png";
import EnglishFlagSrc from "../../../public/flags/united-kingdom.png";
import Dropdown from "../Dropdown/Dropdown";

interface SelectProps {
  defaultValue: string;
  label?: string;
  languages: { english: string; serbian: string };
}

const Select = ({ defaultValue, languages }: SelectProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    const nextLocale = event.currentTarget.id as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };
  console.log(defaultValue, languages);

  return (
    <div className="relative group/link h-[60px] z-50 flex items-center">
      <span
        className={
          isPending
            ? "flex font-semibold items-center gap-1 cursor-pointer px-3 py-2 rounded-sm group-hover/link:text-border/50 transition-all duration-200 text-gray-400 border w-36 border-border"
            : "flex font-semibold items-center gap-1 cursor-pointer px-3 py-2 rounded-sm group-hover/link:bg-border/50 transition-all duration-200  [&:disabled]:opacity-30 border w-36 border-border"
        }
      >
        <Image
          src={defaultValue === "sr" ? SerbiaFlagSrc : EnglishFlagSrc}
          width={24}
          height={24}
          alt="Language Flag"
          className="mr-1"
        />
        <span>
          {defaultValue === "sr" ? languages.serbian : languages.english}
        </span>

        <ChevronDown
          size={16}
          className="group-hover/link:rotate-180 duration-150"
        />
      </span>
      <div
        className={
          "absolute hidden top-[60px] w-full py-2 px-1 rounded-md bg-background border border-border group-hover/link:block"
        }
      >
        <div className="cursor-pointer space-y-2 flex flex-col">
          <button
            id="en"
            onClick={changeLanguage}
            className="flex gap-1 hover:bg-textColor/20 py-1 px-2"
          >
            <Image
              src={EnglishFlagSrc}
              width={24}
              height={24}
              alt="English Flag"
              className="mr-1"
            />
            {languages.english}
          </button>
          <button
            id="sr"
            onClick={changeLanguage}
            className="flex gap-1 hover:bg-textColor/20 py-1 px-2"
          >
            <Image
              src={SerbiaFlagSrc}
              width={24}
              height={24}
              alt="Serbian Flag"
              className="mr-1"
            />
            {languages.serbian}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
