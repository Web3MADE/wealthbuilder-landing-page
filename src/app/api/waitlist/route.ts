import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@<>]+@(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i;

type WaitlistStatus = "success" | "already_registered" | "invalid_email" | "error";

type WebhookResult = "success" | "already_registered" | "invalid_email" | "error";

async function fetchWebhookResult(webhookUrl: string, email: string) {
  // Keep the whole request bounded, including Apps Script's response redirect.
  const signal = AbortSignal.timeout(15000);
  const submission = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    cache: "no-store",
    redirect: "manual",
    signal,
  });

  if (submission.status !== 302 && submission.status !== 303) return submission;

  const location = submission.headers.get("location");
  if (!location) throw new Error("Missing webhook response redirect");

  const destination = new URL(location, webhookUrl);
  if (
    destination.protocol !== "https:" ||
    destination.hostname !== "script.googleusercontent.com"
  ) {
    throw new Error("Unexpected webhook response redirect");
  }

  // Apps Script serves JSON from a temporary redirect URL. Retry only that
  // read if it is not ready yet; do not resubmit the email to the webhook.
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const response = await fetch(destination, {
        cache: "no-store",
        signal,
      });
      if (response.status !== 404 || attempt === 2) return response;
    } catch (error) {
      if (attempt === 2) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
  }

  throw new Error("Webhook response unavailable");
}

function reply(status: WaitlistStatus, message: string, httpStatus: number) {
  return NextResponse.json(
    { status, message },
    { status: httpStatus, headers: { "Cache-Control": "no-store" } },
  );
}

function classifyWebhookResponse(body: string): WebhookResult {
  let data: unknown;
  try {
    data = JSON.parse(body);
  } catch {
    return "error";
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) return "error";

  const result = data as Record<string, unknown>;
  if (result.success === true && result.existing === true) return "already_registered";
  if (result.success === true) return "success";
  if (
    result.success === false &&
    typeof result.error === "string" &&
    result.error.trim().toLowerCase() === "invalid email"
  ) return "invalid_email";
  return "error";
}

export async function POST(request: Request) {
  let rawEmail: unknown;
  try {
    if (request.headers.get("content-type")?.includes("application/json")) {
      const body: unknown = await request.json();
      rawEmail =
        body && typeof body === "object" && !Array.isArray(body)
          ? (body as Record<string, unknown>).email
          : undefined;
    } else {
      rawEmail = (await request.formData()).get("email");
    }
  } catch {
    return reply("invalid_email", "Enter a valid email address.", 400);
  }

  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
  const localPart = email.split("@")[0] ?? "";

  if (
    email.length > 254 ||
    localPart.length > 64 ||
    localPart.startsWith(".") ||
    localPart.endsWith(".") ||
    localPart.includes("..") ||
    !EMAIL_PATTERN.test(email)
  ) {
    return reply("invalid_email", "Enter a valid email address.", 400);
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("Waitlist webhook is not configured.");
    return reply("error", "We couldn’t join the list right now. Please try again later.", 503);
  }

  try {
    const response = await fetchWebhookResult(webhookUrl, email);
    const result = classifyWebhookResponse(await response.text());
    console.log("result ", result)
    if (result === "already_registered") {
      return reply("already_registered", "You’re already on the list.", 200);
    }
    if (response.ok && result === "success") {
      return reply("success", "You’re on the list.", 200);
    }
    if (result === "invalid_email") {
      return reply("invalid_email", "Enter a valid email address.", 400);
    }

    console.error("Waitlist webhook returned an unsuccessful response.", response.status);
    return reply("error", "We couldn’t join the list right now. Please try again later.", 502);
  } catch (error) {
    console.error("Waitlist webhook request failed.", error instanceof Error ? error.name : "Unknown error");
    return reply("error", "We couldn’t join the list right now. Please try again later.", 502);
  }
}
