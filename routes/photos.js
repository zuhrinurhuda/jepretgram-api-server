import { Router } from 'express'

import checkAuth from '../middleware/checkAuth'
import multerUpload from '../middleware/multerUpload'
import uploadToGCS from '../middleware/uploadToGCS'

import photo from '../controllers/photoController'

const router = Router()

router.post('/', checkAuth.isLogin, multerUpload, uploadToGCS, photo.create)
router.get('/', checkAuth.isLogin, photo.findAll)
router.put('/:id', checkAuth.isLogin, photo.update)
router.delete('/:id', checkAuth.isLogin, photo.delete)

export default router