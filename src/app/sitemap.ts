import type { MetadataRoute } from "next";
import { routing, getPathname } from "@/i18n/routing";

// const host = "https://superheat-V02.vercel.app";
const host = "http://localhost:3000";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: host,
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           en: host + "/en",
//           sr: host + "/sr",
//         },
//       },
//     },
//     {
//       url: `${host}/services-and-products`,
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           en: `${host}/en/services-and-products`,
//           sr: `${host}/sr/usluge-i-proizvodi`,
//         },
//       },
//     },
//     {
//       url: `${host}/services-and-products/production`,
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           en: `${host}/en/services-and-products/savings`,
//           sr: `${host}/sr/usluge-i-proizvodi/uštede`,
//         },
//       },
//     },
//     {
//       url: `${host}/about-us`,
//       lastModified: new Date(),
//       alternates: {
//         languages: {
//           en: `${host}/en/about-us`,
//           sr: `${host}/sr/o-nama`,
//         },
//       },
//     },
//   ];
// }

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry("/"),
    getEntry("/services-and-products"),
    getEntry("/services-and-products/design"),
    getEntry("/services-and-products/production"),
    getEntry("/services-and-products/savings"),
    getEntry("/services-and-products/product-distribution"),
    getEntry("/solutions"),
    getEntry("/solutions/cooling"),
    getEntry("/solutions/air-conditioning"),
    getEntry("/solutions/savings"),
    getEntry("/solutions/air-conditioning"),
    getEntry("/solutions/savings"),
    getEntry("/why-superheat"),
    getEntry("/about-us"),
    getEntry("/about-us/our-story"),
    getEntry("/contact"),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  };
}

function getUrl(href: Href, locale: (typeof routing.locales)[number]) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
