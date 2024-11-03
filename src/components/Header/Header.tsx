"use client";
import { useTranslations } from "next-intl";
import Logo from "../Logo/Logo";
import DesktopNavigation from "./Navigation/DesktopNavigation";
import MobileNavigation from "./Navigation/MobileNavigation";
import ThemeSwitch from "./ToggleTheme/ToggleThemeBtn";
import {
  Building2,
  Cog,
  DraftingCompassIcon,
  Fan,
  Leaf,
  Snowflake,
  Truck,
} from "lucide-react";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import Dropdown from "../Dropdown/Dropdown";

const data = [
  {
    id: "1",
    name: "Minnie Barrett",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    name: "Andy Holmes",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    name: "Felicia Watts",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    name: "Hailey Green",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    name: "Jeremiah Hughes",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "6",
    name: "Amy Perkins",
    imageUrl:
      "https://images.unsplash.com/photo-1587677171791-8b93c752999b?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Header = () => {
  const t = useTranslations("navigation");
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
  return (
    <header className="w-full max-w-screen-2xl mx-auto flex items-center justify-between gap-2 bg-background border-b border-border">
      <Logo />
      <DesktopNavigation navigation={navigation} />
      <Dropdown
        data={data}
        id="person"
        onSelect={() => console.log("nesto se desilo")}
      />
      <div className="flex items-center gap-2 ml-auto lg:ml-0">
        <ThemeSwitch />
        <LocaleSwitcher />
      </div>
      <div className="lg:hidden">
        <MobileNavigation navigation={navigation} />
      </div>
    </header>
  );
};
export default Header;
