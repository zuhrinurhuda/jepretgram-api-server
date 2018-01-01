import { Router } from 'express'
import user from '../controllers/userController'

const router = Router()

router.post('/', user.create)
router.get('/', user.findAll)
router.put('/:id', user.update)
router.delete('/:id', user.delete)

export default router
