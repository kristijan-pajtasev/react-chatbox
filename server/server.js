const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let messages = [];
let users = require("./users");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let sockets = [];

wss.on('connection', function connection(ws, req) {
    sockets.push(ws);

    ws.on('close', function close() {
        sockets = sockets.filter(s => s !== ws);
    });
});

app.get('/message', function(req, res) {
    res.send({ messages: messages });
});

app.post('/message', function(req, res) {
    const { message } = req.body;
    let user = users.getUserWithSession(req.cookies.CHAT_SESSION_ID);
    let { username } = user;
    messages.push({ message, username });
    sockets.forEach(s => {
        s.send(JSON.stringify({ type: 'MESSAGE', message, username}));
    });
    res.send('');
});

app.post('/logged', function(req, res) {
    let isLogged = users.isLoggedIn(req.cookies.CHAT_SESSION_ID);
    if(isLogged) {
        res.send({ username: users.getUserWithSession(req.cookies.CHAT_SESSION_ID).username });
    } else {
        res.send({data: 'dsa'});
    }
});

app.post('/login', function(req, res) {
    const username = req.body.username;
    let value = Math.floor(Math.random() * 100000000);
    users.login(username, value);
    res.cookie('CHAT_SESSION_ID', value);
    res.send({ username: username });
});

server.listen(8080, function listening() {
    console.log('Listening on %d', server.address().port);
});