// import library
const router =  require('express').Router()

// homepage route
router.get('/', function(req, res, next) {
  res.send('Hello World')
})

module.exports = router
