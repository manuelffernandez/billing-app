import 'dotenv/config'
import { connectDB } from '@/db/connect'
import { env, validateEnv } from '@/helpers/env'
import routes from '@/routes'
import express from 'express'

const app = express()

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('hello world')
})

const bootstrap = async () => {
  try {
    console.log('starting server...')
    validateEnv()
    await connectDB()
    app.listen(env.PORT, async () => {
      console.log('server running on port: ', env.PORT)
    })
  } catch (error) {
    console.log(error)
  }
}

void bootstrap()
