import jwt from 'jsonwebtoken'

const setAccessToken = (req, res, next) => {
  console.log(req.headers)
  FB.setAccessToken(req.headers.accesstoken)
  next()
}

export default setAccessToken