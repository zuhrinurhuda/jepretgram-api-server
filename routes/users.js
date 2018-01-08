// require library
const router = require('express').Router()

// require middleware
const setFbAccessToken = require('../middleware/setFbAccessToken')
const checkAuth = require('../middleware/checkAuth')

// require controller
const user = require('../controllers/userController')

// create
router.post('/login', setFbAccessToken, user.loginOrSignup)
router.post('/', user.create)

// read
router.get('/profile', checkAuth.isLogin, user.findByUserId)
router.get('/', checkAuth.isLogin , user.findAll)

// update
router.put('/:id/follower', checkAuth.isLogin, user.follower)
router.put('/following', checkAuth.isLogin, user.following)

// delete
router.delete('/:id', checkAuth.isLogin , user.delete)

module.exports = router
