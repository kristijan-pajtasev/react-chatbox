const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
let messages = [];

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let sockets = [];

wss.on('connection', function connection(ws, req) {
    sockets.push(ws);

    ws.on('close', function close() {
        sockets = sockets.filter(s => s != ws);
        console.log('socket disconnected');
    });
});

app.get('/message', function(req, res) {

    res.send({ messages: messages });
});

app.post('/message', function(req, res) {
    const message = req.body;
    messages.push(message);
    sockets.forEach(s => {
        s.send(JSON.stringify({ type: 'MESSAGE', message: message}));
    });
    res.send('');
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    res.send({ username: username });
});

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});