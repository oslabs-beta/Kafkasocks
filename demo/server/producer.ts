import { kafka } from './kafka'
require('dotenv').config();


const producer = kafka.producer();

const produce = async () => {
    await producer.connect();
    await producer.send({ 
        topic: process.env.TOPIC,        
        messages: Math.floor(Math.random() * 9).toString() 
    });
  };

  export { produce }