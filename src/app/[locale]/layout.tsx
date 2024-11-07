import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer/Footer";

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
      <body className={
        `${inter.className} 
        relative bg-background antialiased 
        [&::-webkit-scrollbar]:w-[10px]
        [&::-webkit-scrollbar-track]:rounded-sm
        [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-sm
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        dark:[&::-webkit-scrollbar-track]:bg-neutral-700
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500`
      }
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="fixed top-0 z-50 h-[60px] w-full border-b border-border bg-background shadow-[s0px_20px_20px_0px_#00000024]">
              <Header />
            </div>
            <main className="mx-auto max-w-screen-2xl px-4 pt-[60px]">
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
