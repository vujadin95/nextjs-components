import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { MenuItem } from "./navigation.types";

const DesktopNavigationItem = ({ menu }: MenuItem) => {
  const hasSubMenu = menu?.subMenu?.length;

  return (
    <li
      className="group/link hover:h-full flex items-center"
      key={menu.title}
    >
      <Link
        href={menu.href}
        className="flex font-semibold items-center gap-1 cursor-pointer px-3 py-2 rounded-sm transition-all group-hover/link:bg-hoverBackground"
      >
        {menu.title}
        {hasSubMenu && (
          <ChevronDown
            size={16}
            className="group-hover/link:rotate-180 duration-200"
          />
        )}
      </Link>
      {hasSubMenu && (
        <div className="hidden absolute w-max top-full origin-top p-4 rounded-md bg-background group-hover/link:grid border border-border">
          <div
            className={`grid gap-4 ${menu.gridCols === 3
              ? "grid-cols-3"
              : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
              }`}
          >
            {hasSubMenu &&
              menu.subMenu?.map((submenu, i) => (
                <div
                  className="cursor-pointer hover:bg-hoverBackground rounded-sm flex items-center p-1 transition-colors "
                  key={i}
                >
                  <Link
                    href={submenu.href}
                    className="flex gap-3 items-center group/menubox"
                  >
                    <div className="w-fit p-2 rounded-md">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.title}</h6>
                      <p className="text-sm text-textColor max-w-[150px]">
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
