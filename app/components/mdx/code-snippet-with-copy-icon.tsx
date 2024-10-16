"use client";
import React, { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function CodeSnippetWithCopyIcon(props: any) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const code = props.children.props.children;
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative">
      <button onClick={handleCopy} className="absolute top-2 right-2 bg-border-color hover:bg-accent-color text-white px-2 py-1 rounded text-[13px]">
        {isCopied ? "Copied!" : "Copy"}
      </button>
      <pre
        className="!bg-code-snippet-background-color 
        [&::-webkit-scrollbar]:h-2
      [&::-webkit-scrollbar-track]:bg-[#a37c64]
        [&::-webkit-scrollbar-thumb]:rounded-[15%]
      [&::-webkit-scrollbar-thumb]:bg-[#784F35]"
        {...props}
      />
    </div>
  );
}

export default CodeSnippetWithCopyIcon;
