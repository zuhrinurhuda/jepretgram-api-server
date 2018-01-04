import { Router } from 'express'

import setFbAccessToken from '../middleware/setFbAccessToken'
import checkAuth from '../middleware/checkAuth'

import user from '../controllers/userController'

const router = Router()

// create
router.post('/login', setFbAccessToken, user.loginOrSignup)
router.post('/', user.create)

router.get('/profile', checkAuth.isLogin, user.findByUserId)
router.get('/', checkAuth.isLogin , user.findAll)

router.put('/follower/:id', checkAuth.isLogin, user.follower)
router.put('/following', checkAuth.isLogin, user.following)
// router.put('/:id', checkAuth.isLogin, user.update)

router.delete('/:id', checkAuth.isLogin , user.delete)

export default router
