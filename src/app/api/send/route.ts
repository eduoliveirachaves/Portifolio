import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    react: "<><p>EMAIL</p></>",
  });

  if (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}
