import { ArticleModel, getSortedArticlesData } from "../utls/articles";
import SearchForm from "./search-form";
export interface TagItem {
  tag?: string;
  count?: number;
  active?: boolean;
}
async function Search() {
  function getAllTags(articles: Array<ArticleModel>) {
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

  const articles = await getSortedArticlesData();
  const tags = getAllTags(articles);

  return (
    <div className="md:relative md:top-[174px] md:bottom-0 md:left-5 md:right-5">
      <SearchForm allTags={tags}></SearchForm>
    </div>
  );
}

export default Search;
