import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email/resend'

function getRecipients(): string[] {
  const leadsTo = process.env.LEADS_TO || 'we@magnasskexim.in'
  return leadsTo
    .split(',')
    .map(email => email.trim().toLowerCase())
    .filter(email => email.length > 0 && email.includes('@'))
}

export async function POST() {
  try {
    const recipients = getRecipients()

    await sendEmail({
      to: recipients,
      subject: 'Resend Test — MSE Website',
      text: 'This is a test email from the MSE website to verify Resend is configured correctly.',
      html: '<p>This is a <strong>test email</strong> from the MSE website to verify Resend is configured correctly.</p>',
    })

    return NextResponse.json({ ok: true, code: 'SENT' })
  } catch (err) {
    console.error('Resend test failed:', err)
    return NextResponse.json(
      { ok: false, code: 'EMAIL_FAILED', error: String(err) },
      { status: 500 }
    )
  }
}
