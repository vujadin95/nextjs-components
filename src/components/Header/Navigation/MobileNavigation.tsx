"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileNavItem from "./MobileNavItem";
import useNavigationData from "./useNavigation";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const closeNav = () => setIsOpen(false);
  const navigation = useNavigationData();
  const hamRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (!hamRef.current || !hamRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={hamRef}>
      <button
        className={`relative z-[20] flex items-center lg:hidden ${isOpen && "no-doc-scroll"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <div className="text-textColor fixed left-0 right-0 top-[60px] h-full select-none overflow-y-auto bg-background p-4 pb-20">
          <ul>
            {navigation.map((menu) => {
              return (
                <MobileNavItem
                  menu={menu}
                  closeNav={closeNav}
                  key={menu.title}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
