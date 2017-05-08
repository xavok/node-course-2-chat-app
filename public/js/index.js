/**
 * Created by Xavok on 5/8/2017.
 */
"use strict";

const socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'xavok@gmail.com',
        text: 'Hey, This is test'
    });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('create new message', message);
});