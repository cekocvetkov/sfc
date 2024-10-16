"use server";

import { getSortedArticlesData } from "../utls/articles";

export async function getArticles() {
  console.log("Getting articles from server in search view");
  return await getSortedArticlesData();
}
