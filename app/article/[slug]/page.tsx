import { MdxComponents, MdxOptions } from "@/app/components/mdx/mdx-components";
import { getMdxArticleBySlug, getSortedArticlesData } from "@/app/utls/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";

export async function generateStaticParams() {
  return (await getSortedArticlesData()).map((article) => ({
    slug: article.metadata.slug,
  }));
}
async function Article({ params }: { params: { slug: string } }) {
  console.log(`Article with slug '${params.slug}' opened`);
  const article = await getMdxArticleBySlug(params.slug);

  return (
    <article className="prose text-primary-text-color text-base prose-invert overflow-auto scrollbar-hide">
      {/* @ts-expect-error: Should expect string */}
      <MDXRemote source={article.content} components={MdxComponents} options={MdxOptions} />
    </article>
  );
}

export default Article;
