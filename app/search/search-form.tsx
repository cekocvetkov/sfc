"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { TagItem } from "../utls/articles";

interface TagsProps {
  allTags: TagItem[];
}

function SearchForm({ allTags }: TagsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsValue: string = searchParams.get("search") || "";
  const tagsParamValue: string = searchParams.get("tags") || "";
  const [currentTags, setCurrentTags] = useState<TagItem[]>(allTags);
  const [input, setInput] = useState<string>(searchParamsValue);

  const handleSearchDebounced = useDebouncedCallback(() => {
    const tagsString = currentTags
      .filter((t) => t.active === true)
      .map((t) => t.tag)
      .join(",");
    router.push(`${pathname}?search=${input}&tags=${tagsString}`);
  }, 100);

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
    const tagParams = tagsParamValue?.split(",");
    const updatedTags = allTags.map((t) => {
      // Create a new object for each tag
      return {
        ...t,
        active: tagParams!.includes(t.tag!), // Set active based on tagParams
      };
    });
    setCurrentTags(updatedTags); // Update state with the new array
  }, []);
  return (
    <div className="flex flex-col flex-grow justify-center">
      <div className="">
        <input
          className="w-4/5 outline-none bg-transparent text-primary-text-color text-3xl border-[hsla(45,29%,97%,.5)] border-b-[0.5px] placeholder:text-[#eb905080] placeholder:opacity-100"
          autoFocus={true}
          value={input}
          type="text"
          placeholder="search"
          onChange={(e) => {
            setInput(e.target.value);
            handleSearchDebounced();
          }}
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

export default SearchForm;
