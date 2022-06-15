const api = require('express').Router();
// const fs = require('fs');
// const path = require('path');
const { readFromFile, readAndAppend, readFilterAndAppend } = require('../helpers/fsUtils')
const { v4: uuidv4 } = require('uuid');

api.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../db/db.json'));
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

api.post('/', (req, res) => {
    // let db = fs.readFileSync('')
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
        title,
        text,
        id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);
    } else {
        res.error('Error in adding note');
    }
});

api.delete('/:id', (req, res) => {
    // let db = fs.readFileSync('')
    const identifier = req.params.id;
    if (identifier) {
        readFilterAndAppend('./db/db.json', identifier);
        res.json(`Note deleted successfully`);
    } else {
        res.error('Error in deleting note');
    }
});

module.exports = api;