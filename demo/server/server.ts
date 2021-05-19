// const app = require('./app');
require("dotenv").config();
const server = require("http").createServer();
const os = require("os-utils");
// const Kafka = require("kafkajs");
// const Confluent = require('../../kafka-socks/Confluent');
import Confluent from "./../../kafka-socks/Confluent";

console.log(Confluent);
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

// build out the producer
// instantiate our library
// use the kafkasocks object to consume from producer
// and send to front end

//////////////////////////////////////////* Starting Producer Logic */////////////////////////////
const { API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER, TOPIC } = process.env;
const kafka = (new Confluent(API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER)).create('Kafkasocks_downloads1');

let idx = 0;
// produer
// every second, produce a random # between 0 and 9
const produce = async (kafka) => {
  console.log('starting the producer connection')
    const producer = kafka.producer();
  try {
    await producer.connect();
    await producer.send({
      topic: TOPIC,
      messages: [
        {
          key: String(idx),
          value: Math.floor(Math.random() * 9).toString()
        }
      ]
    });
    idx++;
  } catch (err) {
    console.log('error in produce function', err)
  }
};
  
produce(kafka);

///////////////////////////////////////////////////////////////////////////////////////////////////

let tick = 0;

// 1. listen for socket connections
io.on("connection", (client) => {

  setInterval(() => {
    // 2. every second, emit a 'cpu' event to user
    os.cpuUsage((cpuPercent) => {
      client.emit("cpu", {
        name: tick++,
        value: cpuPercent,
      });
    });
  }, 1000);
});

// // 1. listen for socket connections
//   io.on('connection', client => {
//     setInterval(() => {
//       // 2. every second, emit a 'cpu' event to user
//       os.cpuUsage(cpuPercent => {
//         client.emit('cpu', {
//           name: tick++,
//           value: cpuPercent
//         });  
//       });
//     }, 1000);
//   });

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
server.listen(3333);
