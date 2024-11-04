require('dotenv').config()

const express = require('express')
const requestLogger = require('./middlewares/request_logger')
const app = express()
const port = process.env.PORT || 4567
const homeRouter = require('./routes/home_router')
const noteRouter = require('./routes/note_router')

app.use(express.json())
app.use(requestLogger)

app.use(homeRouter)
app.use(noteRouter)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

