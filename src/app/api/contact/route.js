import { NextResponse } from 'next/server';

const TARGET_EMAIL = 'kumar8271@gmail.com';

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

    console.log(`[Contact Submission] Name: ${name}, Email: ${email}, Phone: ${phone || 'N/A'}, Message: ${message || 'N/A'}, Target: ${TARGET_EMAIL}`);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0A0D1D; color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #0040E9;">
        <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 15px; margin-bottom: 20px;">
          <h2 style="color: #38BDF8; margin: 0; font-size: 22px;">Magnate Capital</h2>
          <p style="color: #94A3B8; font-size: 14px; margin: 5px 0 0 0;">New Account Callback Request</p>
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
              <td style="padding: 8px 0; color: #ffffff;">${timestampIST}</td>
            </tr>
          </table>
        </div>
        
        <div style="background: rgba(255,255,255,0.04); padding: 20px; border-radius: 8px;">
          <strong style="color: #94A3B8; display: block; margin-bottom: 8px;">Trading Experience / Message:</strong>
          <p style="margin: 0; color: #E2E8F0; line-height: 1.6; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
        </div>
        
        <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1); font-size: 12px; color: #64748B; text-align: center;">
          This lead was received from the Account Callback form on <a href="https://magnatecapital.com" style="color: #38BDF8; text-decoration: none;">magnatecapital.com</a>
        </div>
      </div>
    `;

    const textContent = `New Account Callback Request - Magnate Capital\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nSubmitted At: ${timestampIST}\n\nMessage:\n${message || 'N/A'}`;

    let emailSent = false;

    // 1. Resend API (if RESEND_API_KEY is configured in Vercel/environment)
    if (process.env.RESEND_API_KEY) {
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
            subject: `🔔 New Account Callback: ${name} (${phone || email})`,
            html: htmlContent,
            text: textContent
          })
        });

        if (resendRes.ok) {
          emailSent = true;
          console.log('[Resend] Email delivered successfully to', TARGET_EMAIL);
        } else {
          const errData = await resendRes.json();
          console.warn('[Resend Error]', errData);
        }
      } catch (err) {
        console.warn('[Resend Exception]', err);
      }
    }

    // 2. Brevo API (if BREVO_API_KEY is configured)
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
            to: [{ email: TARGET_EMAIL, name: 'Lead Manager' }],
            replyTo: { email: email, name: name },
            subject: `🔔 New Account Callback: ${name}`,
            htmlContent: htmlContent
          })
        });

        if (brevoRes.ok) {
          emailSent = true;
          console.log('[Brevo] Email delivered successfully to', TARGET_EMAIL);
        }
      } catch (err) {
        console.warn('[Brevo Exception]', err);
      }
    }

    // 3. SendGrid API (if SENDGRID_API_KEY is configured)
    if (!emailSent && process.env.SENDGRID_API_KEY) {
      try {
        const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: TARGET_EMAIL }] }],
            from: { email: process.env.EMAIL_FROM || 'leads@magnatecapital.com', name: 'Magnate Capital' },
            reply_to: { email: email, name: name },
            subject: `🔔 New Account Callback: ${name}`,
            content: [{ type: 'text/html', value: htmlContent }]
          })
        });

        if (sgRes.ok) {
          emailSent = true;
          console.log('[SendGrid] Email delivered successfully to', TARGET_EMAIL);
        }
      } catch (err) {
        console.warn('[SendGrid Exception]', err);
      }
    }

    // 4. Webhook fallback (if WEBHOOK_URL or FORMSPREE is configured)
    if (!emailSent && process.env.CONTACT_WEBHOOK_URL) {
      try {
        await fetch(process.env.CONTACT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, message, target: TARGET_EMAIL, timestamp: timestampIST })
        });
      } catch (err) {
        console.warn('[Webhook Exception]', err);
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
