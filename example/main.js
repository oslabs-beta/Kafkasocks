"use strict";
exports.__esModule = true;
var producer_1 = require("./producer");
var kafka_1 = require("./kafka");
var Consumer_1 = require("../kafka-socks/Consumer");
var Subject_1 = require("../kafka-socks/Subject");
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
    res.sendFile(__dirname + '/chart.html');
});
// in the html we do this
//socket.emit('consumer', consumer)
//io.on('consumer' (socket, consumer))
producer_1.produce()["catch"](function (error) {
    console.log(error);
    process.exit(1);
});
var kafkaconsumer_1 = kafka_1.kafka.consumer({
    groupId: 'truck-group-1'
});
var kafkaconsumer_2 = kafka_1.kafka.consumer({
    groupId: 'truck-group-2'
});
//const consumer_1 = new Consumer(kafkaconsumer_1, 'trucks-topic-1'<--related to Kafka (what topic should the consumer subscribe to), `truck message-1`<-- socketio (what event should it emit)) //
var consumer_1 = new Consumer_1["default"](kafkaconsumer_1, 'trucks-topic-1', "truck message-1"); //
var consumer_2 = new Consumer_1["default"](kafkaconsumer_2, 'trucks-topic-2', 'truck message-2');
var trucks_subject = new Subject_1["default"](io, 'trucks');
trucks_subject.add(consumer_1);
trucks_subject.add(consumer_2);
//wrap connect in an event listener of sorts
app.get('/consume', function (req, res) {
    trucks_subject.connect();
    return res.send({ message: 'works!' });
});
app.get('/pause', function (req, res) {
    console.log('in the middleware for pause');
    trucks_subject.pause();
});
app.get('/resume', function (req, res) {
    console.log('in the middleware for resume');
    trucks_subject.resume();
});
// io.on('connection', socket => {
//   produce().catch(error => {
//   console.log(error);
//   process.exit(1);
// })
// const consumer = kafka.consumer({
//   groupId: 'truck-group'
// })
// const consumer_run = new Consumer(consumer, process.env.TOPIC, 'truck message', io)
// consumer_run.run()
//   })
//   .catch(async error => {
//     console.error(error)
//     try {
//      await consumer.disconnect()
//   } catch (e) {
//       console.error('Failed to gracefully disconnect consumer', e)
//   }
//    process.exit(1)
// })
// io.on('connection', socket => {
//     produce().catch(error => {
//     console.log(error);
//     process.exit(1);
//   })
//     const consumer = kafka.consumer({
//       groupId: 'truck-group'
//     })
//     const consume = async () => {
//     //  console.log('in consume()')
//       await consumer.connect()
//       await consumer.subscribe({
//         topic: process.env.TOPIC,
//         // topic: process.env.TOPIC,
//         fromBeginning: true
//       })
//      // let output;
//       await consumer.run({
//         eachMessage: async ({ topic, partition, message }) => {
//         // output = message.value.toString();
//         io.emit('truck message', message.value.toString())
//        console.log('Received Message', 
//             JSON.parse(message.value.toString()))
//           // console.log('Received message', {
//           //   topic,
//           //   partition,
//           //   key: message.key.toString(),
//           //   value: JSON.parse(message.value.toString()),
//           //   valueString: message.value.toString()
//           // })
//         }
//       })
//     }
//     consume()
//       .catch(async error => {
//       console.error(error)
//       try {
//        await consumer.disconnect()
//     } catch (e) {
//         console.error('Failed to gracefully disconnect consumer', e)
//     }
//      process.exit(1)
// })
//   })
// consume method that connects, subscribes to a topic and consumes messages from that topic
server.listen(port, function () {
    console.log("Listening on port " + server.address().port);
});
require('dotenv').config();
// // running the server
// server.listen(port, () => {
//   console.log(`Listening on port ${server.address().port}`);
// });
// running the producer
// produce().catch(error => {
//     console.log(error);
//     process.exit(1);
// })
// Running the consumer
// consume().then(message => {
//   // socket io stuff
// }).catch(async error => {
//   console.error(error)
//   try {
//     await consumer.disconnect()
//   } catch (e) {
//     console.error('Failed to gracefully disconnect consumer', e)
//   }
//   process.exit(1)
// })
