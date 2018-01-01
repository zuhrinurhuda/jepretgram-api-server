import { Router } from 'express'
import setAccessToken from '../middleware/setAccessToken'
import user from '../controllers/userController'

const router = Router()

// create
router.post('/', user.create)
router.post('/login', setAccessToken, user.loginOrSignup)
router.get('/', user.findAll)
router.put('/:id', user.update)
router.delete('/:id', user.delete)

export default router
