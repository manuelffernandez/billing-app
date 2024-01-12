import 'dotenv/config'
import { connectDB } from '@/db/connect'
import { env, validateEnv } from '@/helpers/env'
import routes from '@/routes'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cors({ origin: env.BASE_CLIENT_URL, credentials: true }))
app.use(cookieParser())
app.use('/api', routes)

const bootstrap = async () => {
  try {
    console.log('starting server...')
    validateEnv()
    await connectDB()
    app.listen(env.PORT, async () => {
      console.log('server running on: ', env.BASE_URL)
    })
  } catch (error) {
    console.error('general error', error)
  }
}

void bootstrap()
