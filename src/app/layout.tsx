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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className}  antialiased relative max-w-screen-2xl mx-auto`}
      >
        <Providers>
          <Header />
          <main className="pt-[60px] ">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
