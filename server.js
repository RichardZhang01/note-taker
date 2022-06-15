const express = require('express');
const api = require('./routes/routing');

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(api);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);