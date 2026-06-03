import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// SMTP Transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("SMTP Configuration Error:", error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

// API endpoint to handle form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, type, details } = req.body;

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Use authenticated user as sender to avoid spam filters
      replyTo: email, // Set the client's email as the reply-to
      to: process.env.RECEIVER_EMAIL, // Where you want to receive the enquiries
      subject: `New Project Enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Project Type: ${type || 'N/A'}

Project Details:
${details}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: "Enquiry sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
