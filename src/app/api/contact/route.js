import { NextResponse } from 'next/server';

// Simple in-memory rate limiter
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, []);
  }

  const requests = rateLimit.get(ip).filter((time) => time > windowStart);
  rateLimit.set(ip, requests);

  if (requests.length >= MAX_REQUESTS) {
    return false;
  }

  requests.push(now);
  return true;
}

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().substring(0, 1000);
}

export async function POST(request) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const company = sanitize(body.company);
    const message = sanitize(body.message);

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email sending (configurable via env vars)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactEmail = process.env.CONTACT_EMAIL || 'josedavidibar9@gmail.com';

    if (smtpHost && smtpUser && smtpPass) {
      // Dynamic import to avoid issues if nodemailer isn't installed
      try {
        const nodemailer = (await import('nodemailer')).default;
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort || '587'),
          secure: smtpPort === '465',
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact" <${smtpUser}>`,
          to: contactEmail,
          subject: `📬 Nuevo mensaje de ${name}${company ? ` (${company})` : ''}`,
          replyTo: email,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #00D4FF;">Nuevo mensaje de contacto</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; font-weight: bold; color: #666;">Nombre:</td><td style="padding: 8px;">${name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #666;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold; color: #666;">Empresa:</td><td style="padding: 8px;">${company || 'No especificada'}</td></tr>
              </table>
              <div style="margin-top: 16px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
                <p style="color: #666; font-weight: bold; margin-bottom: 8px;">Mensaje:</p>
                <p style="color: #333; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Email send error:', emailError);
        // Still return success — message was received, email delivery is secondary
      }
    } else {
      console.log('📬 Contact form submission (SMTP not configured):', { name, email, company, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
