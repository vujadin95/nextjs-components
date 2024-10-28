import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MenuItem } from "./navigation.types";


const DesktopNavigationItem = ({ menu }: MenuItem) => {

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <li
      className="group/link"
      key={menu.title}
    >
      <span className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-sm">
        {menu.title}
        {hasSubMenu && (
          <ChevronDown size={16} className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <div className="absolute top-[2rem] p-[15px] rounded-[6px] origin-[50%_-170px] backdrop-blur bg-white/[0.08] hidden group-hover/link:grid">
          <div
            className={`grid gap-7 ${menu.gridCols === 3
              ? "grid-cols-3"
              : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
              }`}
          >
            {hasSubMenu &&
              menu.subMenu?.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  <Link href={"/"} className="flex items-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {submenu.icon && <submenu.icon />}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.title}</h6>
                      <p className="text-sm text-gray-400 max-w-[150px]">{submenu.description}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </li>
  );
}
export default DesktopNavigationItem