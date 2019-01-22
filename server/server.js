const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const {generateMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connect');

    // socket.emit from admin text welcome
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to c.me'));

    // socket.broadcast.emit from admin text new user joined
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));
    
    socket.on('createMessage', (message) => {
        console.log('create message', message);

        io.emit('newMessage', generateMessage(message.from, message.text));

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
})


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})