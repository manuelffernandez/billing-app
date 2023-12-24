import { generateCode, login } from '@/controllers/auth'
import { Router } from 'express'

const router = Router()

router.post('/login/:email', login)
router.post('/login/:email/code', generateCode)

export default router
