//to be translated into typescript

export class Consumer {
  consumer: object; //will we make these three an instance of a Kafka object or are we going to set an interface for each?
  topic: object;
  event: object;

  constructor(consumer: object, topic: object, event: object) {
    this.consumer = consumer;
    this.topic = topic;
    this.event = event;
    //this.io = io;
  }
  
  async run(io: object) {
  //   await this.consumer.connect();

  //   await this.consumer.subscribe({
  //     topic: this.topic,
  //     // topic: process.env.TOPIC,
  //     fromBeginning: true,
  //   });

  //   await this.consumer.run({
  //     eachMessage: async ({ topic, partition, message }) => {
  //       io.emit(this.event, message.value.toString());
  //       console.log(
  //         "received Message from kafka",
  //         JSON.parse(message.value.toString())
  //       );
  //     },
  //   });
  }
}
