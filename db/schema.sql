CREATE DATABASE sticky_notes_api;

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  content_html TEXT NOT NULL,
  colour TEXT 
);

INSERT INTO notes (content, content_html, colour) 
VALUES ('# hello', '<h1>hello</h1>', '#FF0000');