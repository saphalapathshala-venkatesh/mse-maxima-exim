import { NextRequest, NextResponse } from 'next/server'

function getRecipients(): string[] {
  const leadsTo = process.env.LEADS_TO || process.env.DEFAULT_LEADS_TO || 'we@magnasskexim.in'
  const recipients = leadsTo
    .split(',')
    .map(email => email.trim().toLowerCase())
    .filter(email => email.length > 0 && email.includes('@'))
  return Array.from(new Set(recipients))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, country, phone, product, message } = body

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const recipients = getRecipients()

    const emailBody = `
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

    if (resendApiKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'MSE Website <onboarding@resend.dev>',
          to: recipients,
          subject: `New Enquiry from ${name} – ${product || 'General'}`,
          text: emailBody,
          reply_to: email,
        }),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        console.error('Resend API error:', errorData)
        return NextResponse.json(
          { success: false, error: 'Failed to send email' },
          { status: 500 }
        )
      }
    } else {
      console.log('--- LEAD RECEIVED (no email service configured) ---')
      console.log(`Recipients: ${recipients.join(', ')}`)
      console.log(emailBody)
      console.log('--- END LEAD ---')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
