// require library
const router = require('express').Router()

// require middleware
const checkAuth = require('../middleware/checkAuth')

// require controller
const comment = require('../controllers/commentController')

// create
router.post('/', checkAuth.isLogin, comment.create)

// read
router.get('/:id', checkAuth.isLogin, comment.findByPhotoId)

module.exports =  router