import DesktopNavigationItem from "./DesktopNavItem"
import { NavigationTypes } from "./navigation.types"

const DesktopNavigation = ({ navigation }: NavigationTypes) => {
 return (
  <ul className="hidden lg:flex items-center relative">
   {navigation.map((menu) => (
    <DesktopNavigationItem menu={menu} key={menu.title}
    />
   ))}
  </ul>
 )
}
export default DesktopNavigation