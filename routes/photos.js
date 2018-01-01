import { Router } from 'express'
import photo from '../controllers/photoController'

const router = Router()

router.post('/', photo.create)
router.get('/', photo.findAll)
router.put('/:id', photo.update)
router.delete('/:id', photo.delete)

export default router