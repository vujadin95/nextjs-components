import { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MenuTypes {
  title: string;
  subMenu?: SubMenuItem[];
  gridCols?: number;
}

export interface MenuItem {
  menu: MenuTypes;
}
export interface NavigationTypes {
  navigation: MenuTypes[];
}
