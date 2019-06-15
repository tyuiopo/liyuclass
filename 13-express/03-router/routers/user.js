const express = require('express');
const router = express.Router();


app.get('/', (req, res) => res.send('get response data....'));
app.post('/', (req, res) => res.send('post response data....'));
app.put('/', (req, res) => res.send('put response data....'));
app.delete('/', (req, res) => res.send('delete response data....'));

