import { env } from '@/env'
import { ApiUser } from '@/types/api'
import { endpoints } from '@/utils/constants/endpoints'
import axios from 'axios'
import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextauthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        loginToken: { label: 'loginToken', type: 'string' }
      },
      authorize: async (credentials, _) => {
        const email = credentials?.email ?? ''
        const loginToken = credentials?.loginToken ?? ''

        const response = await axios.post<ApiUser>(
          `${env.NEXT_PUBLIC_BACKEND_BASE_URL}${endpoints.login}/${email}`,
          { loginToken },
          { withCredentials: true }
        )

        // IF TOKEN CAME IN AUTHORIZATION HEADER
        const token = response.headers.authorization.replace('Bearer ') as string

        // IF TOKEN CAME IN COOKIES
        // get all cookies, is a string array
        // const cookies = response.headers['set-cookie']
        // const token = cookies
        // find the cookie named as "jwt"
        // ?.find((cookie: string) => cookie.startsWith('jwt='))
        // separate the cookie attributes and obtain key=value string
        // ?.split(';')[0]
        // separate key=value and obtain the value
        // .split('=')[1]

        if (token === undefined) throw new Error('Unable to obtain jwt from cookies')

        return { ...response.data, token }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt: async (arg) => {
      const { token, user } = arg

      if (arg.trigger === 'signIn') {
        const { email, id, firstName, lastName, roles, token: apiToken } = user
        return { ...token, email, id, firstName, lastName, roles, apiToken }
      }
      return { ...token }
    },
    session: async (arg) => {
      const {
        session,
        token: { firstName, lastName, email, roles }
      } = arg
      session.user = { firstName, lastName, name: `${firstName} ${lastName}`, email, roles }
      return session
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    signOut: async (arg) => {}
  }
}
