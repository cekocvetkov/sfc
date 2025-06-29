import { MdxComponents, MdxOptions } from "@/app/components/mdx/mdx-components";
import Tags from "@/app/components/tags";
import { getMdxArticleBySlug, getSortedArticlesData } from "@/app/utls/articles";
import { MDXRemote } from "next-mdx-remote/rsc";
import React from "react";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/app/utls/constants";
import CommentSection from "@/app/components/comments/comment-section";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const article = await getMdxArticleBySlug(params.slug);
    return {
      openGraph: {
        title: article.metadata.title,
        images: [`${BASE_URL}/images/${article.metadata.image}`],
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export async function generateStaticParams() {
  return (await getSortedArticlesData()).map((article) => ({
    slug: article.metadata.slug,
  }));
}
async function Article({ params }: { params: { slug: string } }) {
  console.log(`Article with slug '${params.slug}' opened`);
  const article = await getMdxArticleBySlug(params.slug).catch((e) => {
    console.error(e);
    return notFound();
  });

  if (!article) return notFound();

  return (
    <article className="min-w-full prose text-primary-text-color text-base prose-invert overflow-auto overflow-x-hidden scrollbar-hide transition-transform ease-in-out duration-[0.2s]">
      <Tags tags={article.metadata.tags}></Tags>

      {/* @ts-expect-error: Should expect string */}
      <MDXRemote source={article.content} components={MdxComponents} options={MdxOptions} />

      <div id="comments-section">
        <CommentSection postSlug={params.slug} />
      </div>
    </article>
  );
}

export default Article;
