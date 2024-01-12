import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
  // the type of the 'authorize' function returned value
  interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    roles: {
      admin: boolean
      seller: boolean
    }
    token: string
    // cookies: string[]
  }

  // the type of the 'session' callback returned value
  interface Session {
    user: {
      firstName: string
      lastName: string
      name: string
      email: string
      roles: {
        admin: boolean
        seller: boolean
      }
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    firstName: string
    lastName: string
    email: string
    roles: {
      admin: boolean
      seller: boolean
    }
    apiToken: string
    // cookies: string[]
  }
}
