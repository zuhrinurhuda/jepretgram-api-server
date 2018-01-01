import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
  name: String,
  email: String,
  gender: String,
  avatar: String,
  bio: String,
  followers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  isAdmin: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: null
  }
})

const User = mongoose.model('User', userSchema)
export default User
