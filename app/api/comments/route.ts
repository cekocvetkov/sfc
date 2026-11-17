import { prisma } from "@/app/prisma";
import { sendCommentNotification } from "@/app/utls/email-service";
import { articleExists, getMdxArticleBySlug } from "@/app/utls/articles";
import { MAX_COMMENT_LENGTH } from "@/app/utls/constants";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Comments are public: expose only what the comment list shows, never the author's email.
const publicAuthor = { select: { name: true, image: true } } as const;

const MAX_COMMENTS_PER_WINDOW = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

function errorResponse(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

async function hasReachedRateLimit(userId: string): Promise<boolean> {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS);
  const recentComments = await prisma.comment.count({ where: { userId, createdAt: { gte: windowStart } } });
  return recentComments >= MAX_COMMENTS_PER_WINDOW;
}

export async function POST(req: Request) {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const content = typeof body.content === "string" ? body.content.trim() : "";
    const postSlug = typeof body.postSlug === "string" ? body.postSlug : "";

    if (!content || !postSlug) {
      return errorResponse("Missing required fields");
    }
    if (content.length > MAX_COMMENT_LENGTH) {
      return errorResponse(`Comment is too long (max ${MAX_COMMENT_LENGTH} characters)`);
    }
    if (!(await articleExists(postSlug))) {
      return errorResponse("Article not found", 404);
    }

    // Verify the user exists
    const user = await prisma.sfcuser.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }
    if (await hasReachedRateLimit(user.id)) {
      return errorResponse("Too many comments, please wait a few minutes", 429);
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postSlug,
        userId: user.id,
      },
      include: {
        user: publicAuthor,
      },
    });

    console.log("Sending comment notification...");
    // Try to get the article title from MDX frontmatter; fallback to slug
    let postTitle = postSlug;
    try {
      const article = await getMdxArticleBySlug(postSlug);
      postTitle = article?.metadata?.title || postSlug;
    } catch (e) {
      console.error("Failed to get article title:", e);
    }
    await sendCommentNotification({
      commenterName: user.name || "Anonymous",
      commenterEmail: user.email,
      commentContent: content,
      postSlug,
      postTitle: postTitle,
      commentUrl: `${process.env.WEBSITE_URL}/article/${postSlug}#comments`,
    }).catch((error) => {
      console.error("Failed to send comment notification:", error);
      // Don't fail the comment creation if email fails
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    return NextResponse.json({ error: "Failed to create comment" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    if (!postSlug) {
      return new NextResponse("Missing postSlug parameter", { status: 400 });
    }

    const comments = await prisma.comment.findMany({
      where: { postSlug },
      include: { user: publicAuthor },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}
