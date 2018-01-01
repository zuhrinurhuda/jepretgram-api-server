import User from '../models/userModel'

class UserController {
  static loginOrSignup (req, res) {
    console.log(req.headers)
    console.log(req.body)
    let newUser = new User({
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      avatar: req.body.avatar,
      bio: req.body.bio
    })

    newUser.save()
    .then(newUser => res.status(200).json({
      message: 'Success create new user',
      data: newUser
    }))
    .catch(err => res.status(200).send(err))
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

  static findAll(req, res) {
    User.find()
      .then(users => res.status(200).json({
        message: 'Success find all users',
        data: users
      }))
      .catch(err => res.status(500).send(err))
  }

  static update (req, res) {
    User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name || user.name
      user.avatar = req.body.avatar || user.avatar
      user.bio = req.body.bio || user.bio

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