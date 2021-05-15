//to be translated into typescript

//what functionality can we add here that would differentiate this from what's provided by Kafka? 

export class Consumer {
  consumer: object; //will we make these three an instance of a Kafka object or are we going to set an interface for each?
  topic: string;
  event: string;

  // consumer is a Kafka consumer object
  // topic is the Kafka object's topic
  // event is the socket.io event on which the kafka message is being passed
  constructor(consumer: object, topic: string, event: string) {
    this.consumer = consumer; //
    this.topic = topic;
    this.event = event;
    //this.io = io;
  }
  
  // instantiate the Kafka consumer on the passed topic
  // and subscribes with that consumer
  async run(io: object) {
  //   await this.consumer.connect();

  //   await this.consumer.subscribe({
  //     topic: this.topic,
  //     // topic: process.env.TOPIC,
  //     fromBeginning: true,
  //   });

  //   await this.consumer.run({
  //     eachMessage: async ({ topic, partition, message }) => {
        // io.emit(this.event, message.value.toString());
  //       console.log(
  //         "received Message from kafka",
  //         JSON.parse(message.value.toString())
  //       );
  //     },
  //   });
  }
}
