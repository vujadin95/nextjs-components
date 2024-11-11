"use client";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MouseEvent, useRef, useState, useTransition } from "react";
import { cn } from "@/utils/utils";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { useTranslations } from "next-intl";

interface SelectProps {
  languageDetails: { locale: string, label: string, flagPath: string }[],
  defaultLanguage: { locale: string, label: string, flagPath: string } | undefined
}

const SelectLanguage = ({ languageDetails, defaultLanguage }: SelectProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('localeSwitch')

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    const nextLocale = event.currentTarget.id as Locale;
    startTransition(() => {
      router.replace(`${pathname}?${new URLSearchParams(searchParams)}`, {
        locale: nextLocale,
      });
      router.refresh();
    });
  };

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("flex justify-between items-center gap-1 text-nowrap w-full rounded-md py-[6px] px-3 border border-border hover:bg-hoverBackground transition-colors duration-150", isPending && 'text-gray-400')}>

        {defaultLanguage?.flagPath && (
          <Image
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

        <div className="right-0 mt-1 absolute bg-background w-40 p-1 rounded-md shadow-md z-10 border border-border text-sm">
          <span className="block px-3 py-2 border-b border-border mb-1">
            {t('selectLanguageLabel')}
          </span>

          {languageDetails.map(lang => (
            <button
              disabled={lang.locale === defaultLanguage?.locale}
              key={lang.locale} id={lang.locale}
              onClick={changeLanguage}
              className="w-full flex items-center cursor-pointer py-[6px] px-2  hover:bg-border/50 disabled:text-gray-400 disabled:cursor-auto disabled:hover:bg-transparent rounded-sm"
            >
              <Image
                src={lang.flagPath}
                loading="lazy"
                alt=""
                width={24}
                height={24}
                className="object-cover me-2"
              />
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}

    </div>
  );
};

export default SelectLanguage;