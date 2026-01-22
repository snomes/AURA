
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ❗ HARD-CODE YOUR API KEY HERE
const resend = new Resend("re_4sfLxo15_CFMrCJj9nTUpdBcTn4EprpLL");

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = form.get("name")?.toString();
    const organization = form.get("organization")?.toString();
    const email = form.get("email")?.toString();
    const mobile = form.get("mobile")?.toString();
    const message = form.get("message")?.toString();

    // Hard-coded email addresses too
    const FROM = "onboarding@resend.dev";
    const TO = "snomes@gmail.com"; // <-- YOU RECEIVE EMAIL HERE

    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New Demo Request from ${name}`,
            text: `
Name: ${name}
Organization: ${organization}
Email: ${email}
Mobile: ${mobile}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend Error:", err);
    return new NextResponse("Failed to send message", { status: 500 });
  }
}
