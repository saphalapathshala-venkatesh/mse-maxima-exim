import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/resend'

function getRecipients(): string[] {
  const leadsTo = process.env.LEADS_TO || 'we@magnasskexim.in'
  const recipients = leadsTo
    .split(',')
    .map(email => email.trim().toLowerCase())
    .filter(email => email.length > 0 && email.includes('@'))
  return Array.from(new Set(recipients))
}

function escapeHtml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function buildAdminHtml(fields: Record<string, string>) {
  const rows = Object.entries(fields)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:600;border:1px solid #dee2e6;background:#f8f9fa">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #dee2e6">${escapeHtml(value)}</td></tr>`)
    .join('')
  return `<div style="font-family:Inter,Arial,sans-serif;max-width:600px"><h2 style="color:#2D6A4F">New Inquiry — MSE Website</h2><table style="width:100%;border-collapse:collapse;margin-top:16px">${rows}</table><p style="margin-top:20px;font-size:13px;color:#6c757d">This lead was submitted via the MSE website contact form.</p></div>`
}

function buildAdminText(fields: Record<string, string>) {
  return 'New Inquiry — MSE Website\n\n' +
    Object.entries(fields).map(([k, v]) => `${k}: ${v}`).join('\n') +
    '\n\n---\nThis lead was submitted via the MSE website contact form.'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, country, phone, product, message } = body

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { ok: false, code: 'VALIDATION', error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const recipients = getRecipients()

    const fields: Record<string, string> = {
      'Name': name,
      'Email': email,
      'Country': country,
      'Phone': phone || 'Not provided',
      'Product Interest': product || 'Not specified',
      'Message': message,
    }

    try {
      await sendEmail({
        to: recipients,
        subject: `New Inquiry — MSE Website`,
        html: buildAdminHtml(fields),
        text: buildAdminText(fields),
        replyTo: email,
      })
    } catch (err) {
      console.error('Admin email failed:', err)
      return NextResponse.json(
        { ok: false, code: 'EMAIL_FAILED' },
        { status: 500 }
      )
    }

    const ackHtml = `<div style="font-family:Inter,Arial,sans-serif;max-width:600px"><p>Hi ${escapeHtml(name)},</p><p>Thank you for reaching out to <strong>Magna SSK Exim Solutions Pvt Ltd</strong>.</p><p>We have received your enquiry${product ? ` regarding <strong>${escapeHtml(product)}</strong>` : ''} and our team will respond within <strong>24 business hours</strong>.</p><p>For urgent inquiries, you can also reach us on <a href="https://wa.link/e854rz" style="color:#2D6A4F;font-weight:600">WhatsApp</a>.</p><p style="margin-top:24px">Warm regards,<br/><strong>MSE Export Team</strong><br/>www.magnasskexim.in</p></div>`

    const ackText = `Hi ${name},\n\nThank you for reaching out to Magna SSK Exim Solutions Pvt Ltd.\n\nWe have received your enquiry${product ? ` regarding ${product}` : ''} and our team will respond within 24 business hours.\n\nFor urgent inquiries, reach us on WhatsApp: https://wa.link/e854rz\n\nWarm regards,\nMSE Export Team\nwww.magnasskexim.in`

    sendEmail({
      to: [email],
      subject: 'We received your inquiry — MSE',
      html: ackHtml,
      text: ackText,
    }).catch(err => {
      console.error('Ack email to lead failed (non-blocking):', err)
    })

    return NextResponse.json({ ok: true, code: 'LEAD_SUBMITTED' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { ok: false, code: 'EMAIL_FAILED', error: 'Internal server error' },
      { status: 500 }
    )
  }
}
