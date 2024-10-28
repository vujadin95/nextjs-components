import DesktopNavigationItem from "./DesktopNavItem"
import { NavigationTypes } from "./navigation.types"

const DesktopNavigation = ({ navigation }: NavigationTypes) => {
 return (
  <ul className="lg:flex items-center hidden relative ml-auto">
   {navigation.map((menu) => (
    <DesktopNavigationItem menu={menu} key={menu.title}
    />
   ))}
  </ul>
 )
}
export default DesktopNavigation