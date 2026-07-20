import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required form fields." },
        { status: 400 }
      );
    }

    // Console logging
    console.log("=== NEW CONTACT FORM SUBMISSION RECEIVED ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    // Optional Resend email dispatch if RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Good Health 247 Inquiries <onboarding@resend.dev>",
          to: ["contact@goodhealth247.com"],
          subject: `New Advisor Inquiry from ${name} (${company})`,
          html: `
            <h2>New Contact Form Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      } catch (emailErr) {
        console.error("Resend email dispatch error:", emailErr);
      }
    }

    return NextResponse.json(
      { success: true, message: "Inquiry submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error processing contact form:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}