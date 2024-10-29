import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "./navigation.types";

const DesktopNavigationItem = ({ menu }: MenuItem) => {
  const hasSubMenu = menu?.subMenu?.length;

  return (
    <li className="group/link hover:h-[60px] flex items-center" key={menu.title}>
      <span className="flex font-semibold items-center gap-1 cursor-pointer px-3 py-1 rounded-sm group-hover/link:text-textHover transition-all ">
        {menu.title}
        {hasSubMenu && (
          <ChevronDown
            size={16}
            className="group-hover/link:rotate-180 duration-200"
          />
        )}
      </span>
      {hasSubMenu && (
        <div className="absolute top-[60px] origin-[50%_-170px] p-4 rounded-md  bg-background/80 hidden group-hover/link:grid rounded-tl-none rounded-tr-none">
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
                <div className="cursor-pointer" key={i}>
                  <Link
                    href={"/"}
                    className="flex gap-3 items-center group/menubox"
                  >
                    <div className="w-fit p-2 rounded-md group-hover/menubox:bg-textHover  duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.title}</h6>
                      <p className="text-sm text-foreground max-w-[150px]">
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
