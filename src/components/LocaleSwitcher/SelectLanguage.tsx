"use client";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { MouseEvent, useRef, useState, useTransition } from "react";
import { cn } from "@/utils/utils";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { useTranslations } from "next-intl";

interface SelectProps {
  languageDetails: { locale: string; label: string; flagPath: string }[];
  defaultLanguage:
    | { locale: string; label: string; flagPath: string }
    | undefined;
}

const SelectLanguage = ({ languageDetails, defaultLanguage }: SelectProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations("localeSwitch");

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const changeLanguage = (event: MouseEvent<HTMLButtonElement>) => {
    const nextLocale = event.currentTarget.id as Locale;
    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
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
        className={cn(
          "flex w-full items-center justify-between gap-1 text-nowrap rounded-md border border-border px-3 py-[6px] transition-colors duration-150 hover:bg-hoverBackground",
          isPending && "text-gray-400",
        )}
      >
        <Globe className="h-4 w-4" />

        <span>{defaultLanguage?.label || "Choose Language"}</span>

        <ChevronDown
          size={16}
          className={cn(
            "transform duration-200 ease-in-out",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-40 rounded-md border border-border bg-background p-1 text-sm shadow-md">
          <span className="-mx-1 mb-1 block border-b border-border px-3 py-2">
            {t("selectLanguageLabel")}
          </span>

          {languageDetails.map((lang) => (
            <button
              disabled={lang.locale === defaultLanguage?.locale}
              key={lang.locale}
              id={lang.locale}
              onClick={changeLanguage}
              className="flex w-full cursor-pointer items-center rounded-sm px-2 py-[6px] hover:bg-border/50 disabled:cursor-auto disabled:text-gray-400 disabled:hover:bg-transparent"
            >
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectLanguage;
