require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
// import Consumer from "kafka-socks";
// import Subject from "./../../kafka-socks/Subject";

// const {Consumer} = require('kafka-socks');
// const {Subject} = require('kafka-socks');

// import { Consumer } from 'kafka-socks';
// import { Subject } from 'kafka-socks';

import Consumer from "./../../kafka-socks/Consumer";
import Subject from "./../../kafka-socks/Subject";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;



import { produce } from './producer'
import { kafka } from './kafka'
require('dotenv').config();


// const port = 3000;

app.use(require("cors")());

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "../client/index.html"));
  // res.sendFile("index.html");
});



const kafkaconsumer_1 = kafka.consumer({
  groupId: 'truck-group-1'
})
const kafkaconsumer_2 = kafka.consumer({
  groupId: 'truck-group-2'
})

//const consumer_1 = new Consumer(kafkaconsumer_1, 'trucks-topic-1'<--related to Kafka (what topic should the consumer subscribe to), `truck message-1`<-- socketio (what event should it emit)) //
const consumer_1 = new Consumer(kafkaconsumer_1, 'trucks-topic-1', `truck message-1`) //
const consumer_2 = new Consumer(kafkaconsumer_2, 'trucks-topic-2', 'truck message-2')
const trucks_subject = new Subject(io, 'trucks')
trucks_subject.add(consumer_1)
trucks_subject.add(consumer_2)

app.get('/consume', (req: any, res : any) => {
  produce().catch((error: any) => {
    console.log(error);
    process.exit(1);
  })
  trucks_subject.connect()
  return res.send({message : 'works!'})
})


app.get('/pause', (req : any, res : any ) => {
  console.log('in the middleware for pause')
  console.log('in pause')
  trucks_subject.pause();
  return res.send({message : 'works!'})
})

app.get('/resume', (req: any, res: any) => {
  console.log('in the middleware for resume')
  trucks_subject.resume();
  return res.send({message : 'works!'})
})

  
server.listen(PORT, () => {
  console.log(`Listening on port ${server.address().port}`);
});
require('dotenv').config();

//prior to bringing this in from .env file, we continually received the "split of"
// const { API_KEY: string, API_SECRET: string, KAFKA_BOOTSTRAP_SERVER: string } = process.env;
// const API_KEY = "PS5UR5WJMR3M4IUK";
// const API_SECRET = `sViLnhxYPSZzirnBznMVHxRoQbvltcpmOJjlvnuv0f+SW138XyA1ZmO/kp7K87sg`;
// const KAFKA_BOOTSTRAP_SERVER = `pkc-lzvrd.us-west4.gcp.confluent.cloud:9092`;

// // app.use("/", (req: {}, res: {}) => {
// //   express.static(path.join(__dirname, "./../client/"));
// // });

// app.use(require("cors")());

// app.get("/", (req: any, res: any) => {
//   res.sendFile(path.resolve(__dirname, "../client/index.html"));
//   // res.sendFile("index.html");
// });

// // // 1. set up the producer to produce messages on interval
// // const kafka: { producer: Function; consumer: Function } = new Confluent(
// //   API_KEY,
// //   API_SECRET,
// //   KAFKA_BOOTSTRAP_SERVER
// // ).create("client-id");

// // const randomizer = (hi: number, lo: number = 0) => {
// //   return Math.floor(Math.random() * (hi + 1 - lo) + Math.floor(lo));
// // };

// // const producer = kafka.producer();
// // producer
// //   .connect()
// //   .then(() => {
// //     setInterval(() => {
// //       producer.send({
// //         topic: "Socks",
// //         messages: [
// //           // { key: "some-key", value: Math.floor(Math.random() * 9).toString() },
// //           {
// //             key: "some-key",
// //             value: `{"source":"www.npmjs.com","kafka-socks-downloads":${randomizer(
// //               20
// //             ).toString()},"average-download-speed":${randomizer(2000, 1000)}}`,
// //           },
// //         ],
// //       });
// //       console.log("message sent");
// //     }, 1000);
// //   })
// //   // .then(() => console.log("message sent"))
// //   .catch((err: Error) => {
// //     console.log("Error in producer.connect function", err);
// //     process.exit(1);
// //   });

// // 2. create a kafkasocks instance to:
// // a. consume produced messages and
// // b. emit them on socket
// const consumer = kafka.consumer({ groupId: "group-id" })
// const kafkasockClient = new Consumer(
//   consumer,
//   "Socks",
//   "new download"
// );
// const subject = new Subject(io, "trucks");
// subject.add(kafkasockClient);
// subject.connect();

// server.listen(PORT, () => console.log("listening on port 3001"));
