"use client";
import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import { navigation } from "./Navigation/navigation-links-data";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";

const Header = () => {
  return (
    <header className="w-full max-w-screen-2xl mx-auto flex items-center justify-between gap-2 bg-background ">
      <Logo />
      <DesktopNavigation navigation={navigation} />
      <div className="flex items-center gap-2 ml-auto lg:ml-0">
        <ThemeSwitch />
        <div className="w-9 h-9 bg-red-500"></div>
      </div>
      <div className="lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  );
};
export default Header;
