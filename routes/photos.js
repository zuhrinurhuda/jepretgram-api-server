// import library
import { Router } from 'express'

// import middleware
import checkAuth from '../middleware/checkAuth'
import multerUpload from '../middleware/multerUpload'
import uploadToGCS from '../middleware/uploadToGCS'

// import controller
import photo from '../controllers/photoController'

// instance router
const router = Router()

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

export default router