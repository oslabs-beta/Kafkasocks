const express = require('express');
const app = express();

// app.use('/', (req: {}, res: {}) => {

// })

app.get('/', (req: any, res: any) => {
  res.sendFile(__dirname + '/../client/index.html')
});



// 1. set up the producer to produce messages on interval

// 2. create a kafkasocks instance to:
  // a. consume produced messages and 
  // b. emit them on socket
