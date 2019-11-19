const express = require('express');
const nannyRouter = require('./api/nannyRoute');
const parentRouter = require('./api/parentRoute');

const server = express();

//Routes
server.use('/api/nannies', nannyRouter);
server.use('api/parents', parentRouter);

module.exports = server;