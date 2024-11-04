const express = require('express')
const Note = require('../models/note')
const router = express.Router()

router.get('/api/notes', async (req, res) => {
  let notes = await Note.findAll()
  res.json(notes)
})

router.get('/api/notes/:id', (req, res) => {
  Note.findById(req.params.id)
    .then(note => res.json(note))
})

router.delete('/api/notes/:id', (req, res) => {
  Note.destroy(req.params.id)
    .then(note => res.json({ message: 'deleted', note }))
})

router.post('/api/notes', (req, res) => {
  const {content, colour} = req.body
  Note.create(content, colour)
    .then(note => res.status(201).json(note))
})

module.exports = router