// require libabries
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  comment: String,
  updatedAt: {
    type: Date,
    default: null
  },
  commentedAt: {
    type: Date,
    default: Date.now
  }
})

const commentModel = mongoose.model('comments', commentSchema)
module.exports = commentModel
