
import { getSortedArticlesData } from "./utls/articles";
import { BASE_URL } from "./utls/constants";

export default async function sitemap() {
    const articles = await getSortedArticlesData();

    const articlePosts = articles.map((a => {
        return {
            url: `${BASE_URL}/article/${a.metadata.slug}`,
            lastModified: new Date(a.metadata.date)
        }
    }))

    return [
        {
            url: BASE_URL,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}/about`,
            lastModified: new Date()
        },
        {
            url: `${BASE_URL}/search`,
            lastModified: new Date()
        },
        ... articlePosts
    ]

}