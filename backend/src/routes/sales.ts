import { create, getAll } from '@/controllers/sales'
import { verifyToken } from '@/middlewares/auth'
import { Router } from 'express'

const router = Router()

// router.use(verifyToken, addProperty)
router.get('/', getAll)
router.post('/create', [verifyToken], create)

export default router
