import z from 'zod'

const envSchema = z.object({
  PORT: z
    .string()
    .regex(/^(?:[0-5]?[0-9]{1,4}|6[0-4][0-9]{3}|65000)$/, 'The PORT must be a number between 0 and 65000'),
  BASE_URL: z.string().url(),
  BASE_CLIENT_URL: z.string().url(),
  MONGODB_URL: z.string().url(),
  EMAIL: z.string().email(),
  EMAIL_PASSWORD: z.string(),
  SMTP_SERVER_HOST: z.string(),
  SMTP_SERVER_PORT: z.number()
})

export const validateEnv = () => {
  const env = envSchema.parse({
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,
    BASE_CLIENT_URL: process.env.BASE_CLIENT_URL,
    MONGODB_URL: process.env.MONGODB_URL,
    EMAIL: process.env.EMAIL,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
    SMTP_SERVER_HOST: process.env.SMTP_SERVER_HOST,
    SMTP_SERVER_PORT: parseInt(process.env.SMTP_SERVER_PORT ?? '587')
  })

  return env
}

export const env = validateEnv()
