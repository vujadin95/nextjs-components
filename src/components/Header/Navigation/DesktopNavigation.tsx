import DesktopNavigationItem from "./DesktopNavItem";
import { NavigationTypes } from "./navigation.types";

const DesktopNavigation = ({ navigation }: NavigationTypes) => {
  return (
    <ul className="relative hidden h-full shrink-0 items-center justify-center lg:flex">
      {navigation.map((menu) => (
        <DesktopNavigationItem menu={menu} key={menu.title} />
      ))}
    </ul>
  );
};
export default DesktopNavigation;
