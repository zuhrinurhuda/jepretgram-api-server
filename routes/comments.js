import { Router } from 'express'

import checkAuth from '../middleware/checkAuth'

import comment from '../controllers/commentController'

const router = Router()

router.post('/', checkAuth.isLogin, comment.create)

export default router