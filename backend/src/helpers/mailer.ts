import nodemailer from 'nodemailer'
import { env } from '@/helpers/env'

interface EmailParam {
  to: string
  subject: string
  html: string
}

export const transporter = nodemailer.createTransport({
  host: env.SMTP_SERVER_HOST,
  port: env.SMTP_SERVER_PORT,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: env.EMAIL,
    pass: env.EMAIL_PASSWORD
  }
})

const sendEmail = async (param: EmailParam) => {
  try {
    const { to, subject, html } = param

    const res = await transporter.sendMail({
      from: `Company ${env.EMAIL}`,
      to,
      subject,
      html
    })
    console.log('transporter response', res)
    return { ok: true, message: 'Mail sent successfully' }
  } catch (error) {
    console.log('send email error', error)
    return { ok: false, message: 'Something went wrong', error }
  }
}

export default sendEmail
