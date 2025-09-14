"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react"
import CommentForm from "./comment-form";
import CommentList from "./comment-list";
import useMobile from "../../hooks/IsMobile";

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
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { status } = useSession();
  const isMobile = useMobile();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comments?postSlug=${postSlug}`);
        if (!response.ok) {
          // If there's an error (like DB connection), just set empty comments
          setComments([]);
          const errorData = await response.json();
          setDbError("There was a problem fetching the comments: " + errorData.error);
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

  const handleSignIn = async () => {
    setIsSigningIn(true);
    try {
      await signIn("github");
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      // Reset loading state after a delay to show the loading message
      setTimeout(() => setIsSigningIn(false), 3000);
    }
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
          {isSigningIn ? (
            <span className="font-extrabold text-secondary-text-color animate-pulse">
              Logging in...
            </span>
          ) : (
            <button
              className={`font-extrabold hover:text-secondary-text-color transition-colors ${isMobile.current
                ? 'animate-pulse text-secondary-text-color hover:text-secondary-text-color'
                : 'hover:text-secondary-text-color'
                }`}
              onClick={handleSignIn}
              disabled={isSigningIn}
            >
              Sign In with GitHub
            </button>
          )}{" "}
          to leave a comment
        </p>
      )}
      {dbError && <p className="text-red-500 text-sm">{dbError}</p>}
      {!dbError && <CommentList comments={comments} />}
    </div>
  );
}
