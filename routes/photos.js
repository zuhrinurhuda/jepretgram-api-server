import { Router } from 'express'

import checkAuth from '../middleware/checkAuth'
import multerUpload from '../middleware/multerUpload'
import uploadToGCS from '../middleware/uploadToGCS'

import photo from '../controllers/photoController'

const router = Router()

router.post('/', checkAuth.isLogin, multerUpload, uploadToGCS, photo.create)

router.get('/profile', checkAuth.isLogin, photo.findByUserId)
router.get('/', checkAuth.isLogin, photo.findAll)

router.put('/:id/like', checkAuth.isLogin, photo.liked)
// router.put('/:id/comment', checkAuth.isLogin, photo.comment)
router.put('/:id', checkAuth.isLogin, photo.update)

router.delete('/:id', checkAuth.isLogin, photo.delete)

export default router