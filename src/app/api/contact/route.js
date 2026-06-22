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
    const phone = sanitize(body.phone);
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
            <div style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0d1117; color: #e6edf3; border-radius: 12px; overflow: hidden; border: 1px solid #30363d; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
              <div style="background: linear-gradient(90deg, #00d4ff 0%, #ff6b35 100%); padding: 3px;"></div>
              <div style="padding: 32px 24px;">
                <div style="text-align: center; margin-bottom: 24px;">
                  <h2 style="margin: 0; font-size: 22px; color: #ffffff;">Nuevo Contacto del Portafolio</h2>
                  <p style="margin: 8px 0 0 0; color: #8b949e; font-size: 14px;">Has recibido un nuevo mensaje a través de tu sitio web.</p>
                </div>
                
                <div style="background-color: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                  <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    <tr>
                      <td style="padding: 8px 0; color: #8b949e; width: 80px;">Nombre:</td>
                      <td style="padding: 8px 0; color: #ffffff; font-weight: 500;">${name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d; color: #8b949e;">Email:</td>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d;">
                        <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none; font-weight: 500;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d; color: #8b949e;">Teléfono:</td>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d; color: #ffffff; font-weight: 500;">
                        ${phone ? `<a href="tel:${phone}" style="color: #00d4ff; text-decoration: none;">${phone}</a>` : '<span style="color: #8b949e; font-style: italic;">No especificado</span>'}
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d; color: #8b949e;">Empresa:</td>
                      <td style="padding: 8px 0; border-top: 1px solid #30363d; color: #ffffff; font-weight: 500;">${company || '<span style="color: #8b949e; font-style: italic;">No especificada</span>'}</td>
                    </tr>
                  </table>
                </div>

                <div style="background-color: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 20px;">
                  <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #8b949e; text-transform: uppercase; letter-spacing: 1px;">Mensaje</h3>
                  <p style="margin: 0; color: #c9d1d9; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>

                <div style="text-align: center; margin-top: 32px;">
                  <a href="mailto:${email}" style="display: inline-block; background-color: #00d4ff; color: #0d1117; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: bold; font-size: 14px; transition: opacity 0.2s;">
                    Responder a ${name}
                  </a>
                </div>
              </div>
              <div style="background-color: #010409; padding: 16px; text-align: center; border-top: 1px solid #30363d;">
                <p style="margin: 0; color: #484f58; font-size: 12px;">Este correo fue generado automáticamente por tu portafolio personal.</p>
              </div>
            </div>
          `,
        });
      } catch (emailError) {
        console.error('Email send error:', emailError);
        // Still return success — message was received, email delivery is secondary
      }
    } else {
      console.log('📬 Contact form submission (SMTP not configured):', { name, email, phone, company, message });
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
