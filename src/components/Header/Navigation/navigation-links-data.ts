import {
  Building2,
  Cog,
  DraftingCompassIcon,
  Fan,
  Leaf,
  Snowflake,
  Truck,
} from "lucide-react";

export const navigation = [
  {
    title: "Usluge & Proizvodi",
    href: "/services-and-products",
    subMenu: [
      {
        title: "Projektovanje",
        href: "/services-and-products/#designing",
        description: "Kompletni licencirani projekti",
        icon: DraftingCompassIcon,
      },
      {
        title: "Sopstvena Proizvodnja",
        href: "/services-and-products/#production",
        description: "Proizvodja upotrebom kvalitetnih materijala i opreme",
        icon: Cog,
      },
      {
        title: "Sistemi za uštedu",
        href: "/services-and-products/#savings",
        description: "Poboljšanje performansi i ušteda energije",
        icon: Leaf,
      },
      {
        title: "Distribucija proizvoda",
        href: "/services-and-products/#distribution",
        description: "Kvalitetna distribucija proizvoda",
        icon: Truck,
      },
    ],
    gridCols: 2,
  },
  {
    title: "Rešenja",
    href: "/solutions",
    subMenu: [
      {
        title: "Hlađenje",
        href: "/solutions/#cooling",
        description: "Hlađenje",
        icon: Snowflake,
      },
      {
        title: "Klimatizacija",
        href: "/solutions/#climatization",
        description: "Klimatizacija",
        icon: Fan,
      },
      {
        title: "Sistemi za uštedu",
        href: "/services-and-products/#savings",
        description: "Poboljšanje performansi i ušteda energije",
        icon: Leaf,
      },
    ],
    gridCols: 2,
  },
  {
    title: "Zašto Superheat",
    href: "/why-superheat",
  },
  {
    title: "O nama",
    href: "/about-us",
    subMenu: [
      {
        title: "Naša priča",
        href: "/about-us/#our-story",
        description: "Ko smo mi i šta predstavljamo?",
        icon: Building2,
      },
    ],
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];
