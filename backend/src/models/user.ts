import { Schema, model } from 'mongoose'

interface IUser {
  firstName: string
  lastName: string
  email: string
  loginCode: string
  roles: {
    admin: boolean
    seller: boolean
  }
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true, minlength: 2 },
  lastName: { type: String, required: true, minlength: 2 },
  email: { type: String, unique: true, required: true },
  loginCode: { type: String, maxlength: 6, minlength: 6 },
  roles: {
    type: {
      admin: Boolean,
      seller: Boolean
    },
    required: true
  }
})

const UserModel = model<IUser>('User', userSchema)

export default UserModel
