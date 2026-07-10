import { NextResponse } from "next/server";
import { transporter } from "@/lib/email";
import { COMPANY_DATA } from "@/lib/constants";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, company, email, phone, interest, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || COMPANY_DATA.email,
      subject: `New Website Enquiry from ${name}`,
      text: `
Name: ${name}
Company: ${company || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Area of Interest: ${interest || "N/A"}

Message:
${message}
      `,
      html: `
        <h3>New Enquiry from Website</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Area of Interest:</strong> ${interest || "N/A"}</p>
        <br />
        <h4>Message:</h4>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
