// import library
import { Router } from 'express'

// import middleware
import checkAuth from '../middleware/checkAuth'

// import controller
import comment from '../controllers/commentController'

// instance router
const router = Router()

// create
router.post('/', checkAuth.isLogin, comment.create)

// read
router.get('/:id', checkAuth.isLogin, comment.findByPhotoId)

export default router