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
  const t = useTranslations('themeSwitch');
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const changeTheme = (theme: string) => {
    setTheme(theme)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative select-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("flex justify-between items-center rounded-md p-[9px] border border-border hover:bg-hoverBackground transition-colors duration-150")}>
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>

      {isOpen && (
        <div className="right-0 mt-1 absolute bg-background w-32 py-1 rounded-md shadow-md z-10 border border-border text-sm">
          <span
            onClick={() => changeTheme('light')}
            className="block py-[6px] mx-1 rounded-sm px-2 hover:bg-hoverBackground cursor-pointer">{t('light')}</span>
          <span
            onClick={() => changeTheme('dark')}
            className="block py-[6px] px-2 mx-1 rounded-sm hover:bg-hoverBackground cursor-pointer">{t('dark')}</span>
          <span
            onClick={() => changeTheme('system')}
            className="block py-[6px] px-2 mx-1 rounded-sm hover:bg-hoverBackground cursor-pointer">{t('system')}</span>
        </div>
      )}

    </div>)
}
