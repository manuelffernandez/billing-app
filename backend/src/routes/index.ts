import { Router } from 'express'
import authRoutes from './auth'
import salesRoutes from './sales'

const router = Router()

router.use('/auth', authRoutes)
router.use('/sales', salesRoutes)

export default router
