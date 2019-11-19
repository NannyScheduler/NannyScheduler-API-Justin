const express = require('express');
const nannyRouter = require('./api/nannyRoute');
// const parentRouter = require('./api/parentRoute');

const server = express();

//Routes
server.get('/', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/1hBWHsBYoqYOfsmAsL/giphy.gif"/>')
});

server.get('/api', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif"/>')
});

server.use('/api/nannies', nannyRouter);
// server.use('api/parents', parentRouter);

module.exports = server;