import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";
import LocaleSwitch from "../LocaleSwitcher/LocaleSwitch";

const Header = () => {
  return (
    <header className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between gap-2 bg-background px-4">
      <div className="w-full max-w-[250px]">
        <Logo />
      </div>
      <DesktopNavigation />

      <div className="flex shrink-0 items-center gap-1 md:gap-2">
        <ThemeSwitch />
        <LocaleSwitch />
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};
export default Header;
