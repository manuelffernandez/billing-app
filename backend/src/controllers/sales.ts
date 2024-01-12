import { type AuthenticatedRequest } from '@/middlewares/auth'
import SaleModel from '@/models/sales'
import { type Request, type Response } from 'express'

export const getAll = async (req: Request, res: Response) => {
  return res.json({ ok: true, message: 'get all the sales' })
}

export const create = async (req: AuthenticatedRequest, res: Response) => {
  const { totalAmount } = req.body
  const { id } = req.params
  try {
    console.log('totalAmount', req.body)
    const newSale = new SaleModel({ totalAmount, userId: id })
    await newSale.save()
    return res.status(201).json({ ok: true, message: 'sale created' })
  } catch (error) {
    console.log('create sale error', error)
    return res.status(500).json({ ok: false, message: 'cannot create sale' })
  }
}
