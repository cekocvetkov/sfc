import Image from "next/image";
interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  user: {
    name: string | null;
    image: string | null;
  };
}

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (comments.length === 0) {
    return <p className="pb-20">No comments yet. Be the first to comment!</p>;
  }

  const formatDate = (date: Date) => {
    const now = new Date();
    const commentDate = new Date(date);
    const diffInSeconds = Math.floor((now.getTime() - commentDate.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return commentDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="p-6 border-border-color border-[0.1px] bg-code-snippet-background-color flex flex-col gap-y-6">
          <div className="flex items-center gap-x-2">
            {comment.user.image && <Image width={40} height={40} src={comment.user.image} alt={comment.user.name || "User"} className="rounded-full p-0 m-0" />}
            <div className="flex flex-col justify-center">
              <div className="font-medium">{comment.user.name || "Anonymous"}</div>
              <div className="text-sm text-gray-400">{formatDate(comment.createdAt)}</div>
            </div>
          </div>
          <div className="text-gray-200 pl-2">{comment.content}</div>
        </div>
      ))}
    </div>
  );
}
