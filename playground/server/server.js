'use strict';
exports.__esModule = true;
require('dotenv').config();
var express = require('express');
var http = require('http');
var path = require('path');
var Server = require('socket.io').Server;
var Confluent_1 = require('./../../kafka-socks/Confluent');
var Consumer_1 = require('./../../kafka-socks/Consumer');
var Subject_1 = require('./../../kafka-socks/Subject');
var app = express();
var server = http.createServer(app);
var io = new Server(server);
var PORT = 3001;
//prior to bringing this in from .env file, we continually received the "split of"
// const { API_KEY: string, API_SECRET: string, KAFKA_BOOTSTRAP_SERVER: string } = process.env;
var API_KEY = 'TS5O26XUTAOKGJ3Y';
var API_SECRET =
  'UiDwMizJ05+plVsGIS8ChoSTpHVsbs+qXakJ6/rbAX5DQtgOITUdqJoNF13Pinuu';
var KAFKA_BOOTSTRAP_SERVER = 'pkc-ep9mm.us-east-2.aws.confluent.cloud:9092';
console.log(__dirname);
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, './../client/index.html'));
});
// 1. set up the producer to produce messages on interval
var kafka = new Confluent_1['default'](
  API_KEY,
  API_SECRET,
  KAFKA_BOOTSTRAP_SERVER
).create('client-id');
var producer = kafka.producer();
producer
  .connect()
  .then(function () {
    setInterval(function () {
      producer.send({
        topic: 'Allison-and-Jason-Be-Debuggin',
        messages: [
          // { key: "some-key", value: Math.floor(Math.random() * 9).toString() },
          {
            key: 'some-key',
            value:
              '{"source":"1","kafka-socks-downloads":' +
              (Math.floor(Math.random() * 70) + 170).toString() +
              ',"average-download-speed":2000}',
          },
        ],
      });
      console.log('message sent');
    }, 1000);
  })
  ['catch'](function (err) {
    console.log('Error in producer.connect function', err);
    process.exit(1);
  });
// 2. create a kafkasocks instance to:
// a. consume produced messages and
// b. emit them on socket
var consumer = kafka.consumer({ groupId: 'group-id' });
var kafkasockClient = new Consumer_1['default'](
  consumer,
  'Allison-and-Jason-Be-Debuggin',
  'Jasons-new-message'
);
var subject = new Subject_1['default'](io, 'trucks');
subject.add(kafkasockClient);
subject.connect();
server.listen(PORT, function () { return console.log('listening on port 3001'); });
