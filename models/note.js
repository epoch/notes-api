const db = require('../db')
const markdownit = require('markdown-it')
const md = markdownit()

function findAll() {
  const sql = `
    SELECT * 
    FROM notes;
  `
  return db.query(sql)
    .then(result => result.rows)
}

function destroy(id) {
  const sql = `
    DELETE
    FROM notes
    WHERE id = $1;
  `
  return db.query(sql, [id])
    .then(result => result.rows[0])
}

function findById(id) {
  const sql = `
    SELECT *
    FROM notes
    WHERE id = $1;
  `
  return db.query(sql, [id])
    .then(result => result.rows[0])
}

function create(content, colour = '#f6c2d9') {
  const sql = `
    INSERT INTO notes
    (content, content_html, colour)
    VALUES 
    ($1, $2, $3)
    RETURNING *;
  `
  return db.query(sql, [content, md.render(content), colour])
    .then(result => result.rows[0])
}

const Note = {
  findAll,
  destroy,
  findById,
  create
}


module.exports = Note