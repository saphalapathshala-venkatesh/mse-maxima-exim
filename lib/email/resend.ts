import { Resend } from 'resend'

function getClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')
  return new Resend(apiKey)
}

function getFrom() {
  const from = process.env.FROM_EMAIL
  if (!from) throw new Error('FROM_EMAIL is not set')
  return from
}

export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
}: {
  to: string | string[]
  subject: string
  html?: string
  text?: string
  replyTo?: string
}) {
  const resend = getClient()
  const from = getFrom()
  const recipients = Array.isArray(to) ? to : [to]

  const { data, error } = await resend.emails.send({
    from,
    to: recipients,
    subject,
    html: html || '',
    text: text || '',
    ...(replyTo ? { replyTo } : {}),
  })

  if (error) {
    throw new Error(`Resend error: ${JSON.stringify(error)}`)
  }

  return data
}
