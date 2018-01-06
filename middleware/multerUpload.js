import multer from 'multer'

const config = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024
  }
})

const multerUpload = config.single('photo')

export default multerUpload