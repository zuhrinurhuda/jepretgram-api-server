import FB from 'fb'

const setAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken)
  next()
}

export default setAccessToken