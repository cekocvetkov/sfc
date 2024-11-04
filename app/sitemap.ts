
import { getSortedArticlesData } from "./utls/articles";

export default async function sitemap() {
    const baseUrl="https://tsvetan-tsvetkov.com"
    const articles = await getSortedArticlesData();

    const articlePosts = articles.map((a => {
        return {
            url: `${baseUrl}/article/${a.metadata.slug}`,
            lastModified: new Date(a.metadata.date)
        }
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date()
        },
        ... articlePosts
    ]

}