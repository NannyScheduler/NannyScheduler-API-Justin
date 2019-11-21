const express = require('express');
const nannyRouter = require('./api/nannyRoute');
const parentRouter = require('./api/parentRoute');
const userRouter = require('./api/userRoute.js');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');

//Cookie auth

const sessionConfig = {
    name: 'session', // default is connect.sid
    secret: 'Try me and see',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false, // only set cookies over https. Server will not send back a cookie over http.
    }, // 1 day in milliseconds
    httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
    resave: false,
    saveUninitialized: false,
  }

const authenticate = require('./api/middleware');
const cookieAuth = authenticate.CookieAuth;

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

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