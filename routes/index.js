// import library
import { Router } from 'express'

// instance router
const router = Router()

// homepage route
router.get('/', function(req, res, next) {
  res.send('Hello World')
})

export default router
