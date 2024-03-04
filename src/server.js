require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/', (req, res) => {
  res.json('hello world!')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
