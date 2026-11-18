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
    <div className="not-prose label-caps flex flex-wrap gap-x-5 gap-y-1 mb-5">
      {tags && tags.length == 0 ? (
        <></>
      ) : (
        tags?.map((tag) => (
          <a onClick={() => onClick(tag)} className={`cursor-pointer transition-colors hover:text-primary-text-color ${isActive(tag) ? "text-primary-text-color underline underline-offset-4" : "text-secondary-text-color"}`} key={tag}>
            {tag}
          </a>
        ))
      )}
    </div>
  );
}

export default Tags;
