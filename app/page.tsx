import React from "react";
import { getSortedArticlesData } from "./utls/articles";

export default async function Home() {
  const articleCount = (await getSortedArticlesData()).length;

  return (
    <main className="flex flex-col justify-center flex-1 w-full py-16">
      <h1 className="text-[22px] md:text-[26px] font-extralight tracking-[-0.01em] leading-snug">
        software crafting <span className="text-secondary-text-color">chronicles</span>
      </h1>
      <div className="label-caps text-muted-text-color mt-6 flex items-center gap-3.5">
        <span className="w-8 h-px bg-secondary-text-color" />
        Tsvetan Tsvetkov
      </div>
      <div className="label-caps text-muted-text-color mt-3 pl-[46px]">{articleCount} articles</div>
    </main>
  );
}
