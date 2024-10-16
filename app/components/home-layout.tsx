import React, { Suspense } from "react";
import Nav from "./nav";
import Articles from "./articles";
import Footer from "./footer";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="h-[100%] flex flex-col items-start justify-start md:mt-[-200px] md:h-auto md:flex-co md:fixed md:inset-0  md:items-center md:justify-center">
        <div className="h-[100%] flex flex-col w-full md:flex-row md:w-[1056px] md:h-[620px] md:border-[0.1px] md:border-border-color">
          <section className="flex flex-col w-full basis-[100%] h-[70%] px-5 md:basis-[75%] md:max-w-[75%] md:h-auto md:pl-32 md:pr-32">
            <Nav></Nav>
            {children}
          </section>
          <section className="flex w-full sticky bottom-0 md:relative md:basis-[25%]">
            <Suspense>
              <Articles></Articles>
            </Suspense>
          </section>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default HomeLayout;
