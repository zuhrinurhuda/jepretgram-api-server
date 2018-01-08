// require model
const Photo = require('../models/photoModel')

class PhotoController {
  static create (req, res) {
    let newPhoto = new Photo({
      uploader: req.decoded._id,
      photoUrl: req.file.cloudStoragePublicUrl,
      caption: req.body.caption,
      hashtags: req.body.hashtags.split(' ')
    })
    newPhoto.save()
    .then(newPhoto => res.status(200).json({
      message: 'Success create new photo',
      data: newPhoto
    }))
    .catch(err => res.status(500).send(err))
  }

  static findByUserId(req, res) {
    Photo.find({ uploader: req.decoded._id })
    .populate([
      {
        path: 'uploader',
        model: 'users',
      },
      {
        path: 'comments',
        model: 'comments',
        populate: {
          path: 'user',
          model: 'users'
        }
      }
    ])
    .sort({ uploadedAt: 'desc' })
    .then(photos => res.status(200).json({
      message: 'Success find user photos',
      data: photos
    }))
    .catch(err => res.status(500).send(err))
  }

  static findById(req, res) {
    Photo.findById(req.params.id)
    .populate([
      {
        path: 'uploader',
        model: 'users',
      },
      {
        path: 'comments',
        model: 'comments',
        populate: {
          path: 'user',
          model: 'users'
        }
      }
    ])
    .then(photo => res.status(200).json({
      message: 'Success find photo',
      data: photo
    }))
    .catch(err => res.status(500).send(err))
  }

  static findAll (req, res) {
    Photo.find()
    .populate([
      {
        path: 'uploader',
        model: 'users',
      },
      {
        path: 'comments',
        model: 'comments',
        populate: {
          path: 'user',
          model: 'users'
        }
      }
    ])
    .sort({ uploadedAt: 'desc' })
    // .limit(12)
    .then(photos => res.status(200).json({
      message: 'Success find all photos',
      data: photos
    }))
    .catch(err => res.status(500).send(err))
  }

  static like (req, res) {
    Photo.findById(req.params.id)
    .then(photo => {
      if (photo.uploader == req.decoded._id) {
        // console.log('nothing')
      } else {
        let userIndex = photo.likes.findIndex(element => {
          return element == req.decoded._id
        })
        if (userIndex === -1) {
          photo.likes.push(req.decoded._id)
        } else {
          photo.likes.splice(userIndex, 1)
        }
      }
      photo.save()
      .then(newPhotoData => res.status(200).json({
        message: 'Success like/dislike photo',
        data: newPhotoData
      }))
      .catch(err => res.status(500).send(err))
    })
  }

  static comment (req, res) {
    Photo.findById(req.params.id)
    .then(photo => {
      photo.comments.push(req.body._id)

      photo.save()
      .then(newPhotoData => res.status(200).json({
        message: 'Success comment photo',
        data: newPhotoData
      }))
      .catch(err => res.status(500).send(err))
    })
  }

  static update (req, res) {
    Photo.findById(req.params.id)
    .then(photo => {
      photo.caption = req.body.caption || photo.caption
      photo.hashtags = req.body.hashtags.split(' ') || photo.hashtags

      photo.save()
      .then(newPhotoData => res.status(200).json({
        message: 'Success update photo data',
        data: newPhotoData
      }))
      .catch(err => res.status(500).send(err))
    })
  }

  static delete (req, res) {
    Photo.findByIdAndRemove(req.params.id)
    .then(deletedPhoto => res.status(200).json({
      message: 'Success delete photo',
      data: deletedPhoto
    }))
    .catch(err => res.status(500).send(err))
  }
}

module.exports = PhotoController