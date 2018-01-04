import getFbData from '../helpers/getFbData'
import generateJwtToken from '../helpers/generateJwtToken'
import User from '../models/userModel'

class UserController {
  static loginOrSignup (req, res) {
    getFbData()
    .then(facebook => {
      User.findOne({ email: facebook.email })
      .then(user => {
        if (user) {
          // jika user ada
          generateJwtToken(user)
          .then(token => res.status(200).json({
            message: 'Success generate token',
            data: token
          }))
          .catch(err => res.status(200).send(err))
        } else {
          // jika user belum ada
          let newUser = new User({
            name: facebook.name,
            email: facebook.email,
            gender: facebook.gender,
            avatar: facebook.picture.data.url
          })

          newUser.save()
          .then(newUser => {
            generateJwtToken(newUser)
            .then(token => res.status(200).json({
              message: 'Success generate token',
              data: token
            }))
            .catch(err => res.status(200).send(err))
          })
          .catch(err => res.status(200).send(err))
        }
      })
    })
    .catch(err => res.status(500).send(err))
  }

  static create (req, res) {
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      avatar: req.body.avatar,
      bio: req.body.bio,
      isAdmin: req.body.isAdmin
    })
    
    newUser.save()
    .then(newUser => res.status(200).json({
      message: 'Success create new user',
      data: newUser
    }))
    .catch(err => res.status(200).send(err))
  }

  static findByUserId(req, res) {
    User.findById({ _id: req.decoded._id })
    .then(user => res.status(200).json({
      message: 'Success find user',
      data: user
    }))
    .catch(err => res.status(500).send(err))
  }

  static findAll(req, res) {
    User.find()
      .then(users => res.status(200).json({
        message: 'Success find all users',
        data: users
      }))
      .catch(err => res.status(500).send(err))
  }

  static update (req, res) {
    console.log('masuk?')
    User.findById(req.params.id)
    .then(user => {
      let userIndex = user.followers.findIndex(element => {
        return element == req.decoded._id
      })

      if (userIndex === -1) {
        user.followers.push(req.decoded._id)
      } else {
        user.followers.splice(userIndex, 1)
      }

      user.save()
      .then(newUserData => res.status(200).json({
        message: 'Success update user data',
        data: newUserData
      }))
      .catch(err => res.status(500).send(err))
    })
  }

  static delete (req, res) {
    User.findByIdAndRemove(req.params.id)
    .then(deletedUser => res.status(200).json({
      message: 'Success delete user',
      data: deletedUser
    }))
    .catch(err => res.status(500).send(err))
  }
}

export default UserController