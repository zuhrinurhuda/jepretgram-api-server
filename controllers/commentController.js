// require model
const Comment = require('../models/commentModel')

class CommentController {
  static create (req, res) {
    let newComment = new Comment({
      user: req.decoded._id,
      comment: req.body.comment
    })

    newComment.save()
    .then(newCommentData => res.status(200).json({
      message: 'Success create new comment',
      data: newCommentData
    }))
    .catch(err => res.status(500).send(err))
  }

  static findByPhotoId (req, res) {
    Comment.find({ photoId: req.params.id })
    .then(comments => res.status(200).json({
      message: 'Success find all comment',
      data: comments
    }))
    .then(err => res.status(500).send(err))
  }
}

module.exports = CommentController