import { connect } from 'mongoose'

export const connectDB = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL enviroment variable is missing')
  }
  console.log('connecting to the database...')
  await connect(process.env.MONGODB_URL)
  console.log('database successful connection')
}
