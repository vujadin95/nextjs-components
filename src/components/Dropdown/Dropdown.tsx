"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { cn } from "@/utils/utils";

interface DropdownItem {
  id: string;
  name: string;
  imageUrl?: string;
}

interface DropdownProps {
  id: string;
  title?: string;
  data: DropdownItem[];
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  hasImage?: boolean;
  style?: string;
  selectedId?: string;
  onSelect?: (id: string) => void;
}

const Dropdown = ({
  id,
  title = "Select",
  data,
  position = "bottom-left",
  hasImage = false,
  style,
  selectedId,
  onSelect,
}: DropdownProps) => {
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const positionStyle = {
    "bottom-right": "top-full right-0 mt-2",
    "bottom-left": "top-full left-0 mt-2",
    "top-right": "bottom-full right-0 mb-2",
    "top-left": "bottom-full left-0 mb-2",
  };

  const dropdownClass = cn(
    "absolute bg-background w-max max-h-52 overflow-y-auto py-3 rounded-md shadow-md z-10 border border-border [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 ",
    positionStyle[position]
  );

  return (
    <div ref={dropdownRef} className="relative">
      <button
        id={id}
        aria-label="Toggle dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex justify-between items-center gap-2 rounded w-full py-2 px-4 bg-blue-500 text-white",
          style
        )}
      >
        <span>{selectedItem?.name || title}</span>
        <ChevronDown
          size={20}
          className={cn(
            "transform duration-500 ease-in-out",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {/* Open */}
      {isOpen && (
        <div aria-label="Dropdown menu" className={dropdownClass}>
          <ul
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            className="leading-10"
          >
            {data?.map((item) => (
              <li
                key={item.id}
                onClick={() => handleChange(item)}
                className={cn(
                  "flex items-center cursor-pointer hover:bg-gray-200 px-3",
                  selectedItem?.id === item.id ? "bg-gray-300" : ""
                )}
              >
                {hasImage && (
                  <img
                    src={item.imageUrl}
                    alt="image"
                    loading="lazy"
                    className="w-8 h-8 rounded-full bg-gray-400 object-cover me-2"
                  />
                )}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
