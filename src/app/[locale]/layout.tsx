import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer/Footer";
import { Metadata } from "next";
import { getTranslations } from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const keywords = ["site", "coolingSystems", "heatingSystems", "airConditioning", "savings", "energyConsumption", "design", "processAutomation", "PLCAutomation", "coolingAndFreezing"]

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: {
      default: "Superheat",
      template: "%s - Superheat"
    },
    description: t('description'),
    keywords: keywords.map((keyword => t(`keywords.${keyword}`))),
    icons: {
      icon: [
        {
          media: "(prefers-color-scheme: light)",
          url: "/dark-logo.png",
          href: "/dark-logo.png",
        },
        {
          media: "(prefers-color-scheme: dark)",
          url: "/light-logo.png",
          href: "/light-logo.png",
        },
      ]
    }
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

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} relative antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>

            <div className="fixed top-0 z-50 h-[60px] w-full border-b border-border shadow-[s0px_20px_20px_0px_#00000024]">
              <Header />
            </div>
            <main className="mx-auto max-w-screen-2xl px-4 pt-[60px]">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
