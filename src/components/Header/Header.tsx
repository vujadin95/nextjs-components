import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";
import LocaleSwitch from "../LocaleSwitcher/LocaleSwitch";

const Header = () => {

  return (
    <header className=" h-full w-full max-w-screen-2xl mx-auto flex items-center justify-between gap-2 bg-background px-4">
      <Logo />
      <DesktopNavigation />
      <div className="flex shrink-0 items-center gap-2 ml-auto lg:ml-0">
        <ThemeSwitch />
        <LocaleSwitch />
      </div>
      <div className="lg:hidden">
        <MobileNavigation />
      </div>
    </header>
  );
};
export default Header;
