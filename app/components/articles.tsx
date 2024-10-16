import Link from "next/link";
import React from "react";
import { colorScheme, isColorTooSimilar } from "../utls/color-utils";
import { formatDate } from "../utls/date-utils";
import { ArticleModel, getSortedArticlesData } from "../utls/articles";
import ArticleLink from "./article-link";
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
          <ArticleLink
            params={{
              color: getRandomColor(),
              date: formatDate(article.metadata.date),
              title: article.metadata.title,
              slug: article.metadata.slug,
            }}
          ></ArticleLink>
        );
      })}
    </div>
  );
}

export default Articles;
