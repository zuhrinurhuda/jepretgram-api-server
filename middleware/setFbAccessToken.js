import FB from 'fb'

const setFbAccessToken = (req, res, next) => {
  FB.setAccessToken(req.headers.accesstoken)
  next()
}

export default setFbAccessToken