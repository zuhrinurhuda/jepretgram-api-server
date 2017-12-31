import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  email: String,
  gender: String,
  avatar: String,
  isAdmin: {
    type: Boolean,
    default: false
  },
  updatedAt: {
    type: Date,
    default: null
  }
})

export default User = mongoose.model('User', userSchema)
