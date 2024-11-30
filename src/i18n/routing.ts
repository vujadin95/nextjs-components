import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "sr"],

  // Used when no locale matches
  defaultLocale: "sr",
  pathnames: {
    "/": "/",
    "/services-and-products": {
      en: "/services-and-products",
      sr: "/usluge-i-proizvodi",
    },
    "/services-and-products/design": {
      en: "/services-and-products/design",
      sr: "/usluge-i-proizvodi/projektovanje",
    },
    "/services-and-products/production": {
      en: "/services-and-products/production",
      sr: "/usluge-i-proizvodi/proizvodnja",
    },
    "/services-and-products/savings": {
      en: "/services-and-products/savings",
      sr: "/usluge-i-proizvodi/uštede",
    },
    "/services-and-products/product-distribution": {
      en: "/services-and-products/product-distribution",
      sr: "/usluge-i-proizvodi/distribucija-proizvoda",
    },
    "/solutions": {
      en: "/solutions",
      sr: "/rešenja",
    },
    "/solutions/cooling": {
      en: "/solutions/cooling",
      sr: "/rešenja/hlađenje",
    },
    "/solutions/air-conditioning": {
      en: "/solutions/air-conditioning",
      sr: "/rešenja/klimatizacija",
    },
    "/solutions/savings": {
      en: "/solutions/savings",
      sr: "/rešenja/uštede",
    },
    "/why-superheat": {
      en: "/why-superheat",
      sr: "/zašto-superheat",
    },
    "/about-us": {
      en: "/about-us",
      sr: "/o-nama",
    },
    "/about-us/our-story": {
      en: "/about-us/our-story",
      sr: "/o-nama/naša-priča",
    },
    "/contact": {
      en: "/contact",
      sr: "/kontakt",
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
