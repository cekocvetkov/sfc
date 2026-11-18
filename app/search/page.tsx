import { getAllTags, getSortedArticlesData } from "../utls/articles";
import SearchForm from "./search-form";

async function Search() {
  const articles = await getSortedArticlesData();
  const tags = getAllTags(articles);

  return (
    <div className="mt-[14vh]">
      <SearchForm allTags={tags}></SearchForm>
    </div>
  );
}

export default Search;
