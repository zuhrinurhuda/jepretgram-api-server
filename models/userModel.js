// require libraries
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
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
    default: Date.now
  }
})

const userModel = mongoose.model('users', userSchema)
module.exports = userModel
