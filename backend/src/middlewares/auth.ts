import { env } from '@/helpers/env'
import { type Request, type Response, type NextFunction } from 'express'
import { JsonWebTokenError, NotBeforeError, TokenExpiredError, verify } from 'jsonwebtoken'

export interface AuthenticatedRequest extends Request<{ id: string }> {}

export const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { jwt } = req.cookies
  try {
    const token = verify(jwt, env.JWT_PRIVATE_KEY)
    console.log('verify token', token)
    req.params.id = token.sub as string
    next()
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.log('expired token error', error)
      return res.status(401).json({ ok: false, message: error.message })
    }
    if (error instanceof JsonWebTokenError) {
      console.log('token verification error', error)
      return res.status(401).json({ ok: false, message: error.message })
    }
    if (error instanceof NotBeforeError) {
      console.log('not before token error', error)
      return res.status(401).json({ ok: false, message: error.message })
    }
    console.log('token error', error)
    return res.status(500).json({ ok: false, message: 'Something went wrong while validating token' })
  }
}
