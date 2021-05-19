"use strict";
exports.__esModule = true;
var producer_1 = require("./producer");
require('dotenv').config();
var express = require('express');
var port = process.env.PORT;
var app = express();
var http = require('http');
var server = http.createServer(app);
var Server = require('socket.io').Server;
var io = new Server(server);
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/../index.html');
});
// in the html we do this
//socket.emit('consumer', consumer)
//io.on('consumer' (socket, consumer))
producer_1.produce()["catch"](function (error) {
    console.log(error);
    process.exit(1);
});
// const consumer = kafka.consumer({
//   groupId: 'truck-group'
// })
// const consumer_run = new Consumer(consumer, process.env.TOPIC!, 'truck message')
// const trucks_subject = new Subject(io, 'trucks')
// trucks_subject.add(consumer_run)
// trucks_subject.connect()
server.listen(port, function () {
    console.log("Listening on port " + server.address().port);
});
require('dotenv').config();
