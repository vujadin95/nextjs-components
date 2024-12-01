"use client";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { MenuItem } from "./navigation.types";
import { useState } from "react";
import { usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const DesktopNavigationItem = ({ menu }: MenuItem) => {
  const hasSubMenu = menu?.subMenu?.length;
  const [isHovered, setIsHovered] = useState(false);
  const pathName = usePathname();

  return (
    <li
      className="group/link relative flex items-center rounded-md text-sm duration-200 hover:bg-accent xl:text-base"
      key={menu.title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(false)}
    >
      <Link
        href={menu.href}
        className={cn(
          pathName === menu.href || pathName.startsWith(`${menu.href}`)
            ? "text-blue-500"
            : "",
          "flex cursor-pointer items-center gap-1 px-3 py-2 font-semibold",
        )}
      >
        {menu.title}
        {hasSubMenu && (
          <ChevronDown
            size={16}
            className="duration-200 group-hover/link:rotate-180"
          />
        )}
      </Link>
      {hasSubMenu && isHovered && (
        <div className="group/test absolute top-full hidden w-max rounded-md border border-border bg-background p-4 group-hover/link:grid group-hover/link:duration-200 group-hover/link:animate-in group-hover/link:zoom-in-90">
          <div
            className={`grid gap-4 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu?.map((submenu, i) => (
                <div
                  className="flex cursor-pointer items-center rounded-sm p-1 transition-colors hover:bg-accent"
                  key={i}
                >
                  <Link
                    href={submenu.href}
                    className="group/menubox flex items-center gap-3"
                  >
                    <div className="w-fit rounded-md p-2">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6
                        className={cn(
                          pathName === submenu.href ? "text-blue-500" : "",
                          "font-semibold",
                        )}
                      >
                        {submenu.title}
                      </h6>
                      <p className="max-w-[150px] text-sm">
                        {submenu.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </li>
  );
};
export default DesktopNavigationItem;
