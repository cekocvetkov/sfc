export interface CommentNotificationData {
  commenterName: string;
  commenterEmail: string;
  commentContent: string;
  postSlug: string;
  postTitle?: string;
  commentUrl: string;
}

export interface NewUserNotificationData {
  userName?: string | null;
  userEmail: string;
  provider: string;
  profileImage?: string | null;
}

export interface UserDeletionNotificationData {
  userEmail: string;
  userName?: string | null;
  deletedCommentsCount?: number;
}
