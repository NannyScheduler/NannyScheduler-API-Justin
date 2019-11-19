require('dotenv').config();

const express = require('express');
const server = express();
const helper = require('./api/nanny-models');

const port = 9000;

server.get('/', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif"/>')
});

server.get('/nannies', (req, res) => {
    helper.findAllNannies()
    .then(nannies=> {
        res.status(201).json({nannies});
    })
})

server.listen(port, ()=>console.log("The server is alive!"));