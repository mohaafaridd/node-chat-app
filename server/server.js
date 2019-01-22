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

    // socket.emit from admin text welcome
    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome Our Special Guest!'
    });

    // socket.broadcast.emit from admin text new user joined
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'Our shining star is back!'
    });
    
    socket.on('createMessage', (message) => {
        console.log('create message', message);

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });

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