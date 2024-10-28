'use client'
import { useClickOutside } from "@/utils/hooks/useClickOutside"
import { Eclipse, Moon, MoonStar, Sun } from "lucide-react"
import { useRef, useState } from "react"

const ToggleThemeBtn = () => {
 const [isOpen, setIsOpen] = useState(false)
 const divReff = useRef<HTMLDivElement>(null);

 useClickOutside(divReff, () => {
  if (isOpen) setIsOpen(false);
 });

 return (
  <div className="relative inline-block ml-auto lg:ml-0" ref={divReff}>
   <button className="rounded-full px-3 py-2 " onClick={() => setIsOpen(!isOpen)}>
    <MoonStar />
   </button>
   {isOpen &&
    <div className="absolute p-2 right-0 z-10 w-32 border border-gray-400 rounded-md shadow-xl space-y-2">
     <button className="flex items-center gap-2 p-1">
      <MoonStar />
      Dark
     </button>
     <button className="flex items-center gap-2 p-1">
      <Sun />
      Dark
     </button>
    </div>
   }
  </div>
 )
}
export default ToggleThemeBtn