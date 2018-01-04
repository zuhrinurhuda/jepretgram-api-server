import Photo from '../models/photoModel'

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
    .populate('uploader')
    .then(photos => res.status(200).json({
      message: 'Success find all photos',
      data: photos
    }))
    .catch(err => res.status(500).send(err))
  }

  static findAll (req, res) {
    Photo.find()
    .populate('uploader')
    .then(photos => res.status(200).json({
      message: 'Success find all photos',
      data: photos
    }))
    .catch(err => res.status(500).send(err))
  }

  static liked (req, res) {
    Photo.findById(req.params.id)
    .then(photo => {
      let userIndex = photo.likes.findIndex(element => {
        return element == req.decoded._id
      })

      if (userIndex === -1) {
        photo.likes.push(req.decoded._id)
      } else {
        photo.likes.splice(userIndex, 1)
      }

      photo.save()
      .then(newPhotoData => res.status(200).json({
        message: 'Success like/dislike photo',
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

export default PhotoController