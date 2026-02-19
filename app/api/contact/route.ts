import { NextRequest, NextResponse } from 'next/server'

const debug = process.env.EMAIL_DEBUG === 'true'

function getRecipients(): string[] {
  const leadsTo = process.env.LEADS_TO || 'we@magnasskexim.in'
  const recipients = leadsTo
    .split(',')
    .map(email => email.trim().toLowerCase())
    .filter(email => email.length > 0 && email.includes('@'))
  return Array.from(new Set(recipients))
}

async function sendEmail(payload: {
  from: string
  to: string[]
  subject: string
  text: string
  reply_to?: string
}) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(`Resend ${res.status}: ${JSON.stringify(body)}`)
  }
  return res.json()
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

    const adminBody = `
New Lead / Enquiry from MSE Website

Name: ${name}
Email: ${email}
Country: ${country}
Phone: ${phone || 'Not provided'}
Product Interest: ${product || 'Not specified'}

Message:
${message}

---
This lead was submitted via the MSE website contact form.
    `.trim()

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      if (debug) {
        console.log('--- LEAD RECEIVED (EMAIL_DEBUG, no RESEND_API_KEY) ---')
        console.log(`Recipients: ${recipients.join(', ')}`)
        console.log(adminBody)
        console.log('--- END LEAD ---')
      }
      return NextResponse.json(
        { ok: false, code: 'EMAIL_FAILED', error: 'Email service is not configured' },
        { status: 500 }
      )
    }

    try {
      await sendEmail({
        from: 'MSE Website <onboarding@resend.dev>',
        to: recipients,
        subject: `New Enquiry from ${name} – ${product || 'General'}`,
        text: adminBody,
        reply_to: email,
      })
    } catch (err) {
      console.error('Admin email failed:', err)
      return NextResponse.json(
        { ok: false, code: 'EMAIL_FAILED' },
        { status: 500 }
      )
    }

    const ackBody = `
Hi ${name},

Thank you for reaching out to Magna SSK Exim Solutions Pvt Ltd.

We have received your enquiry${product ? ` regarding ${product}` : ''} and our team will respond within 24 business hours.

Warm regards,
MSE Export Team
www.magnasskexim.in
    `.trim()

    sendEmail({
      from: 'MSE Website <onboarding@resend.dev>',
      to: [email],
      subject: 'We received your enquiry – MSE',
      text: ackBody,
    }).catch(err => {
      console.error('Ack email to lead failed (non-blocking):', err)
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { ok: false, code: 'EMAIL_FAILED', error: 'Internal server error' },
      { status: 500 }
    )
  }
}
