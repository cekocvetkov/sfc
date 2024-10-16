"use client";

import React, { useEffect, useState } from "react";
import { colorScheme, isColorTooSimilar } from "../utls/color-utils";
import { formatDate } from "../utls/date-utils";
import { ArticleModel } from "../utls/articles";
import ArticleLink from "./article-link";
import { useSearchParams } from "next/navigation";
import { getArticles } from "../search/server-action";
let previousColor = "";

function Articles() {
  const [articles, setArticles] = useState<ArticleModel[]>([]);
  const searchParams = useSearchParams();
  const searchString = searchParams.get("search");
  const tagsString = searchParams.get("tags");
  const tags = tagsString?.split(",");

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

  useEffect(() => {
    const initArticlesView = async function () {
      const articles = await getArticles();
      setArticles(articles);
    };
    initArticlesView();
  }, []);
  return (
    <div className="flex w-full scrollbar-hide overflow-x-auto h-[151px] md:h-full md:flex-col md:max-w-[180px] md:border-x-[0.1px] md:border-border-color md:overflow-y-auto ">
      {articles
        .filter((article: ArticleModel) => {
          // First check if there's a search string match
          const matchesSearch = article.metadata.title.toLowerCase().includes(searchString?.toLowerCase() || "");
          // If no tags are selected, only check search
          if (!tags || tags.length === 0 || (tags.length == 1 && tags[0] === "")) {
            return matchesSearch;
          }
          // Check if article has any of the selected tags
          const matchesTags = article.metadata.tags?.some((tag) => {
            return tags.includes(tag);
          });
          // Article must match both search and tags criteria
          return matchesSearch && matchesTags;
        })
        .map((article: ArticleModel) => {
          return (
            <ArticleLink
              key={article.metadata.slug}
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
