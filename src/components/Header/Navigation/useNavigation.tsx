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
      title: t("servicesAndProducts.title"),
      href: t("servicesAndProducts.href") as Pathnames,
      subMenu: [
        {
          title: t("servicesAndProducts.design.title"),
          href: t("servicesAndProducts.design.href") as Pathnames,
          description: t("servicesAndProducts.design.description"),
          icon: DraftingCompassIcon,
        },
        {
          title: t("servicesAndProducts.production.title"),
          href: t("servicesAndProducts.production.href") as Pathnames,
          description: t("servicesAndProducts.production.description"),
          icon: Cog,
        },
        {
          title: t("servicesAndProducts.savings.title"),
          href: t("servicesAndProducts.savings.href") as Pathnames,
          description: t("servicesAndProducts.savings.description"),
          icon: Leaf,
        },
        {
          title: t("servicesAndProducts.productDistribution.title"),
          href: t("servicesAndProducts.productDistribution.href") as Pathnames,
          description: t("servicesAndProducts.productDistribution.description"),
          icon: Truck,
        },
      ],
      gridCols: parseInt(t("servicesAndProducts.gridCols")),
    },
    {
      title: t("solutions.title"),
      href: t("solutions.href") as Pathnames,
      subMenu: [
        {
          title: t("solutions.cooling.title"),
          href: t("solutions.cooling.href") as Pathnames,
          description: t("solutions.cooling.description"),
          icon: Snowflake
        },
        {
          title: t("solutions.airConditioning.title"),
          href: t("solutions.airConditioning.href") as Pathnames,
          description: t("solutions.airConditioning.description"),
          icon: Fan,
        },
        {
          title: t("solutions.savings.title"),
          href: t("solutions.savings.href") as Pathnames,
          description: t("solutions.savings.description"),
          icon: Leaf,
        },
      ],
      gridCols: parseInt(t("solutions.gridCols")),
    },
    {
      title: t("whySuperheat.title"),
      href: t("whySuperheat.href") as Pathnames,
    },
    {
      title: t("aboutUs.title"),
      href: t("aboutUs.href") as Pathnames,
      subMenu: [
        {
          title: t("aboutUs.ourStory.title"),
          href: t("aboutUs.ourStory.href") as Pathnames,
          description: t("aboutUs.ourStory.description"),
          icon: Building2,
        },
      ],
    },
    {
      title: t("contact.title"),
      href: t("contact.href") as Pathnames,
    },
  ];
  return navigation
}
export default useNavigationData