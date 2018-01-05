// import library
import { Router } from 'express'

// import middleware
import setFbAccessToken from '../middleware/setFbAccessToken'
import checkAuth from '../middleware/checkAuth'

// import controller
import user from '../controllers/userController'

// instance router
const router = Router()

// create
router.post('/login', setFbAccessToken, user.loginOrSignup)
router.post('/', user.create)

// read
router.get('/profile', checkAuth.isLogin, user.findByUserId)
router.get('/', checkAuth.isLogin , user.findAll)

// update
router.put('/follower/:id', checkAuth.isLogin, user.follower)
router.put('/following', checkAuth.isLogin, user.following)

// delete
router.delete('/:id', checkAuth.isLogin , user.delete)

export default router
