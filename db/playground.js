require('dotenv').config()

const Note = require('../models/note');

Note.findAll()
  .then(notes => console.log(notes))


