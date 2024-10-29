import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}  antialiased relative bg-background`}
      >
        <Providers>
          <div className="w-full z-50 fixed top-0 h-[60px] border-b border-zinc-600 shadow-[0px_20px_20px_0px_#00000024] px-4">
            <Header />
          </div>
          <main className="pt-[60px] max-w-screen-2xl mx-auto px-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
