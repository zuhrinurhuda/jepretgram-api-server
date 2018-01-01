// import libraries
import {} from 'dotenv/config'
import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

// import routes
import index from './routes/index'
import users from './routes/users'
import photos from './routes/photos'

// set up db
mongoose.connect(`mongodb://zuhri:${process.env.MONGO_ATLAS}@cluster0-shard-00-00-67zih.mongodb.net:27017,cluster0-shard-00-01-67zih.mongodb.net:27017,cluster0-shard-00-02-67zih.mongodb.net:27017/jepretgram2?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`)
.catch(err => console.log(err))

// instance app
const app = express()

// middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// website routes
app.use('/', index)
app.use('/api/users', users)
app.use('/api/photos', photos)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

export default app
