import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, linkedin, coverNote } = body;

    // Server-side validation
    if (!name || !email || !role || !linkedin || !coverNote) {
      return NextResponse.json(
        { error: "Missing required candidate application fields." },
        { status: 400 }
      );
    }

    // Console logging
    console.log("=== NEW CAREERS CANDIDATE APPLICATION RECEIVED ===");
    console.log(`Candidate Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || "N/A"}`);
    console.log(`Applied Position: ${role}`);
    console.log(`LinkedIn/Portfolio: ${linkedin}`);
    console.log(`Cover Note: ${coverNote}`);
    console.log("================================================");

    /**
     * EMAIL DISPATCH INTEGRATION:
     * To forward candidate applications directly to contact@goodhealth247.com:
     *
     * const resend = new Resend(process.env.RESEND_API_KEY);
     * await resend.emails.send({
     *   from: "Good Health 247 Careers <onboarding@resend.dev>",
     *   to: ["contact@goodhealth247.com"],
     *   subject: `New Application: ${name} - ${role}`,
     *   html: `
     *     <h2>New Candidate Application</h2>
     *     <p><strong>Candidate Name:</strong> ${name}</p>
     *     <p><strong>Email:</strong> ${email}</p>
     *     <p><strong>Phone:</strong> ${phone || "N/A"}</p>
     *     <p><strong>Position Applied:</strong> ${role}</p>
     *     <p><strong>LinkedIn Profile:</strong> <a href="${linkedin}">${linkedin}</a></p>
     *     <p><strong>Cover Note / Message:</strong> ${coverNote}</p>
     *   `,
     * });
     */

    return NextResponse.json(
      { success: true, message: "Application submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing candidate application:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
