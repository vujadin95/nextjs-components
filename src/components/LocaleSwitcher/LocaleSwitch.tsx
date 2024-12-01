"use client";

import { useTransition } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe } from "lucide-react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function LocaleSwitch() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("localeSwitch");

  const languangeOptions = [
    { label: t("english.label"), locale: t("english.locale") },
    { label: t("serbian.label"), locale: t("serbian.locale") },
  ];

  function onChange(value: string) {
    const nextLocale = value as Locale;

    startTransition(() => {
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace(`${pathname}?${new URLSearchParams(searchParams)}`, {
        locale: nextLocale,
      });
      router.refresh();
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isPending}
          variant="outline"
          className="group ml-auto flex w-[132px] items-center gap-2 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Globe className="h-4 w-4" />
          {locale === "en" ? "English" : "Srpski"}
          <ChevronDown className="h-4 w-4 transition-transform duration-150 group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-background">
        <DropdownMenuLabel className="font-medium">
          {t("selectLanguageLabel")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languangeOptions.map((language) => (
          <DropdownMenuItem
            key={language.locale}
            onSelect={() => onChange(language.locale)}
            className="cursor-pointer"
            disabled={language.locale === locale}
          >
            {language.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
