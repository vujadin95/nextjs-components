import "../globals.css";
import { Poppins } from "next/font/google";
import {
  setRequestLocale,
  getTranslations,
  getMessages,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const keywords = [
  "site",
  "coolingSystems",
  "heatingSystems",
  "airConditioning",
  "savings",
  "energyConsumption",
  "design",
  "processAutomation",
  "PLCAutomation",
  "coolingAndFreezing",
];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: {
      default: "Superheat",
      template: "%s - Superheat",
    },
    description: t("description"),
    keywords: keywords.map((keyword) => t(`keywords.${keyword}`)),
    icons: {
      icon: [
        {
          type: "image/png",
          media: "(prefers-color-scheme: light)",
          url: "/dark-logo.png",
          href: "/dark-logo.png",
        },
        {
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
          url: "/light-logo.png",
          href: "/light-logo.png",
        },
      ],
    },
    openGraph: {
      title: "Superheat",
      description: t("description"),
      url: "https://superheat-v02.vercel.app",
      siteName: "Supeheat",
      images: [
        {
          url: t("ogimages.ogimage"),
          width: 1200,
          height: 600,
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:,"></link>
      </head>
      <body className={`${poppins.className} relative antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="sticky top-0 z-50 w-full border-b bg-background py-1 shadow-lg">
              <Header />
            </div>
            <main className="mx-auto max-w-screen-2xl px-4">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
