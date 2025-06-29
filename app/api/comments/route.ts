// import { auth } from "@/auth";
import { prisma } from "@/app/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await auth();
    console.log("Session:", session); // Debug log

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    console.log("Request body:", body); // Debug log

    const { content, postSlug } = body;

    if (!content || !postSlug) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Verify the user exists
    const user = await prisma.sfcuser.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    const comment = await prisma.comment.create({
      data: {
        content,
        postSlug,
        userId: user.id,
      },
      include: {
        user: true,
      },
    });

    console.log("Created comment:", comment); // Debug log
    return NextResponse.json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    // Return more specific error message
    return new NextResponse(JSON.stringify({ error: "Failed to create comment", details: error }), { status: 500 });
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
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to fetch comments", details: error }), { status: 500 });
  }
}
