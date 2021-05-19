// import { kafka } from './kafka'
// require('dotenv').config();


// const producer = kafka.producer();

// const produce = async () => {
//     console.log('starting the producer connection')
//     await producer.connect();
//     await producer.send({ 
//         topic: process.env.TOPIC,        
//         messages: Math.floor(Math.random() * 9).toString() 
//     });
//   };

//   produce().catch((error: any) => {
//     console.log(error);
//     process.exit(1);
//   })
// //   export { produce }