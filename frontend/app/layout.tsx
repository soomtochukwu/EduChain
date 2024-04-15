import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cuberhack",
  description: "cuberhack: Personalized Learning with Blockchain and AI (MVP)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>

      <body className={inter.className + " " + ""}>
        <Providers>
          <Header></Header>

          <div className="p-2 py-4">{children}</div>

          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
