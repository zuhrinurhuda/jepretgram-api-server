import { Router } from 'express'

import checkAuth from '../middleware/checkAuth'
import upload from '../middleware/upload'

import photo from '../controllers/photoController'

const router = Router()

router.post('/', checkAuth.isLogin, upload, photo.create)
router.get('/', photo.findAll)
router.put('/:id', photo.update)
router.delete('/:id', photo.delete)

export default router