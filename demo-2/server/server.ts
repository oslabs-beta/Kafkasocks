const express = require('express');
const app = express();
const path = require('path');

// app.use('/', (req: {}, res: {}) => {

// })

app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve(__dirname, './../client/index.html'))
});

app.listen(3000, () => console.log('listening on 3000'));

// 1. set up the producer to produce messages on interval

// 2. create a kafkasocks instance to:
  // a. consume produced messages and 
  // b. emit them on socket

// require('dotenv').config();
// const http = require('http');
// const express = require('express');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// const PORT = 3000;
