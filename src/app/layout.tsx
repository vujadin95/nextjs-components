import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: "swap"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  antialiased relative`}
      >
        <Header />
        <main className="pt-[60px]">
          {children}
        </main>
      </body>
    </html>
  );
}
