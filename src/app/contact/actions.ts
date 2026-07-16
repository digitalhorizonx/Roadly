"use server";

import { redirect } from "next/navigation";

/**
 * Contact form handler. Submissions are forwarded to CONTACT_WEBHOOK_URL
 * (Zapier, Make, Slack, or any endpoint accepting JSON) when configured;
 * otherwise they're logged server-side so nothing is silently lost.
 */
export async function submitContact(formData: FormData) {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("company")) {
    redirect("/contact?sent=1");
  }

  const submission = {
    name: String(formData.get("name") ?? "").slice(0, 200).trim(),
    phone: String(formData.get("phone") ?? "").slice(0, 50).trim(),
    location: String(formData.get("location") ?? "").slice(0, 300).trim(),
    message: String(formData.get("message") ?? "").slice(0, 2000).trim(),
    receivedAt: new Date().toISOString(),
  };

  if (!submission.name || !submission.phone) {
    redirect("/contact?error=1");
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
    } catch (error) {
      console.error("[contact] webhook delivery failed", error, submission);
    }
  } else {
    console.log("[contact] submission received", submission);
  }

  redirect("/contact?sent=1");
}
