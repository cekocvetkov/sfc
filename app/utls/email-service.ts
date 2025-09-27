"use server";
import { Resend } from "resend";
import { EmailTemplate, NewUserEmailTemplate, DeletionEmailTemplate } from "./email-template";
import type { CommentNotificationData, NewUserNotificationData, UserDeletionNotificationData } from "./email-types";
import React from "react";
import { render } from "@react-email/render";

// Lazily create the Resend client at runtime to avoid requiring env vars during build
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(key);
}

export async function sendCommentNotification(commentNotificationData: CommentNotificationData) {
  console.log("Sending comment notification...");
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service not configured" };
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error("ADMIN_EMAIL is not configured");
    return { success: false, error: "Admin email not configured" };
  }

  // Render React email component to HTML string without using react-dom/server
  const html = await render(React.createElement(EmailTemplate, commentNotificationData));

  const resendEmailData = {
    from: "Tsvetan Tsvetkov SFC <sfc@tsvetan-tsvetkov.com>",
    to: [process.env.ADMIN_EMAIL],
    subject: `New Comment on "${commentNotificationData.postTitle || commentNotificationData.postSlug}"`,
    html: html,
  };

  console.log("!!!!!!!!");
  //   console.log(JSON.stringify(resendEmailData, null, 2));

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send(resendEmailData);

    if (error) {
      console.error("Error sending email:", error);
      return Response.json({ error }, { status: 500 });
    }
    console.log("Email sent successfully");
    console.log(JSON.stringify(data, null, 2));
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendUserDeletionNotification(data: UserDeletionNotificationData) {
  console.log("Sending user deletion notification...");
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service not configured" };
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error("ADMIN_EMAIL is not configured");
    return { success: false, error: "Admin email not configured" };
  }

  const html = await render(React.createElement(DeletionEmailTemplate, data));
  const subjectName = data.userName?.trim() || data.userEmail;

  const resendEmailData = {
    from: "Tsvetan Tsvetkov SFC <sfc@tsvetan-tsvetkov.com>",
    to: [process.env.ADMIN_EMAIL],
    subject: `User Account Deleted: ${subjectName}`,
    html,
  };

  try {
    const resend = getResend();
    const { data: sent, error } = await resend.emails.send(resendEmailData);
    if (error) {
      console.error("Error sending user deletion email:", error);
      return Response.json({ error }, { status: 500 });
    }
    console.log("User deletion email sent successfully");
    console.log(JSON.stringify(sent, null, 2));
    return Response.json(sent);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

export async function sendNewUserNotification(newUserData: NewUserNotificationData) {
  console.log("Sending new user notification...");
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return { success: false, error: "Email service not configured" };
  }

  if (!process.env.ADMIN_EMAIL) {
    console.error("ADMIN_EMAIL is not configured");
    return { success: false, error: "Admin email not configured" };
  }

  const html = await render(React.createElement(NewUserEmailTemplate, newUserData));

  const subjectName = newUserData.userName?.trim() || newUserData.userEmail;
  const resendEmailData = {
    from: "Tsvetan Tsvetkov SFC <sfc@tsvetan-tsvetkov.com>",
    to: [process.env.ADMIN_EMAIL],
    subject: `New User Registered: ${subjectName}`,
    html,
  };

  try {
    const resend = getResend();
    const { data, error } = await resend.emails.send(resendEmailData);
    if (error) {
      console.error("Error sending new user email:", error);
      return Response.json({ error }, { status: 500 });
    }
    console.log("New user email sent successfully");
    console.log(JSON.stringify(data, null, 2));
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

