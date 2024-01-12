export interface ApiUser {
  id: string
  firstName: string
  lastName: string
  email: string
  roles: {
    admin: boolean
    seller: boolean
  }
}
