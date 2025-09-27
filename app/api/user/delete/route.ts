import { prisma } from "@/app/prisma";
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { sendUserDeletionNotification } from "@/app/utls/email-service";

export async function DELETE() {
  try {
    const session = await auth();

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Find the user by email
    const user = await prisma.sfcuser.findUnique({
      where: { email: session.user.email },
      include: {
        comments: true,
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Log the deletion for audit purposes (optional)
    console.log(`GDPR deletion requested for user: ${user.email}, comments count: ${user.comments.length}`);

    // Delete the user and all associated comments (cascade delete is configured in schema)
    await prisma.sfcuser.delete({
      where: { id: user.id },
    });

    // Notify admin about the deletion (do not block deletion on email errors)
    try {
      await sendUserDeletionNotification({
        userEmail: user.email,
        userName: user.name ?? null,
        deletedCommentsCount: user.comments.length,
      });
    } catch (emailErr) {
      console.error("Failed to send user deletion notification:", emailErr);
    }

    // Return success response
    return NextResponse.json({
      message: "Account and all associated data deleted successfully",
      deletedCommentsCount: user.comments.length,
    });
  } catch (error) {
    console.error("Error deleting user account:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Failed to delete account",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 },
    );
  }
}
