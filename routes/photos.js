// require library
const router = require('express').Router()

// require middleware
const checkAuth = require('../middleware/checkAuth')
const multerUpload = require('../middleware/multerUpload')
const uploadToGCS = require('../middleware/uploadToGCS')

// require controller
const photo = require('../controllers/photoController')

// create
router.post('/', checkAuth.isLogin, multerUpload, uploadToGCS, photo.create)

// read
router.get('/profile', checkAuth.isLogin, photo.findByUserId)
router.get('/:id', checkAuth.isLogin, photo.findById)
router.get('/', checkAuth.isLogin, photo.findAll)

// update
router.put('/:id/like', checkAuth.isLogin, photo.like)
router.put('/:id/comment', checkAuth.isLogin, photo.comment)
router.put('/:id', checkAuth.isLogin, photo.update)

// delete
router.delete('/:id', checkAuth.isLogin, photo.delete)

module.exports = router