import { getAllTags, getSortedArticlesData } from "../utls/articles";
import SearchForm from "./search-form";

async function Search() {
  const articles = await getSortedArticlesData();
  const tags = getAllTags(articles);

  return (
    <div className="md:relative md:top-[174px] md:bottom-0 md:left-5 md:right-5">
      <SearchForm allTags={tags}></SearchForm>
    </div>
  );
}

export default Search;
