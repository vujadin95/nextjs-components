import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`${inter.className}  antialiased relative bg-background`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="w-full z-50 fixed top-0 h-[61px] border-b border-border shadow-[s0px_20px_20px_0px_#00000024] px-4s">
              <Header />
            </div>
            <main className="pt-[60px] max-w-screen-2xl mx-auto px-4">
              {children}
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
