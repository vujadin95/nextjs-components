import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/routing";
import { MenuItem } from "./navigation.types";

const DesktopNavigationItem = ({ menu }: MenuItem) => {
  const hasSubMenu = menu?.subMenu?.length;

  return (
    <li className="group/link flex items-center hover:h-full" key={menu.title}>
      <Link
        href={menu.href}
        className="flex cursor-pointer items-center gap-1 rounded-sm px-3 py-2 font-semibold transition-all group-hover/link:bg-hoverBackground"
      >
        {menu.title}
        {hasSubMenu && (
          <ChevronDown
            size={16}
            className="duration-200 group-hover/link:rotate-180"
          />
        )}
      </Link>
      {hasSubMenu && (
        <div className="duraiton-500 absolute top-full hidden w-max origin-top rounded-md border border-border bg-background p-4 animate-out fade-out zoom-out-95 group-hover/link:grid group-hover/link:animate-in group-hover/link:zoom-in-90">
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
                  className="flex cursor-pointer items-center rounded-sm p-1 transition-colors hover:bg-hoverBackground"
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
                      <h6 className="font-semibold">{submenu.title}</h6>
                      <p className="max-w-[150px] text-sm text-textColor">
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
