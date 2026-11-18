import { NextRequest, NextResponse } from "next/server";

const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  "motion-design": "Motion Design",
  "ai-video-production": "AI Video Production",
  educational: "Educational",
  "saas-explainer": "SaaS Explainer",
  "product-ads": "Product Ads",
  "3d-look-development": "3D Look Development",
  other: "Other",
};

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    );
  }

  const { name, email, message, projectType, timeline, honeypot } = body || {};

  // Honeypot check (bots will fill this hidden field)
  if (honeypot) {
    return NextResponse.json({ error: "Spam detected" }, { status: 400 });
  }

  // Validate required fields
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  const trimmedProjectType =
    typeof projectType === "string" ? projectType.trim() : "";
  const trimmedTimeline = typeof timeline === "string" ? timeline.trim() : "";

  // Validate input lengths to prevent resource exhaustion/DoS attacks
  if (
    trimmedName.length > 100 ||
    trimmedEmail.length > 250 ||
    trimmedMessage.length > 5000 ||
    trimmedProjectType.length > 100 ||
    trimmedTimeline.length > 100
  ) {
    return NextResponse.json(
      { error: "Input text exceeds maximum allowed limit" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate message length
  if (trimmedMessage.length < 30) {
    return NextResponse.json(
      { error: "Message should be at least 30 characters long" },
      { status: 400 }
    );
  }

  // Block disposable email providers
  const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
  const domain = trimmedEmail.split("@")[1]?.toLowerCase();
  if (domain && blockList.some((blocked) => domain.includes(blocked))) {
    return NextResponse.json(
      { error: "Temporary email addresses are not allowed" },
      { status: 403 }
    );
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey || !privateKey) {
    return NextResponse.json(
      { error: "Missing EmailJS configuration" },
      { status: 500 }
    );
  }

  const formattedProjectType = trimmedProjectType
    ? PROJECT_TYPE_LABELS[trimmedProjectType] || trimmedProjectType
    : "Not specified";

  const formattedTime = `${new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date())} IST`;

  try {
    const response = await fetch(EMAILJS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name: trimmedName,
          email: trimmedEmail,
          project_type: formattedProjectType,
          timeline: trimmedTimeline || "Not specified",
          message: trimmedMessage,
          time: formattedTime,
        },
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      console.error("EmailJS API error:", response.status, responseText);
      return NextResponse.json(
        { error: responseText || "Failed to send email via EmailJS" },
        { status: response.status >= 400 && response.status < 600 ? response.status : 500 }
      );
    }

    return NextResponse.json({ success: true, message: responseText || "OK" });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
