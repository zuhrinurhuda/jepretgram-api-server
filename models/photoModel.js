// require libabries
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const photoSchema = new Schema({
  uploader: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  photoUrl: String,
  caption: String,
  hashtags: [{
    type: String
  }],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'users'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'comments'
  }],
  updatedAt: {
    type: Date,
    default: null
  },
  uploadedAt: {
    type: Date,
    default: Date.now
  }
})

const photoModel = mongoose.model('photos', photoSchema)
module.exports = photoModel