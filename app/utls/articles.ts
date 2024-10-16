import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { metadata } from "../layout";

export interface ArticleMetadata {
  title: string;
  date: string;
  slug: string;
  tags: string[];
}

export interface ArticleModel {
  content: string;
  metadata: ArticleMetadata;
}

const articlesDirectory = path.join(process.cwd(), "articles");

export async function getMdxArticleBySlug(slug: string) {
  // Read markdown file as string
  const fullArticlePath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullArticlePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const article: ArticleModel = { content: matterResult.content, metadata: { title: matterResult.data.title, date: matterResult.data.date, tags: matterResult.data.tags, slug: slug } };

  return article;
}

export async function getSortedArticlesData(): Promise<ArticleModel[]> {
  console.log(`Read file names from directory '${articlesDirectory}'`);
  // Get file names under /articles
  const articlesFileNames = await fs.readdir(articlesDirectory);
  console.log(`Following articles are available: ${articlesFileNames}`);
  const allArticlesData = await Promise.all(
    articlesFileNames.map(async (fileName) => {
      // Remove ".mdx" from file name
      const fileNameWithoutMdx = fileName.replace(/\.mdx$/, "");

      // Read markdown file as string
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      const article: ArticleModel = {
        content: matterResult.content,
        metadata: { title: matterResult.data.title, date: matterResult.data.date, tags: matterResult.data.tags, slug: fileNameWithoutMdx },
      };
      // Combine the data with the id
      return article;
    })
  );
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    const dateA = new Date(a.metadata.date);
    const dateB = new Date(b.metadata.date);
    return dateB.getTime() - dateA.getTime();
  });
}

// export const getArticleData = async (fileName: string) => {
//   const fullPath = path.join(articlesDirectory, `${fileName}.mdx`);
//   const fileContents = await fs.readFile(fullPath, "utf8");
//   const matterResult = matter(fileContents);
//   const content = matterResult.content;
//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark().use(html).process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   return {
//     fileName,
//     contentHtml,
//     content,
//     ...matterResult.data,
//   };
// };

export const getTagArticlesMap = (): Record<string, ArticleModel[]> => {
  return {};
};
