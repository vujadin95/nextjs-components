import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const Header = () => {

  return (
    <header className="w-full h-full max-w-screen-2xl mx-auto flex items-center justify-between gap-2 bg-background px-4">
      <Logo />
      <DesktopNavigation />
      <div className="flex shrink-0 items-center gap-2 ml-auto lg:ml-0">
        <ThemeSwitch />
        <LocaleSwitcher />
      </div>
      <div className="lg:hidden">
        <MobileNavigation />
      </div>
    </header>
  );
};
export default Header;
