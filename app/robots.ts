import type { MetadataRoute } from 'next'
import { BASE_URL } from './utls/constants'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: [],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}