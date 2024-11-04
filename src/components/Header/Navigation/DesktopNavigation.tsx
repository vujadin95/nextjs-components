import DesktopNavigationItem from "./DesktopNavItem";
import { NavigationTypes } from "./navigation.types";

const DesktopNavigation = ({ navigation }: NavigationTypes) => {
  return (
    <ul className="hidden h-full lg:flex items-center shrink-0 relative justify-center">
      {navigation.map((menu) => (
        <DesktopNavigationItem menu={menu} key={menu.title} />
      ))}
    </ul>
  );
};
export default DesktopNavigation;
