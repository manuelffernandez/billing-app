import z from 'zod'

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^(?:[0-5]?[0-9]{1,4}|6[0-4][0-9]{3}|65000)$/, 'The PORT must be a number between 0 and 65000'),
  MONGODB_URL: z.string().url()
  // EMAIL: z.string().email(),
  // EMAIL_PASSWORD: z.string()
})

export const validateEnv = () => {
  const env = envSchema.parse({
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL
    // EMAIL: process.env.EMAIL,
    // EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
  })

  return env
}

export const env = validateEnv()
