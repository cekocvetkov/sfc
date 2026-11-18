// import { Post } from "#site/content";

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Formats a date as "May 24": short enough for the article strip tiles. */
export function formatShortDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}
// export function sortByDate(posts: Post[]) {
//   return posts.sort((a, b) => {
//     if (a.date > b.date) return -1;
//     if (a.date < b.date) return 1;
//     return 0;
//   });
// }