/**
 * Created by Xavok on 5/7/2017.
 */
"use strict";

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const io = socketIO(server);
const {generateMessage} = require('./utils/message');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New user joined'));

    socket.on('createMessage', (message) => {
        console.log('create message', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
    });
    socket.on('disconnect', () => {
        console.log('User was Disconnect');
    });
});


server.listen(port, () => {
    console.log(`Started on port ${port}`);
});