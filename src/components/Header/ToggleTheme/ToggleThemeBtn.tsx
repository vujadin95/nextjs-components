"use client";

import { Moon, Sun } from "lucide-react";
import { useState, useRef } from "react";
import { useTheme } from "next-themes";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { cn } from "@/utils/utils";
import { useTranslations } from "next-intl";

export default function ThemeSwitch() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("themeSwitch");
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const changeTheme = (theme: string) => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between rounded-md border border-border p-[9px] transition-colors duration-150 hover:bg-hoverBackground",
        )}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 flex w-32 flex-col rounded-md border border-border bg-background py-1 text-sm shadow-md">
          <button
            onClick={() => changeTheme("light")}
            className="mx-1 cursor-pointer rounded-sm px-2 py-1.5 text-left hover:bg-hoverBackground"
          >
            {t("light")}
          </button>
          <button
            onClick={() => changeTheme("dark")}
            className="mx-1 cursor-pointer rounded-sm px-2 py-[6px] text-left hover:bg-hoverBackground"
          >
            {t("dark")}
          </button>
          <button
            onClick={() => changeTheme("system")}
            className="mx-1 block cursor-pointer rounded-sm px-2 py-[6px] text-left hover:bg-hoverBackground"
          >
            {t("system")}
          </button>
        </div>
      )}
    </div>
  );
}
