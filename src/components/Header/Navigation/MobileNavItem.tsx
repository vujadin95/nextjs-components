'use client'
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MenuTypes } from "./navigation.types";

interface MobileNavItemProps {
 menu: MenuTypes
}

const MobileNavItem = ({ menu }: MobileNavItemProps) => {
 const [isOpen, setIsOpen] = useState(false);
 const hasSubMenu = menu?.subMenu?.length;

 return (
  <li key={menu.title} className="">
   <span
    className="flex items-center justify-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative "
    onClick={() => setIsOpen(prev => !prev)}
   >
    {menu.title}
    {hasSubMenu && (
     <ChevronDown
      className={`ml-auto ${isOpen && "rotate-180"} `}
     />
    )}
   </span>
   {isOpen && hasSubMenu && (
    <ul
     className="ml-5"
    >
     {menu.subMenu?.map((subm) => (
      <li
       key={subm.title}
       className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer "
      >
       <subm.icon size={17} />
       {subm.title}
      </li>
     ))}
    </ul>
   )}
  </li>
 )
}
export default MobileNavItem