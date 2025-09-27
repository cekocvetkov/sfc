import { CommentNotificationData as CommentNotificationDataType, NewUserNotificationData, UserDeletionNotificationData } from "./email-types";

export function EmailTemplate({ commenterName, commenterEmail, commentContent, postSlug, postTitle, commentUrl }: CommentNotificationDataType) {
  return (
    <div>
      <h1>
        New Comment on Your Post <a href={commentUrl}>{postTitle}</a>
      </h1>
      <p>You have a new comment on your post: {postTitle}</p>
      <p>Comment: {commentContent}</p>
      <p>Commenter Email: {commenterEmail}</p>
      <p>Commenter Name: {commenterName}</p>
      <p>Post Slug: {postSlug}</p>
      <p>Post Title: {postTitle}</p>
    </div>
  );
}

export function NewUserEmailTemplate({ userName, userEmail }: NewUserNotificationData) {
  return (
    <div>
      <h1>New User Registered</h1>
      <p>Name: {userName || "N/A"}</p>
      <p>Email: {userEmail}</p>
    </div>
  );
}

export function DeletionEmailTemplate({ userEmail, userName, deletedCommentsCount }: UserDeletionNotificationData) {
  return (
    <div>
      <h1>User Account Deleted</h1>
      <p>The following user requested account deletion (GDPR):</p>
      <p>Name: {userName || "N/A"}</p>
      <p>Email: {userEmail}</p>
      {typeof deletedCommentsCount === "number" ? <p>Deleted comments: {deletedCommentsCount}</p> : null}
    </div>
  );
}
