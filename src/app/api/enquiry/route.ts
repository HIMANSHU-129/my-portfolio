import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { senderName, senderEmail, enquiryType, budgetTimeline, payloadMessage } = body;

    // Validate required fields
    if (!senderName || !senderEmail || !payloadMessage) {
      return NextResponse.json(
        { success: false, error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(senderEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // In production, this can forward to Resend, Nodemailer, Slack webhook, or Telegram bot.
    console.log("[INCOMING_ENQUIRY_DISPATCH]", {
      timestamp: new Date().toISOString(),
      senderName,
      senderEmail,
      enquiryType: enquiryType || "General Role",
      budgetTimeline: budgetTimeline || "Immediate",
      payloadMessage,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received and queued for priority dispatch.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[ENQUIRY_DISPATCH_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Server encountered an error processing your enquiry." },
      { status: 500 }
    );
  }
}
