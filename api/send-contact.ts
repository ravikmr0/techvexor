import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, projectType, budget, message } = req.body;

    // Validate required fields
    if (!email || !name) {
      return res.status(400).json({ ok: false, error: 'Name and email are required' });
    }

    // Validate environment variables for Hostinger SMTP
    const smtpHost = process.env.HOSTINGER_SMTP_HOST;
    const smtpPort = process.env.HOSTINGER_SMTP_PORT;
    const smtpUser = process.env.HOSTINGER_SMTP_USER;
    const smtpPass = process.env.HOSTINGER_SMTP_PASS;
    const receiverEmail = process.env.RECEIVER_EMAIL || 'info@techvexor.com';

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing Hostinger SMTP environment variables');
      return res.status(500).json({ ok: false, error: 'Server configuration error' });
    }

    // Create transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email to Tech Vexor
    const mailOptions = {
      from: smtpUser,
      to: receiverEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Company/Business:</strong> ${company || 'Not provided'}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Project Budget:</strong> ${budget || 'Not specified'}</p>
          </div>
          ${message ? `
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ea580c; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          <p style="color: #64748b; font-size: 12px;">Submitted on: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    // Auto-reply to user
    const autoReplyOptions = {
      from: smtpUser,
      to: email,
      subject: 'Thank you for contacting Tech Vexor',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #475569 0%, #1e293b 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Tech Vexor</h1>
          </div>
          <div style="padding: 40px; background-color: #f8fafc;">
            <h2 style="color: #334155;">Thank you for reaching out, ${name}!</h2>
            <p style="color: #64748b; line-height: 1.6;">
              We've received your message and our team will get back to you within 24 hours.
            </p>
            ${message ? `
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c;">
              <h3 style="color: #334155; margin-top: 0;">Your Message</h3>
              <p style="color: #64748b; white-space: pre-wrap;">${message}</p>
            </div>
            ` : ''}
            <p style="color: #64748b; line-height: 1.6;">
              In the meantime, feel free to explore our services and case studies on our website.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://techvexor.com" style="background-color: #ea580c; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Visit Our Website
              </a>
            </div>
          </div>
          <div style="background-color: #1e293b; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #94a3b8; margin: 0; font-size: 14px;">
              Tech Vexor | AI & Digital Solutions<br/>
              Email: info@techvexor.com | Phone: +91 7895849990
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return res.status(200).json({ ok: true, message: 'Sent' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      ok: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    });
  }
}
