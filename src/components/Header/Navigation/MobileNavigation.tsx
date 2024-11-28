"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import useNavigationData from "./useNavigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const closeNav = () => setIsOpen(!isOpen)
  const navigation = useNavigationData();


  return (
    <div>
      <button
        className={`lg:hidden z-[20] relative ${isOpen && 'no-doc-scroll'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <div className="fixed select-none bg-background text-textColor left-0 right-0 top-[60px] overflow-y-auto h-full p-6 pb-20">
          <ul>
            {navigation.map((menu) => {
              return <MobileNavItem menu={menu} closeNav={closeNav} key={menu.title} />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
