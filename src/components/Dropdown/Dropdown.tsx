"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { cn } from "@/utils/utils";
import Image from "next/image";

interface DropdownItem {
  id: string;
  itemText: string;
  imgPath?: string;
}

interface DropdownProps {
  title?: string;
  data: DropdownItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  title = "Select",
  data,
  position = "bottom-left",
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>(
    selectedId ? data?.find((item) => item.id === selectedId) : undefined
  );

  const handleChange = (item: DropdownItem) => {
    setSelectedItem(item);
    onSelect && onSelect(item.id);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedId && data) {
      const newSelectedItem = data.find((item) => item.id === selectedId);
      newSelectedItem && setSelectedItem(newSelectedItem);
    } else {
      setSelectedItem(undefined);
    }
  }, [selectedId, data]);



  const positionStyle = {
    "bottom-right": "top-full right-0 mt-2",
    "bottom-left": "top-full left-0 mt-2",
    "top-right": "bottom-full right-0 mb-2",
    "top-left": "bottom-full left-0 mb-2",
  };

  console.log(selectedItem)


  const dropdownClass = cn(
    "absolute bg-background w-max max-h-52 overflow-y-auto py-3 rounded-md shadow-md z-10 border border-border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500", positionStyle[position]
  );

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex justify-between items-center gap-2 text-nowrap rounded w-full py-2 px-4 bg-blue-500 text-white",
          style
        )}
      >
        <span>{selectedItem?.itemText || title}</span>
        <ChevronDown
          size={18}
          className={cn("transform duration-200 ease-in-out", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <DropDownContent dropdownClass={dropdownClass}>
          {data?.map((item) => (
            <DropdownItem
              key={item.id}
              item={item}
              itemClassName="hover:bg-textColor/20 duration-200"
              handleSelect={() => handleChange(item)}
            />
          ))}
        </DropDownContent>
      )}
    </div>
  );
};

interface DropdownItemProps {
  item: DropdownItem,
  itemClassName?: string,
  handleSelect: () => void
}
export const DropdownItem = ({
  itemClassName,
  handleSelect,
  item
}: DropdownItemProps) => {
  return (
    <li
      onClick={handleSelect}
      className={cn("flex items-center cursor-pointer px-3", itemClassName)}
    >
      {item?.imgPath && (
        <Image src={item.imgPath} loading="lazy" alt="" width={8} height={8} className="rounded-full object-cover me-2" />
      )}
      <span>{item.itemText}</span>
    </li>
  )
}

export const DropDownContent = ({ children, dropdownClass }: { children: React.ReactNode, dropdownClass: string }) => {
  return (
    <ul className={cn("leading-10", dropdownClass)}>
      {children}
    </ul>
  )
}


export default Dropdown;