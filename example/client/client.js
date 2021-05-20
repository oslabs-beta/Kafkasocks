"use strict";
exports.__esModule = true;
var socket_io_client_1 = require("socket.io-client");
var head = document.getElementById('head');
head.innerHTML = 'new Head';
var messages = document.getElementById('messages');
// const item = document.createElement('li');
// item.textContent = 'hello';
// messages!.appendChild(item);
var truckSocket = socket_io_client_1.io('/trucks');
truckSocket.on('truck message', function (msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
