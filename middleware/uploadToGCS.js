// require library
const Storage = require('@google-cloud/storage')
const storage = Storage({
  projectId: process.env.PROJECT_ID,
  keyFilename: process.env.KEY_FILE_PATH
})
const bucketName = process.env.BUCKET_NAME
const bucket = storage.bucket(bucketName)
const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${bucketName}/${filename}`
}

const uploadToGCS = (req, res, next) => {
  // console.log('--> start ', req.file)
  if (!req.file) {
    return next()
  }

  const fileName = `${Date.now()}-${req.file.originalname}`
  // console.log('--> 1. ', fileName)
  const file = bucket.file(`/assets/${fileName}`)
  // console.log('--> 2. ', file)
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
    // console.log('--> 3. ', metadata)
  })
  stream.on('error', err => {
    // console.log('--> 4. ', err)
    req.file.cloudStorageError = err
    next(err)
  })

  stream.on('finish', () => {
    req.file.cloudStorageObject = fileName
    file.makePublic()
    .then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(`assets/${fileName}`)
      // console.log('--> 5. ', req.file.cloudStoragePublicUrl)
      next()
    })
  })

  stream.end(req.file.buffer)
  // console.log('Yey.. finish!!')
}

module.exports = uploadToGCS