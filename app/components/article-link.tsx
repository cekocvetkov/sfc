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
    number: number;
  };
}
function ArticleLink({ params }: ArticleParams) {
  const pathName = usePathname();
  const isCurrent = pathName.startsWith(`/article/${params.slug}`);
  const slug = params.slug;
  return (
    <Link
      key={slug}
      href={`/article/${slug}`}
      className={`post-tile ${isCurrent ? "current" : ""}`}
      style={{ "--tile-hover-color": params.color } as React.CSSProperties}
    >
      <div className="post-tile-meta label-caps flex justify-between">
        <span>{String(params.number).padStart(2, "0")}</span>
        <span>{params.date}</span>
      </div>
      <div className="text-[13px] leading-normal line-clamp-4">{params.title}</div>
    </Link>
  );
}

export default ArticleLink;
