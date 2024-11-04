const express = require('express')
const Note = require('../models/note')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('sticky notes JSON API')
})

module.exports = router