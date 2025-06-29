"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react"
import CommentForm from "./comment-form";
import CommentList from "./comment-list";

export interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    name: string | null;
    image: string | null;
  };
}

export default function CommentSection({ postSlug }: { postSlug: string }) {
  const [dbError, setDbError] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { status } = useSession();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?postSlug=${postSlug}`);
        if (!response.ok) {
          // If there's an error (like DB connection), just set empty comments
          setComments([]);
          const errorData = await response.json();
          setDbError("There was a problem fetching the comments" + errorData.error);
          return;
        }
        const commentsData = await response.json();
        setComments(commentsData);
        setDbError(""); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching comments:", error);
        // On any error, just set empty comments
        setComments([]);
        setDbError("There was a problem fetching the comments");
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postSlug]);

  const handleCommentAdded = (newComment: Comment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
    setDbError(""); // Clear any previous errors when new comment is added
  };

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="mt-8 space-y-6 mb-20">
      <h2 className="text-2xl font-bold">Comments</h2>
      {status === "authenticated" ? (
        <CommentForm postSlug={postSlug} onCommentAdded={handleCommentAdded} />
      ) : (
        <p className="text-sm text-gray-300">
          Please{"  "}
          <button className="font-extrabold hover:text-secondary-text-color"
           onClick={() => signIn("github")}
           >
            Sign In with GitHub
          </button>{" "}
          to leave a comment
        </p>
      )}
      {dbError && <p className="text-red-500 text-sm">{dbError}</p>}
      <CommentList comments={comments} />
    </div>
  );
}
