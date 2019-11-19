const server = require('./server.js');

const port = process.env.PORT || 9000

server.get('/', (req, res) => {
    res.status(201).send('<img src="https://media.giphy.com/media/UqUJhrD0om73q/giphy.gif"/>')
});

server.listen(port, ()=>console.log(`The server is alive on ${port}!`));