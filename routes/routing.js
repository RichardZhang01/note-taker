const express = require('express');

const notesRouter = require('./notes');
const apiRouter = require('./api');

const app = express();

app.use('/notes', notesRouter);
// app.use('/api/notes', apiRouter);

module.exports = app;