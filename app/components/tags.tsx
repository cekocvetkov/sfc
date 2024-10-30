"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Tags({ tags }: { tags: string[] }) {
  const router = useRouter();

  const [currentTags, setCurrentTags] = useState<string[]>([]);

  function onClick(tag: string) {
    if (currentTags.includes(tag)) {
      const indexOfTag = currentTags.indexOf(tag);
      const newCurrentTags = [...currentTags.slice(0, indexOfTag), ...currentTags.slice(indexOfTag + 1)];
      setCurrentTags(newCurrentTags);
      router.push(`/search?tags=${encodeURIComponent(newCurrentTags.join(","))}`);
      return;
    }
    const newCurrentTags = Array.from(new Set([...currentTags, tag])); // Convert Set to Array using Array.from
    setCurrentTags(newCurrentTags);
    router.push(`/search?tags=${encodeURIComponent(newCurrentTags.join(","))}`); // Use the array directly
  }

  function isActive(tag: string) {
    return currentTags.includes(tag);
  }

  return (
    <div className="absolute text-sm mt-2 -ml-32 ">
      {tags && tags.length == 0 ? (
        <></>
      ) : (
        tags?.map((tag) => (
          <a onClick={() => onClick(tag)} className={`cursor-pointer hover:bg-accent-color no-underline p-1 mb-1 bg-tags-color table ${isActive(tag) ? "active" : ""}`} key={tag}>
            {tag}
          </a>
        ))
      )}
    </div>
  );
}

export default Tags;
