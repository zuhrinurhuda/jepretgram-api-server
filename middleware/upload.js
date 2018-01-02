import multer from 'multer'

const multerConfig = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024
  }
})

const upload = multerConfig.single('photo')

export default upload