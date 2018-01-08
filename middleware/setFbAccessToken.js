// require library
const FB = require('fb')

const setFbAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken)
  next()
}

module.exports = setFbAccessToken