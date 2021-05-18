// const app = require('./app');
require("dotenv").config();
const server = require("http").createServer();
const os = require("os-utils");
// const Kafka = require("kafkajs");
// const Confluent = require('../../kafka-socks/Confluent');
// const PORT = process.env.PORT || 5050;


const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});


let tick = 0;

// build out the producer
// instantiate our library
// use the kafkasocks object to consume from producer
// and send to front end




// produer
// every second, produce a random # between 0 and 9


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
