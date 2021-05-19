import { produce } from './producer'
import { kafka } from './kafka'
import Consumer  from '../../kafka-socks/Consumer';
import Subject from '../../kafka-socks/Subject'
require('dotenv').config();
const express = require('express');
const port = process.env.PORT
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const path = require('path');

app.get('/', (req: any, res: any) => {
  res.sendFile(__dirname + '/../index.html')
});

// in the html we do this
//socket.emit('consumer', consumer)
//io.on('consumer' (socket, consumer))
        
produce().catch((error: any) => {
  console.log(error);
  process.exit(1);
})

// const consumer = kafka.consumer({
//   groupId: 'truck-group'
// })

// const consumer_run = new Consumer(consumer, process.env.TOPIC!, 'truck message')
// const trucks_subject = new Subject(io, 'trucks')
// trucks_subject.add(consumer_run)
// trucks_subject.connect()

server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
require('dotenv').config();