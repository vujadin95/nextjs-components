"use client";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { MouseEvent, useRef, useState, useTransition } from "react";
import { cn } from "@/utils/utils";
import { useClickOutside } from "@/utils/hooks/useClickOutside";

interface SelectProps {
  languageDetails: { locale: string, label: string, flagPath: string }[],
  defaultLanguage: { locale: string, label: string, flagPath: string } | undefined
}

const SelectLanguage = ({ languageDetails, defaultLanguage }: SelectProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

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
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("flex justify-between items-center gap-1 text-nowrap w-full rounded-sm py-2 px-3 border border-border hover:bg-hoverBackground transition-colors duration-150", isPending && 'text-gray-400')}>

        {defaultLanguage?.flagPath && (<Image
          src={defaultLanguage?.flagPath}
          alt="Languange Image"
          width={24}
          height={24}
        />)
        }
        <span>{defaultLanguage?.label || "Choose Language"}</span>

        <ChevronDown
          size={16}
          className={cn("transform duration-200 ease-in-out", isOpen && "rotate-180")}
        />
      </button>
      {isOpen && (
        <ul className="top-full right-0 mt-2 absolute bg-background w-max py-2 rounded-md shadow-md z-10 border border-border">
          {languageDetails.map(lang => (
            <button disabled={lang.locale === defaultLanguage?.locale} key={lang.locale} id={lang.locale} onClick={changeLanguage} className="w-full flex items-center cursor-pointer px-3 hover:bg-border/50 py-1 disabled:text-gray-400 disabled:cursor-not-allowed">
              <Image src={lang.flagPath} loading="lazy" alt="" width={24} height={24} className="object-cover me-2" />
              <span>{lang.label}</span>
            </button>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SelectLanguage;