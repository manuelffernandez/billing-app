import { type IUser } from '@/models/user'
import { type Types, type Document } from 'mongoose'

interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  roles: {
    admin: boolean
    seller: boolean
  }
}

export class AdaptedUser implements User {
  id: string
  firstName: string
  lastName: string
  email: string
  roles: {
    admin: boolean
    seller: boolean
  }

  constructor(
    // eslint-disable-next-line @typescript-eslint/ban-types
    user: Document<unknown, {}, IUser> &
      IUser & {
        _id: Types.ObjectId
      }
  ) {
    this.id = user._id.toString()
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.roles = { admin: false, seller: false }
  }
}
