const { Kafka } = require('kafkajs');

type ConsumerInterface = {
  connect: Function;
  subscribe: Function;
  run: Function;
  pause: Function;
}

type ioInterface = {
  emit: Function;
}

type EventInterface = {
  topic: string;
  partition: string;
  message: Message;
}

type Message = {
  value: string;
}

class Consumer {
  consumer: ConsumerInterface; 
  topic: string;
  event: string;

  // consumer is a Kafka consumer object
  // topic is the Kafka object's topic
  // event is the socket.io event on which the kafka message is being passed
  constructor(
    consumer: ConsumerInterface,
    topic: string,
    event: string
  ) {
    this.consumer = consumer; //
    this.topic = topic;
    this.event = event;
  }

  // instantiate the Kafka consumer on the passed topic and subscribe with that consumer
  async run(namespace: any) {
    console.log('consumer is about to run')
    await this.consumer.connect();
    console.log('consumer has connected')

    await this.consumer.subscribe({
      topic: this.topic,
      fromBeginning: true,
    });
    console.log('consumer has subscribed to topic: ', this.topic)

    await this.consumer.run({
      eachMessage: async (eventInfo: EventInterface) => {
        namespace.emit(this.event, eventInfo.message.value.toString());
        console.log(
          "received Message from kafka",
          JSON.parse(eventInfo.message.value.toString())
        );
      },
    });

    // namespace.on('pause', () => {
    //   console.log('disconnected...')
    //   // this.consumer.pause(/** */)
    // });

    console.log('consumer has run')
  }
}


export default Consumer; 