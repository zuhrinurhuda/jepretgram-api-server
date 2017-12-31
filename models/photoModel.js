import mongoose, { Schema } from 'mongoose'
// const Schema = mongoose.Schema

const photoSchema = new Schema({
  uploader: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  caption: String,
  hashtags: String,
  photoUrl: String,
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  updatedAt: {
    type: Date,
    default: null
  }
})

export const Photo = mongoose.model('Photo', photoSchema)