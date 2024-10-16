"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState, useTransition } from "react";
import { ArticleModel } from "../utls/articles";
import { getArticles } from "./server-action";
interface TagItem {
  tag?: string;
  count?: number;
  active?: boolean;
}
async function Search() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsValue = searchParams.get("search") ? searchParams.get("search") : "";
  const tagsParamValue = searchParams.get("tags") ? searchParams.get("tags") : "";
  const [, startTransition] = useTransition();
  const [currentTags, setCurrentTags] = useState<TagItem[]>([]);

  function getAllTags(articles: Array<ArticleModel>) {
    const tagsMap = new Map<string, TagItem>();

    articles.forEach((article: ArticleModel) => {
      article.metadata.tags?.forEach((tag) => {
        if (!tagsMap.has(tag)) {
          tagsMap.set(tag, { tag, active: false, count: 1 });
        } else {
          tagsMap.get(tag)!.count! += 1;
        }
      });
    });

    return Array.from(tagsMap.values());
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value;
    const tagsString = currentTags
      .filter((t) => t.active === true)
      .map((t) => t.tag)
      .join(",");
    router.push(`${pathname}?search=${input}&tags=${tagsString}`);
  }
  function handleTagClick(tag: string) {
    //TOGGLE THIS
    const newCurrentTags = currentTags;
    const clickedTag = newCurrentTags.find((t) => t.tag === tag);
    clickedTag!.active = !clickedTag?.active;

    setCurrentTags([...newCurrentTags]);
    const tagsString = newCurrentTags
      .filter((t) => t.active === true)
      .map((t) => t.tag)
      .join(",");
    router.push(`${pathname}?search=${searchParamsValue}&tags=${tagsString}`);
  }

  useEffect(() => {
    startTransition(async () => {
      const articles = await getArticles();
      const tags = getAllTags(articles);
      const tagParams = tagsParamValue?.split(",");
      tags.forEach((t) => {
        if (tagParams!.includes(t.tag!)) {
          t.active = true;
        }
      });
      setCurrentTags(tags);
    });
  }, []);
  return (
    <div className="flex flex-col flex-grow justify-center">
      <div className="">
        <input
          className="w-4/5 outline-none bg-transparent text-primary-text-color text-3xl border-[hsla(45,29%,97%,.5)] border-b-[0.5px] placeholder:text-[#eb905080] placeholder:opacity-100"
          autoFocus={true}
          value={searchParamsValue!}
          type="text"
          placeholder="search"
          onChange={handleSearch}
        />
      </div>
      <div className="mt-6 flex gap-3 flex-wrap text-sm">
        {currentTags.length == 0 ? (
          <></>
        ) : (
          currentTags.map((tagItem: TagItem) => (
            <a onClick={() => handleTagClick(tagItem!.tag!)} className={`p-1 bg-tags-color table ${tagItem!.active ? "active" : ""}`} key={tagItem.tag}>
              {tagItem.tag} ({tagItem.count})
            </a>
          ))
        )}
      </div>
    </div>
  );
}

export default Search;
