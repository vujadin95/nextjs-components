"use client";
import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import { navigation } from "./Navigation/navigation-links-data";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";

const Header = () => {
  return (
    <header className="flex items-center justify-between fixed top-0 h-[60px] w-full max-w-screen-2xl mx-auto z-50">
      <Logo />

      <DesktopNavigation navigation={navigation} />

      <ThemeSwitch />

      <div className="w-9 h-9 bg-red-500 mr-2 "></div>

      <div className="lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  );
};
export default Header;
