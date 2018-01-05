import mongoose, { Schema } from 'mongoose'

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
    default: new Date()
  }
})

const Comment = mongoose.model('comments', commentSchema)
export default Comment
