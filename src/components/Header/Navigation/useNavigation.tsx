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
import { Pathnames } from "@/i18n/routing";


const useNavigationData = () => {
 const t = useTranslations('navigation');

 const navigation = [
  {
   title: t("linkOne.title"),
   href: t("linkOne.href") as Pathnames,
   subMenu: [
    {
     title: t("linkOne.subMenuItems.subMenuOne.title"),
     href: t("linkOne.subMenuItems.subMenuOne.href") as Pathnames,
     description: t("linkOne.subMenuItems.subMenuOne.description"),
     icon: DraftingCompassIcon,
    },
    {
     title: t("linkOne.subMenuItems.subMenuTwo.title"),
     href: t("linkOne.subMenuItems.subMenuTwo.href") as Pathnames,
     description: t("linkOne.subMenuItems.subMenuTwo.description"),
     icon: Cog,
    },
    {
     title: t("linkOne.subMenuItems.subMenuThree.title"),
     href: t("linkOne.subMenuItems.subMenuThree.href") as Pathnames,
     description: t("linkOne.subMenuItems.subMenuThree.description"),
     icon: Leaf,
    },
    {
     title: t("linkOne.subMenuItems.subMenuFour.title"),
     href: t("linkOne.subMenuItems.subMenuFour.href") as Pathnames,
     description: t("linkOne.subMenuItems.subMenuFour.description"),
     icon: Truck,
    },
   ],
   gridCols: parseInt(t("linkOne.gridCols")),
  },
  {
   title: t("linkTwo.title"),
   href: t("linkTwo.href") as Pathnames,
   subMenu: [
    {
     title: t("linkTwo.subMenuItems.subMenuOne.title"),
     href: t("linkTwo.subMenuItems.subMenuOne.href") as Pathnames,
     description: t("linkTwo.subMenuItems.subMenuOne.description"),
     icon: Snowflake,
    },
    {
     title: t("linkTwo.subMenuItems.subMenuTwo.title"),
     href: t("linkTwo.subMenuItems.subMenuTwo.href") as Pathnames,
     description: t("linkTwo.subMenuItems.subMenuTwo.description"),
     icon: Fan,
    },
    {
     title: t("linkTwo.subMenuItems.subMenuThree.title"),
     href: t("linkTwo.subMenuItems.subMenuThree.href") as Pathnames,
     description: t("linkTwo.subMenuItems.subMenuThree.description"),
     icon: Leaf,
    },
   ],
   gridCols: parseInt(t("linkOne.gridCols")),
  },
  {
   title: t("linkThree.title"),
   href: t("linkThree.href") as Pathnames,
  },
  {
   title: t("linkFour.title"),
   href: t("linkFour.href") as Pathnames,
   subMenu: [
    {
     title: t("linkFour.subMenuItems.subMenuOne.title"),
     href: t("linkFour.subMenuItems.subMenuOne.href") as Pathnames,
     description: t("linkFour.subMenuItems.subMenuOne.description"),
     icon: Building2,
    },
   ],
  },
  {
   title: t("linkFive.title"),
   href: t("linkFive.href") as Pathnames,
  },
 ];
 return navigation
}
export default useNavigationData