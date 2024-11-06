import { useTranslations } from "next-intl";
import {
 Building2,
 Cog,
 DraftingCompassIcon,
 Fan,
 Leaf,
 Snowflake,
 Truck,
} from "lucide-react";


const useNavigationData = () => {
 const t = useTranslations('navigation');

 const navigation = [
  {
   title: t("linkOne.title"),
   href: t("linkOne.href"),
   subMenu: [
    {
     title: t("linkOne.subMenuItems.subMenuOne.title"),
     href: t("linkOne.subMenuItems.subMenuOne.href"),
     description: t("linkOne.subMenuItems.subMenuOne.description"),
     icon: DraftingCompassIcon,
    },
    {
     title: t("linkOne.subMenuItems.subMenuTwo.title"),
     href: t("linkOne.subMenuItems.subMenuTwo.href"),
     description: t("linkOne.subMenuItems.subMenuTwo.description"),
     icon: Cog,
    },
    {
     title: t("linkOne.subMenuItems.subMenuThree.title"),
     href: t("linkOne.subMenuItems.subMenuThree.href"),
     description: t("linkOne.subMenuItems.subMenuThree.description"),
     icon: Leaf,
    },
    {
     title: t("linkOne.subMenuItems.subMenuFour.title"),
     href: t("linkOne.subMenuItems.subMenuFour.href"),
     description: t("linkOne.subMenuItems.subMenuFour.description"),
     icon: Truck,
    },
   ],
   gridCols: parseInt(t("linkOne.gridCols")),
  },
  {
   title: t("linkTwo.title"),
   href: t("linkTwo.href"),
   subMenu: [
    {
     title: t("linkTwo.subMenuItems.subMenuOne.title"),
     href: t("linkTwo.subMenuItems.subMenuOne.href"),
     description: t("linkTwo.subMenuItems.subMenuOne.description"),
     icon: Snowflake,
    },
    {
     title: t("linkTwo.subMenuItems.subMenuTwo.title"),
     href: t("linkTwo.subMenuItems.subMenuTwo.href"),
     description: t("linkTwo.subMenuItems.subMenuTwo.description"),
     icon: Fan,
    },
    {
     title: t("linkTwo.subMenuItems.subMenuThree.title"),
     href: t("linkTwo.subMenuItems.subMenuThree.href"),
     description: t("linkTwo.subMenuItems.subMenuThree.description"),
     icon: Leaf,
    },
   ],
   gridCols: parseInt(t("linkOne.gridCols")),
  },
  {
   title: t("linkThree.title"),
   href: t("linkThree.href"),
  },
  {
   title: t("linkFour.title"),
   href: t("linkFour.href"),
   subMenu: [
    {
     title: t("linkFour.subMenuItems.subMenuOne.title"),
     href: t("linkFour.subMenuItems.subMenuOne.href"),
     description: t("linkFour.subMenuItems.subMenuOne.description"),
     icon: Building2,
    },
   ],
  },
  {
   title: t("linkFive.title"),
   href: t("linkFive.href"),
  },
 ];
 return navigation
}
export default useNavigationData