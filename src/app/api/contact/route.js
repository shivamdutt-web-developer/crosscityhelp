import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, phone, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required fields." },
                { status: 400 }
            );
        }

        // Configure the Nodemailer transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // This must be an App Password, not a regular password
            },
        });

        // Setup email data
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "support@crosscityhelp.com", // Sending to official support mail
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: sans-serif; max-w: 600px; margin: auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 10px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #15803d; padding-bottom: 10px;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <h3 style="color: #475569; margin-top: 20px;">Message:</h3>
          <p style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #15803d; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </p>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin-top: 30px;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            This email was sent from the Cross City website contact form.
          </p>
        </div>
      `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Failed to send email. Ensure your App Password is correct." },
            { status: 500 }
        );
    }
}
