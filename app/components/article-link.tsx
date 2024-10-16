"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface ArticleParams {
  params: {
    color: string;
    date: string;
    title: string;
    slug: string;
  };
}
function ArticleLink({ params }: ArticleParams) {
  const pathName = usePathname();
  const color = pathName.startsWith(`/article/${params.slug}`) ? "#445544" : params.color;
  const slug = params.slug;
  return (
    <Link key={slug} href={`/article/${slug}`} className={`post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]`} style={{ backgroundColor: color }}>
      <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">{params.title}</div>
      <div className="text-xs flex justify-end">{params.date}</div>
    </Link>
  );
}

export default ArticleLink;
