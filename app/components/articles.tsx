import Link from "next/link";
import React from "react";
import { colorScheme, isColorTooSimilar } from "../utls/color-utils";
import { formatDate } from "../utls/date-utils";
import { ArticleModel, getSortedArticlesData } from "../utls/articles";
let previousColor = "";

async function Articles() {
  const articles = await getSortedArticlesData();
  // Function to generate a random index within the colorScheme array
  const getRandomColor = () => {
    let randomColor;
    do {
      const randomIndex = Math.floor(Math.random() * colorScheme.length);
      randomColor = colorScheme[randomIndex];
    } while (isColorTooSimilar(randomColor, previousColor));
    previousColor = randomColor;
    return randomColor;
  };
  getRandomColor();
  return (
    <div className="flex w-full scrollbar-hide overflow-x-auto h-[151px] md:h-full md:flex-col md:max-w-[180px] md:border-x-[0.1px] md:border-border-color md:overflow-y-auto ">
      {articles.map((article: ArticleModel) => {
        return (
          <Link
            key={article.metadata.title}
            href={`/article/${article.metadata.slug}`}
            className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
            style={{ backgroundColor: getRandomColor() }}
          >
            <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">{article.metadata.title}</div>
            <div className="text-xs flex justify-end">{formatDate(article.metadata.date)}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Articles;
