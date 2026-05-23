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
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">

      <div style="background:#06182d; color:#ffffff; padding:20px;">
        <h2 style="margin:0;">New Mortgage Lead</h2>
        <p style="margin-top:8px;">Atlas Mortgage Website</p>
      </div>

      <div style="padding:25px; color:#06182d;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong></p>

        <div style="background:#f1f5f9; padding:15px; border-radius:8px;">
          ${message}
        </div>
      </div>

      <div style="background:#f9fafb; padding:15px; font-size:12px; color:#666;">
        This lead was submitted from the Atlas Mortgage website contact form.
      </div>

    </div>
  </div>
`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
