require("dotenv").config();
const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
// const { Server } = require("socket.io")(http, {
//   cors: {
//     origin: "http://localhost:8000",
//     methods: ["GET", "POST"],
//   },
// });

import Confluent from "./../../kafka-socks/Confluent";
import Consumer from "./../../kafka-socks/Consumer";
import Subject from "./../../kafka-socks/Subject";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 3000;

//prior to bringing this in from .env file, we continually received the "split of"
// const { API_KEY: string, API_SECRET: string, KAFKA_BOOTSTRAP_SERVER: string } = process.env;
const API_KEY = "TS5O26XUTAOKGJ3Y";
const API_SECRET = `UiDwMizJ05+plVsGIS8ChoSTpHVsbs+qXakJ6/rbAX5DQtgOITUdqJoNF13Pinuu`;
const KAFKA_BOOTSTRAP_SERVER = `pkc-ep9mm.us-east-2.aws.confluent.cloud:9092`;

// app.use("/", (req: {}, res: {}) => {
//   express.static(path.join(__dirname, "./../client/"));
// });

app.use(require("cors")());

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, "./../client/index.html"));
  // res.sendFile("index.html");
});

// 1. set up the producer to produce messages on interval
const kafka: { producer: Function; consumer: Function } = new Confluent(
  API_KEY,
  API_SECRET,
  KAFKA_BOOTSTRAP_SERVER
).create("client-id");

const producer = kafka.producer();
producer
  .connect()
  .then(() => {
    setInterval(() => {
      producer.send({
        topic: "Allison-and-Jason-Be-Debuggin",
        messages: [
          // { key: "some-key", value: Math.floor(Math.random() * 9).toString() },
          {
            key: "some-key",
            value: `{"truck_id":"1","engine_temperature":${(
              Math.floor(Math.random() * 70) + 170
            ).toString()},"average_rpm":2000}`,
          },
        ],
      });
      console.log("message sent");
    }, 1000);
  })
  // .then(() => console.log("message sent"))
  .catch((err: Error) => {
    console.log("Error in producer.connect function", err);
    process.exit(1);
  });

// 2. create a kafkasocks instance to:
// a. consume produced messages and
// b. emit them on socket
const consumer = kafka.consumer({ groupId: "group-id" });
const kafkasockClient = new Consumer(
  consumer,
  "Allison-and-Jason-Be-Debuggin",
  "Jasons-new-message"
);
const subject = new Subject(io, "trucks");
subject.add(kafkasockClient);
subject.connect();

server.listen(PORT, () => console.log("listening on port 3000"));
