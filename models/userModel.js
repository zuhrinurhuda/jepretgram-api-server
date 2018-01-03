import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  name: String,
  email: String,
  gender: String,
  avatar: String,
  bio: String,
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  isAdmin: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: null
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const User = mongoose.model('users', userSchema)
export default User
