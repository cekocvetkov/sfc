import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Posts from "./components/posts";
import Footer from "./components/footer";

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
        <div className="h-[100%] flex flex-col items-start justify-start md:mt-[-200px] md:h-auto md:flex-co md:fixed md:inset-0  md:items-center md:justify-center">
          <div className="h-[100%] flex flex-col w-full md:flex-row md:w-[1056px] md:h-[620px] md:border-[0.1px] md:border-border-color">
            <section className="flex flex-col w-full basis-[100%] h-[70%] px-5 md:basis-[75%] md:h-auto md:pl-32 md:pr-32">
              <Nav></Nav>
              {children}
            </section>
            <section className="flex w-full sticky bottom-0 md:relative md:basis-[25%]">
              <Posts></Posts>
            </section>
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
