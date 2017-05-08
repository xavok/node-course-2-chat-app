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

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('createMessage', (message) => {
        console.log('create message', message);
    });
    socket.emit('newMessage', {
        from: 'Max',
        text: "Test back",
        createdAt: 123412
    });
    socket.on('disconnect', () => {
        console.log('User was Disconnect');
    });
});


server.listen(port, () => {
    console.log(`Started on port ${port}`);
});