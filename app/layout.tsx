import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import HomeLayout from "./components/home-layout";

const inter = Montserrat({
  weight: "200",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Crafting Chronicles",
  description: "Tsvetan Tsvetkov's software crafting journal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased m-0 p-0 h-screen w-screen overflow-hidden bg-background-color text-primary-text-color`}>
        <HomeLayout>{children}</HomeLayout>
      </body>
    </html>
  );
}
