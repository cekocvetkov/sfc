import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { prisma } from "./app/prisma";
import { sendNewUserNotification } from "./app/utls/email-service";

export const { auth, handlers } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({ user, account }) {
      console.log("User:", user);
      console.log("Account:", account);

      if (!user?.email || !account?.provider) return false;

      try {
        if (account.provider === "github") {
          const existingUser = await prisma.sfcuser.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            // Create new user if doesn't exist
            await prisma.sfcuser.create({
              data: {
                email: user.email,
                name: user.name || null,
                image: user.image || null,
                provider: account.provider,
              },
            });

            // Notify admin about the new user registration
            try {
              await sendNewUserNotification({
                userName: user.name || null,
                userEmail: user.email,
                provider: account.provider,
              });
            } catch (emailError) {
              console.error("Failed to send new user notification:", emailError);
              // don't block sign-in if email fails
            }
          }
        }

        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },
  },
});
