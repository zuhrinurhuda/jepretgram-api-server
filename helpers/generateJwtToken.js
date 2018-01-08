// require library
const jwt = require('jsonwebtoken')

const generateJwtToken = (user) => {
  return new Promise ((resolve, reject) => {
    let payload = {
      _id: user.id,
      isAdmin: user.isAdmin
    }

    jwt.sign(payload, process.env.JWT_SECRET_KEY, function (err, token) {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

module.exports = generateJwtToken