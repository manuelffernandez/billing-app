import { loginTokenGenerator } from '@/helpers/login-token-gen'
import sendEmail from '@/helpers/mailer'
import UserModel from '@/models/user'
import { type Request, type Response } from 'express'

export const login = async (req: Request, res: Response) => {
  const { email } = req.params
  const { loginToken } = req.body

  // TODO: this will be removed when zod schema validation is implemented
  if (!email) return res.status(400).json({ ok: false, message: 'No email was passed' })
  if (!loginToken) return res.status(400).json({ ok: false, message: 'No login token was passed' })

  const user = await UserModel.findOne({ email, loginToken })
  console.log('login controller', user)

  if (!user) return res.status(401).json({ ok: false, message: 'Invalid credentials' })

  res.status(200).json({ ok: true, message: 'login successful' })
}

export const sendLoginToken = async (req: Request, res: Response) => {
  const { email } = req.params
  try {
    const user = await UserModel.findOne({ email })

    if (!user) return res.status(404).json({ ok: false, message: 'User not found' })

    const loginToken = loginTokenGenerator()
    user.loginToken = loginToken
    await user.save()

    const sendEmailRes = await sendEmail({
      to: email,
      subject: 'Billing app login token',
      html: `Your login token is ${loginToken}`
    })
    if (!sendEmailRes.ok) {
      res.status(500).json(sendEmailRes)
    }

    res.send('GENERATE CODE')
  } catch (error) {
    console.log('send login token controller error', error)
    res.status(500).json({ ok: false, message: 'Something went wrong' })
  }
}
