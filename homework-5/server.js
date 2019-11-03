'use strict';

const http = require('http');

const hostname = 'localhost';
const port = '8888';
let time = 1;

const server = http.createServer((req, res) => {

    setTimeout(()=> {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(time + ' Hello World');
        time++;
    }, 100)
    
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})