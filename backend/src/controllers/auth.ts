import { type Request, type Response } from 'express'

export const login = async (req: Request, res: Response) => {
  res.send('LOGIN')
}

export const generateCode = async (req: Request, res: Response) => {
  res.send('GENERATE CODE')
}
