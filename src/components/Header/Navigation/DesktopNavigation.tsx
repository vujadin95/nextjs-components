"use client";
import DesktopNavigationItem from "./DesktopNavItem";
import useNavigationData from "./useNavigation";

const DesktopNavigation = () => {
  const navigation = useNavigationData();

  return (
    <ul className="relative hidden h-full shrink-0 items-center justify-center lg:flex">
      {navigation.map((menu) => (
        <DesktopNavigationItem menu={menu} key={menu.title} />
      ))}
    </ul>
  );
};
export default DesktopNavigation;
