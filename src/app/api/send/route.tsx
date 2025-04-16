import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(request: Request) {
  const email = await request.json();

  if (!email.subject || !email.message || !email.emailSender) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: myEmail,
    subject: email.subject,
    html: `<p>${email.message}</p><p>FROM: ${email.emailSender}</p>`, 
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json({ email, data }, { status: 200 });
}
