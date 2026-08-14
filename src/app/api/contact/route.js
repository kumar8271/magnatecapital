import { NextResponse } from 'next/server';
import { sendSmtpEmail } from '@/lib/sendEmail';

const TARGET_EMAIL = process.env.TARGET_NOTIFICATION_EMAIL || 'kumar8271@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and Email are required.' },
        { status: 400 }
      );
    }

    const timestampIST = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    console.log(`[Contact Submission] Name: ${name}, Email: ${email}, Phone: ${phone || 'N/A'}, Target: ${TARGET_EMAIL}`);

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0D1D; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #0040E9;">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #38BDF8; margin: 0; font-size: 22px;">Magnate Capital</h2>
          <p style="color: #94A3B8; font-size: 14px; margin: 5px 0 0 0;">New Account Callback Request Notification</p>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #94A3B8; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0;"><a href="tel:${phone || ''}" style="color: #38BDF8; text-decoration: none;">${phone || 'Not provided'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94A3B8;"><strong>Submitted At:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${timestampIST} (IST)</td>
            </tr>
          </table>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px;">
          <strong style="color: #94A3B8; display: block; margin-bottom: 8px;">Trading Experience / Message:</strong>
          <p style="margin: 0; color: #E2E8F0; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
        </div>
        
        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #64748B; text-align: center;">
          This email was sent automatically from your website at <a href="https://magnatecapital.com" style="color: #38BDF8; text-decoration: none;">magnatecapital.com</a>
        </div>
      </div>
    `;

    const textContent = `New Account Callback Request - Magnate Capital\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubmitted At: ${timestampIST}\n\nMessage:\n${message || 'N/A'}`;

    let emailSent = false;

    // 1. Hostinger / Custom SMTP (Hostinger Email: smtp.hostinger.com:465)
    if (process.env.HOSTINGER_SMTP_USER || process.env.SMTP_USER) {
      try {
        await sendSmtpEmail({
          host: process.env.HOSTINGER_SMTP_HOST || process.env.SMTP_HOST || 'smtp.hostinger.com',
          port: parseInt(process.env.HOSTINGER_SMTP_PORT || process.env.SMTP_PORT || '465', 10),
          user: process.env.HOSTINGER_SMTP_USER || process.env.SMTP_USER,
          pass: process.env.HOSTINGER_SMTP_PASS || process.env.SMTP_PASS,
          from: process.env.HOSTINGER_EMAIL_FROM || process.env.EMAIL_FROM || `Magnate Capital <${process.env.HOSTINGER_SMTP_USER || process.env.SMTP_USER}>`,
          to: TARGET_EMAIL,
          replyTo: email,
          subject: `🔔 New Account Callback: ${name} (${phone || email})`,
          html: htmlContent,
          text: textContent
        });
        emailSent = true;
        console.log('[Hostinger SMTP] Email dispatched to', TARGET_EMAIL);
      } catch (smtpErr) {
        console.warn('[Hostinger SMTP Failed, attempting fallbacks]', smtpErr.message);
      }
    }

    // 2. Resend API Fallback
    if (!emailSent && process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || 'Magnate Capital <leads@magnatecapital.com>',
            to: [TARGET_EMAIL],
            reply_to: email,
            subject: `🔔 New Account Callback: ${name}`,
            html: htmlContent,
            text: textContent
          })
        });
        if (resendRes.ok) emailSent = true;
      } catch (err) {
        console.warn('[Resend API Exception]', err.message);
      }
    }

    // 3. Brevo API Fallback
    if (!emailSent && process.env.BREVO_API_KEY) {
      try {
        const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.BREVO_API_KEY
          },
          body: JSON.stringify({
            sender: { name: 'Magnate Capital', email: process.env.EMAIL_FROM || 'leads@magnatecapital.com' },
            to: [{ email: TARGET_EMAIL }],
            replyTo: { email, name },
            subject: `🔔 New Account Callback: ${name}`,
            htmlContent: htmlContent
          })
        });
        if (brevoRes.ok) emailSent = true;
      } catch (err) {
        console.warn('[Brevo API Exception]', err.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your details have been submitted. An account manager will contact you shortly.',
      delivered: emailSent
    });

  } catch (err) {
    console.error('Contact handler error:', err);
    return NextResponse.json(
      { success: false, message: 'Could not process submission.' },
      { status: 500 }
    );
  }
}
