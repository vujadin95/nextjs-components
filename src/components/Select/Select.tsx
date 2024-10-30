"use client";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import { MouseEvent, useTransition } from "react";

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

  return (
    <div className="relative group/link hover:h-[60px] flex items-center">
      <span
        className={
          isPending
            ? "flex font-semibold items-center gap-1 cursor-pointer px-3 py-1 rounded-sm group-hover/link:text-textHover transition-all duration-200 text-gray-400"
            : "flex font-semibold items-center gap-1 cursor-pointer px-3 py-1 rounded-sm group-hover/link:text-textHover transition-all duration-200  [&:disabled]:opacity-30"
        }
      >
        {defaultValue}
        <ChevronDown
          size={16}
          className="group-hover/link:rotate-180 duration-200"
        />
      </span>
      <div className="absolute top-[60px] p-2 rounded-md  bg-background/80 hidden group-hover/link:grid rounded-tl-none rounded-tr-none w-full">
        <div className="cursor-pointer space-y-2">
          <button id="en" onClick={changeLanguage}>
            {languages.english}
          </button>
          <button id="sr" onClick={changeLanguage}>
            {languages.serbian}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Select;
