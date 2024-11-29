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
  const t = useTranslations("navigation");

  const navigationLinks = [
    {
      title: "servicesAndProducts",
      subMenu: [
        { title: "design", icon: DraftingCompassIcon },
        { title: "production", icon: Cog },
        { title: "savings", icon: Leaf },
        { title: "productDistribution", icon: Truck },
      ],
      gridCols: 2,
    },
    {
      title: "solutions",
      subMenu: [
        { title: "cooling", icon: Snowflake },
        { title: "airConditioning", icon: Fan },
        { title: "savings", icon: Leaf },
      ],
      gridCols: 2,
    },
    {
      title: "whySuperheat",
      subMenu: null,
      gridCols: false,
    },
    {
      title: "aboutUs",
      subMenu: [{ title: "ourStory", icon: Building2 }],
      gridCols: 1,
    },
    {
      title: "contact",
      subMenu: null,
      gridCols: false,
    },
  ];
  const navigation = navigationLinks.map((link) => ({
    title: t(`${link.title}.title`),
    href: t(`${link.title}.href`) as Pathnames,
    subMenu: link.subMenu
      ? link.subMenu.map((sublink) => ({
          title: t(`${link.title}.${sublink.title}.title`),
          href: t(`${link.title}.${sublink.title}.href`) as Pathnames,
          description: t(`${link.title}.${sublink.title}.description`),
          icon: sublink.icon,
        }))
      : undefined,
    gridCols: link.gridCols,
  }));

  return navigation;
};
export default useNavigationData;
