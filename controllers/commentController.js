import Comment from '../models/commentModel'

class CommentController {
  static create(req, res) {
    // console.log(req.body)
    let newComment = new Comment({
      photoId: req.body.photoDetail._id,
      commentator: req.decoded._id,
      comment: req.body.comment
    })
    console.log(newComment)
    newComment.save()
    .then(newCommentData => res.status(200).json({
      message: 'Success create new comment',
      data: newCommentData
    }))
    .catch(err => res.status(500).send(err))
  }
}

export default CommentController