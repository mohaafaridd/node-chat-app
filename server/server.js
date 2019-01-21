const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connect');

    socket.emit('newMessage', {
        from: 'farid@example.com',
        text: 'Hello from the server side',
        createdAt: 777
    });

    socket.on('createMessage', (message) => {
        console.log('create message', message);
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})