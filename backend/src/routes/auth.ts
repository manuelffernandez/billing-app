import { sendLoginToken, login } from '@/controllers/auth'
import { Router } from 'express'

const router = Router()

router.post('/login/:email', login)
router.post('/login/code/:email', sendLoginToken)

export default router
