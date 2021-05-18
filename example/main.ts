
import { produce } from './producer'
import { kafka } from './kafka'
import Consumer  from '../kafka-socks/Consumer';
import Subject from '../kafka-socks/Subject'
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
  res.sendFile(__dirname + '/chart.html')
});

// in the html we do this
//socket.emit('consumer', consumer)
//io.on('consumer' (socket, consumer))
        
produce().catch((error: any) => {
  console.log(error);
  process.exit(1);
})

const consumer = kafka.consumer({
  groupId: 'truck-group'
})




const consumer_run = new Consumer(consumer, process.env.TOPIC!, 'truck message')
const trucks_subject = new Subject(io, 'trucks')
trucks_subject.add(consumer_run)
trucks_subject.connect()
// io.on('connection', socket => {
  

  //   produce().catch(error => {
  //   console.log(error);
  //   process.exit(1);
  // })

//     const consumer = kafka.consumer({
//       groupId: 'truck-group'
//     })

//     const consumer_run = new Consumer(consumer, process.env.TOPIC, 'truck message', io)

//     consumer_run.run()
  

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

server.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
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