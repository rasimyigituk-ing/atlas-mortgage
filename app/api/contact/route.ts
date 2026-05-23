import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const data = await resend.emails.send({
      from: "Atlas Mortgage <onboarding@resend.dev>",
      to: "rasimyigituk@gmail.com",
      subject: "New Mortgage Lead",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
