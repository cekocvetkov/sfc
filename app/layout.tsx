import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { getSortedArticlesData } from "./utls/articles";
import Articles from "./components/articles";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { Suspense } from "react";
import { BASE_URL } from "./utls/constants";
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({
  weight: ["200", "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Software Crafting Chronicles",
    template: "%s | Tsvetan Tsvetkov's software crafting journal",
  },
  description: "Tsvetan Tsvetkov's software crafting journal",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    url: BASE_URL, // og:url
    type: "website", // og:type
    title: "Software Crafting Chronicles", // og:title (optional but good to have)
    description: "Tsvetan Tsvetkov's software crafting journal: A software journal that contains findings and information I encounter during my hobby projects or work.",
    images: [{ url: `${BASE_URL}/images/og-home.png`, width: 1200, height: 630 }], // og:image
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const articles = await getSortedArticlesData();

  return (
    <html lang="en">
      <Script defer src="/umami.js" data-website-id="ae5e8a60-bb8f-42f9-a85c-7af013ca8a81" />
      <body
        className={`${montserrat.className} w-full min-h-screen
      antialiased bg-background-color text-primary-text-color`}
      >
        <SessionProvider>
          <div className="site-column">
            <Nav />
            {children}
            <Footer />
          </div>
          <aside className="article-strip scrollbar-hide" aria-label="Articles">
            <Suspense>
              <Articles initialArticles={articles} />
            </Suspense>
          </aside>
        </SessionProvider>
      </body>
    </html>
  );
}
