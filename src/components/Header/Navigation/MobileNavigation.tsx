"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import { NavigationTypes } from "./navigation.types";

export default function MobileNavigation({ navigation }: NavigationTypes) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="lg:hidden z-[40] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="fixed left-0 right-0 top-[60px] overflow-y-auto h-full bg-background  text-textColor p-6 pb-20">
          <ul>
            {navigation.map((menu) => {
              return <MobileNavItem menu={menu} key={menu.title} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
