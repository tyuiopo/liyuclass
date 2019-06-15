
const express = require('express');

const app = express();

const port = 3000;

// app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => res.send('<h1>Hello World! 你好</h1>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))