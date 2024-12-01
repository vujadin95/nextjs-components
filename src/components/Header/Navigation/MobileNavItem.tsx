"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MenuTypes } from "./navigation.types";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
interface MobileNavItemProps {
  menu: MenuTypes;
  closeNav: () => void;
}

const MobileNavItem = ({ menu, closeNav }: MobileNavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubMenu = menu?.subMenu?.length;
  const pathname = usePathname();

  return (
    <li key={menu.title}>
      <span
        className="relative flex cursor-pointer items-center justify-between rounded-md py-4"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Link
          href={menu.href}
          onClick={closeNav}
          className={cn(
            pathname === menu.href || pathname.startsWith(`${menu.href}`)
              ? "text-blue-500"
              : "",
            !hasSubMenu && "w-full",
          )}
        >
          {menu.title}
        </Link>
        {hasSubMenu && (
          <ChevronDown className={`ml-auto ${isOpen && "rotate-180"} `} />
        )}
      </span>
      {isOpen && hasSubMenu && (
        <ul className="ml-5">
          {menu.subMenu?.map((subm) => (
            <li
              key={subm.title}
              className="flex cursor-pointer items-center gap-x-2 p-2"
            >
              <subm.icon className="h-8 w-8 rounded-sm p-1" />

              <Link
                onClick={closeNav}
                href={subm.href}
                className={cn(
                  pathname === subm.href ? "text-blue-500" : "",
                  "w-full",
                )}
              >
                {subm.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default MobileNavItem;
