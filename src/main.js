// @ts-check

/* eslint-disable no-console */

const express = require('express')

const app = express()
app.use(express.json())
// views 폴더 위치 지정
app.set('views', 'src/views')
app.set('view engine', 'pug')

const PORT = 5000

const userRouter = require('./express/user')

app.use('/users', userRouter)
app.use('/public', express.static('src/public'))

// Error handling
app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

app.listen(PORT, () => {
  console.log(`The Express server is listening at port: ${PORT}`)
})
