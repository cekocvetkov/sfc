import { getAllTags, getSortedArticlesData } from "../utls/articles";
import SearchForm from "./search-form";

async function Search() {
  const articles = await getSortedArticlesData();
  const tags = getAllTags(articles);

  return (
    <div className="top-[25%] relative md:top-[28%] md:left-[4%] md:right-5">
      <SearchForm allTags={tags}></SearchForm>
    </div>
  );
}

export default Search;
