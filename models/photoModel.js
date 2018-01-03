import mongoose, { Schema } from 'mongoose'

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
    ref: 'users'
  }],
  updatedAt: {
    type: Date,
    default: null
  },
  uploadedAt: {
    type: Date,
    default: new Date()
  }
})

const Photo = mongoose.model('photos', photoSchema)
export default Photo