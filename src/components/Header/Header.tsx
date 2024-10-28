"use client"
import DesktopNavigation from "./Navigation/DesktopNavigation"
import MobileNavigation from "./Navigation/MobileNavigation"
import { navigation } from "./Navigation/navigation-links-data"
import ToggleThemeBtn from "./ToggleTheme/ToggleThemeBtn"

const Header = () => {
 return (
  <header className="flex items-center justify-between fixed top-0 h-[60px] w-full">
   {/* place for logo */}
   <div className="w-[250px] h-[60px] flex items-center justify-center">Supeheat</div>
   {/* desktop navigation component */}
   <DesktopNavigation navigation={navigation} />
   {/* place for theme switcher */}
   <ToggleThemeBtn />

   {/* place for language switcher */}
   <div className="w-9 h-9 bg-red-500 mr-2 ">
   </div>

   {/* mobile navigation component */}
   <div className="lg:hidden">
    <MobileNavigation navigation={navigation} />
   </div>
  </header>
 )
}
export default Header