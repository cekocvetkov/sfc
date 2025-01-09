import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

export interface ArticleMetadata {
  title: string;
  date: string;
  slug: string;
  tags: string[];
  image: string;
  published?: boolean;
}

export interface ArticleModel {
  content: string;
  metadata: ArticleMetadata;
}
export interface TagItem {
  tag?: string;
  count?: number;
  active?: boolean;
}
const articlesDirectory = path.join(process.cwd(), "articles");

export async function getMdxArticleBySlug(slug: string) {
  // Read markdown file as string
  const fullArticlePath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(fullArticlePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const article: ArticleModel = {
    content: matterResult.content,
    metadata: {
      title: matterResult.data.title,
      date: matterResult.data.date,
      tags: matterResult.data.tags,
      slug: slug,
      image: matterResult.data.image,
      published: matterResult.data.published ? matterResult.data.published : false,
    },
  };

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
        metadata: {
          title: matterResult.data.title,
          date: matterResult.data.date,
          tags: matterResult.data.tags,
          slug: fileNameWithoutMdx,
          image: matterResult.data.image,
          published: matterResult.data.published ? matterResult.data.published : false,
        },
      };
      // Combine the data with the id
      return article;
    })
  );
  // Sort articles by date
  return allArticlesData
    .filter((a) => a.metadata.published === true)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date);
      const dateB = new Date(b.metadata.date);
      return dateB.getTime() - dateA.getTime();
    });
}

export function getAllTags(articles: Array<ArticleModel>) {
  const tagsMap = new Map<string, TagItem>();

  articles.forEach((article: ArticleModel) => {
    article.metadata.tags?.forEach((tag) => {
      if (!tagsMap.has(tag)) {
        tagsMap.set(tag, { tag, active: false, count: 1 });
      } else {
        tagsMap.get(tag)!.count! += 1;
      }
    });
  });

  return Array.from(tagsMap.values());
}
