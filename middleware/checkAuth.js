import jwt from 'jsonwebtoken'

class CheckAuth {
  // Authentication
  static isLogin (req, res, next) {
    jwt.verify(req.headers.accesstoken, process.env.JWT_SECRET_KEY, function (err, decoded) {
      if (err) {
        res.status(403).send(err)
      } else {
        req.decoded = decoded
        next()
      }
    })
  }

  // Authorization
  // static isVerifyUser (req, res, next) {
  //   if (req.decoded.isAdmin) {
  //     next()
  //   } else {
  //     res.status(403).send('Only verify user can access')
  //   }
  // }
}

export default CheckAuth