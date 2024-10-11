import Link from "next/link";
import React from "react";
import { colorScheme, isColorTooSimilar } from "../utls/color-utils";
import { formatDate } from "../utls/date-utils";
let previousColor = "";

function Posts() {
  // Function to generate a random index within the colorScheme array
  const getRandomColor = () => {
    let randomColor;
    do {
      const randomIndex = Math.floor(Math.random() * colorScheme.length);
      randomColor = colorScheme[randomIndex];
    } while (isColorTooSimilar(randomColor, previousColor));
    previousColor = randomColor;
    return randomColor;
  };
  getRandomColor();
  return (
    <div className="flex w-full scrollbar-hide overflow-x-auto h-[151px] md:h-full md:flex-col md:max-w-[180px] md:border-x-[0.1px] md:border-border-color md:overflow-y-auto ">
      {/* <div className="h-[191px] flex flex-col justify-end p-2 hover:bg-[url('/images/github-actions.jpg')] bg-cover"> */}
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Github Actions: Execute kubectl commands from a local cluster with the
          help of self-hosted runner
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Cluster with the help of self-hosted runner
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Cluster with the help of self-hosted runner
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Help of self-hosted runner Cluster with the help of self-hosted
          runnerhelp of self-hosted runnerhelp of self-hosted runner help of
          self-hosted runner self-hosted runner saasdasdassadadasdas
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Cluster with the help of self-hosted runner
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
      <Link
        key={1}
        href={`/post/1`}
        className="post-item min-w-[200px] min-h-[151px] flex flex-col justify-end px-2 py-1 md:min-w-[180px]"
        style={{ backgroundColor: getRandomColor() }}
      >
        <div className="text-sm pb-1 overflow-hidden text-ellipsis line-clamp-6">
          Cluster with the help of self-hosted runner
        </div>
        <div className="text-xs flex justify-end">
          {formatDate("2024-03-12")}
        </div>
      </Link>
    </div>
  );
}

export default Posts;
