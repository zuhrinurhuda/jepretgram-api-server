import { Router } from 'express'
import setFbAccessToken from '../middleware/setFbAccessToken'
import user from '../controllers/userController'

const router = Router()

// create
router.post('/login', setFbAccessToken, user.loginOrSignup)
router.post('/', user.create)
router.get('/', user.findAll)
router.put('/:id', user.update)
router.delete('/:id', user.delete)

export default router
