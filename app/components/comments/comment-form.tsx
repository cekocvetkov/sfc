"use client";

import { useState } from "react";
import { Comment } from "./comment-section";

interface CommentFormProps {
  postSlug: string;
  onCommentAdded: (comment: Comment) => void;
}

export default function CommentForm({ postSlug, onCommentAdded }: CommentFormProps) {
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, postSlug }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to post comment");
      }

      setContent("");
      onCommentAdded(data);
    } catch (error) {
      console.error("Error posting comment:", error);
      setError(error instanceof Error ? error.message : "Failed to post comment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your comment..."
        className="w-full p-2 border-border-color border-[0.1px] min-h-[100px] bg-code-snippet-background-color focus:outline-none focus:border-border-color focus:border-[1px]"
        required
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-accent-color rounded-md hover:bg-accent-color-darker disabled:opacity-50">
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
}
