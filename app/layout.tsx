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
  weight: "200",
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
    images: [`${BASE_URL}/images/home-page.png`], // og:image
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
      <body className={`${montserrat.className} antialiased m-0 p-0 h-screen w-screen overflow-hidden bg-background-color text-primary-text-color`}>
        <SessionProvider>
          <div className=" h-[100%] flex flex-col items-start justify-start [@media_((max-height:800px)_and_(min-width:948px))]:mt-[-100px] md:mt-[-200px] md:h-auto md:flex-co md:fixed md:inset-0  md:items-center md:justify-center">
            <div className="h-[100%] flex flex-col w-full md:flex-row mt-0 md:mt-24 md:w-[900px] lg:w-[1100px] md:h-[560px] lg:h-[695px] md:border-[0.1px] md:border-border-color">
              <section
                id="content"
                className="flex-grow overflow-x-hidden scrollbar-hide w-full basis-[100%] h-[70%] px-5 md:max-w-[75%] md:h-[100%] md:pl-24 lg:pl-32 md:pr-24 lg:pr-32 transition-transform ease-in-out duration-[0.2s]"
              >
                <Nav></Nav>
                {children}
              </section>
              <section id="second-column" className="flex w-full sticky bottom-0 md:relative md:basis-[25%] transition-transform ease-in-out duration-[0.2s]">
                <Suspense>
                  <Articles initialArticles={articles}></Articles>
                </Suspense>
              </section>
            </div>
          </div>
          <Footer></Footer>
        </SessionProvider>

      </body>
    </html>
  );
}
