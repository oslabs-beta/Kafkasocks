//to be translated into typescript
// const { Kafka } = require('kafkajs');
// const Subject = require('./Subject.ts');

//what functionality can we add here that would differentiate this from what's provided by Kafka? 

/* Note to Allison... Jason has chosen a path. This is the path we took. We ~may~ need to refactor these type declarations in the future*/

// if this doesn't work use any as type of consumer
// or have Allison (our Typescript guru) fix it
// this might not work, but we wont know until Subject is built and we test
interface ConsumerInterface {
  connect: Function;
  subscribe: Function;
  run: Function;
}

interface ioInterface {
  emit: Function;
}

interface EventInterface {
  topic: string;
  partition: string;
  message: Message;
}

interface Message {
  value: string;
}

export class Consumer {
  //consumer type is currently set to 'any' for functionality purpose.
  //we would like to have a specific type declared so that connect, subscribe and any other key would be accepted. 
  consumer: ConsumerInterface; //will we make these three an instance of a Kafka object or are we going to set an interface for each?
  topic: string;
  event: string;

  // consumer is a Kafka consumer object
  // topic is the Kafka object's topic
  // event is the socket.io event on which the kafka message is being passed
  constructor(consumer: ConsumerInterface, topic: string, event: string) {
    this.consumer = consumer; //
    this.topic = topic;
    this.event = event;
    //this.io = io;
  }
  
  // instantiate the Kafka consumer on the passed topic
  // and subscribes with that consumer
  async run(io: ioInterface) {
    await this.consumer.connect();

    await this.consumer.subscribe({
      topic: this.topic,
      // topic: process.env.TOPIC,
      fromBeginning: true,
    });

    await this.consumer.run({
      eachMessage: async (eventInfo: EventInterface) => {
        io.emit(this.event, eventInfo.message.value.toString());
        console.log(
          "received Message from kafka",
          JSON.parse(eventInfo.message.value.toString())
        );
      },
    });
  }
}
