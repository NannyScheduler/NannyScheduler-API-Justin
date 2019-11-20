const express = require('express');
const nannyRouter = require('./api/nannyRoute');
const parentRouter = require('./api/parentRoute');
const userRouter = require('./api/userRoute.js');

const server = express();

//Defining Routes
server.use('/api/nannies', nannyRouter);
server.use('/api/users', userRouter);
server.use('/api/parents', parentRouter);



//Base/landing endpoints
server.get('/', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/1hBWHsBYoqYOfsmAsL/giphy.gif"/>')
});

server.get('/api', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif"/>')
});



module.exports = server;