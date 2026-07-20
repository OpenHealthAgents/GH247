import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic server-side validation
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "Missing required form fields." },
        { status: 400 }
      );
    }

    // Server-side submission log
    console.log("=== NEW CONTACT FORM SUBMISSION RECEIVED ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Company: ${company}`);
    console.log(`Message: ${message}`);
    console.log("==========================================");

    /**
     * EMAIL DISPATCH INTEGRATION:
     * To forward submissions directly to contact@goodhealth247.com:
     * 1. Install Resend: `npm install resend`
     * 2. Set RESEND_API_KEY in .env.local
     * 3. Uncomment the code block below:
     *
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: "Good Health 247 Form <onboarding@resend.dev>",
     *   to: ["contact@goodhealth247.com"],
     *   subject: `New Advisor Inquiry from ${name} (${company})`,
     *   html: `
     *     <h2>New Contact Inquiry</h2>
     *     <p><strong>Name:</strong> ${name}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     <p><strong>Phone:</strong> ${phone || "N/A"}</p>
     *     <p><strong>Company:</strong> ${company}</p>
     *     <p><strong>Message:</strong> ${message}</p>
     *   `,
     * });
     */

    return NextResponse.json(
      { success: true, message: "Inquiry logged successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
