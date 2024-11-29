import { Pathnames } from "@/i18n/routing";
import { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: Pathnames;
}

export interface MenuTypes {
  title: string;
  href: Pathnames;
  subMenu?: SubMenuItem[];
  gridCols?: number | boolean;
}

export interface MenuItem {
  menu: MenuTypes;
}
export interface NavigationTypes {
  navigation: MenuTypes[];
}
