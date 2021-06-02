const { Kafka } = require("kafkajs");

type ConsumerInterface = {
  connect: Function;
  subscribe: Function;
  run: Function;
  pause: Function;
  resume: Function;
  isConsuming: Boolean;
};

type ioInterface = {
  emit: Function;
};

type EventInterface = {
  topic: string;
  partition: string;
  message: Message;
  pause: boolean;
  resume: boolean;
};

type Message = {
  value: string;
};

export class Consumer {
  consumer: ConsumerInterface;
  topic: string;
  event: string;
  pause: boolean;
  resume: boolean;
  isConsuming: boolean;

  /**
   * Constructs the Kafka Socks consumer object, which wraps around a KafkaJS consumer object,
   * and associates the consumer object with a particular websocket event
   * @param consumer a Kafka Socks consumer
   * @param topic the topic to associate with the Kafka Socks consumer
   * @param event the websocket event ID
   */
  constructor(
    consumer: ConsumerInterface,
    topic: string,
    event: string,
    pause: boolean = false,
    resume: boolean = false,
    isConsuming: boolean = false
  ) {
    this.consumer = consumer; //
    this.topic = topic;
    this.event = event;
    this.pause = pause;
    this.resume = resume;
    this.isConsuming = isConsuming;
  }

  /**
   * pauses the consumption of the KafkaSocks consumer
   */
  pauser() {
    console.log("in pauser method");
    this.resume = false;
    this.pause = true;
  }

  /**
   * Resumes a paused KafkaSocks consumer
   * @param namespace not used
   */
  resumer(namespace: any) {
    console.log("in resume method");
    // this.pause = false;
    this.resume = true;
    this.consumer.resume([{ topic: this.topic }]);
    // this.runAfterResume(namespace);
    console.log(
      "this.pause should be false here inside resumer(): ",
      this.pause
    );
    console.log(
      "this.resume should be true for here inside resumer(): ",
      this.resume
    );
  }

  // instantiate the Kafka consumer on the passed topic and subscribe with that consumer

  // async runAfterResume(namespace : any) {
  //  await this.consumer.run({

  //     eachMessage: async (eventInfo: EventInterface) => {
  //   //listening for a pause event
  //       if(this.pause) {
  //         this.consumer.pause([{topic: this.topic}])
  //         //setTimeout(() => this.consumer.resume([{topic: this.topic}]), 10000)
  //       }

  //       // else if(this.resume) {
  //       //   console.log('in Consumer.ts after resume is set to true :', this.resume)
  //       //   this.consumer.resume([{topic: this.topic}]);
  //       //   this.resume = false;
  //       // }
  //   namespace.emit(this.event, eventInfo.message.value.toString());
  //       console.log(
  //         "received Message from kafka",
  //         JSON.parse(eventInfo.message.value.toString())
  //       );
  //     },
  //   });
  // }

  /**
   * Starts the KakfaJS consumers wrapped by the Kafka Socks consumer class
   * @param namespace a socket.io namespace
   */
  async run(namespace: any) {
    console.log("Consumer in run()");
    await this.consumer.connect();
    console.log("consumer has connected");

    await this.consumer.subscribe({
      topic: this.topic,
      fromBeginning: true,
    });
    console.log("consumer has subscribed to topic: ", this.topic);

    this.isConsuming = true;

    await this.consumer.run({
      eachMessage: async (eventInfo: EventInterface) => {
        //listening for a pause event
        if (this.pause) {
          console.log("PAUSE IS TRUE");
          if (this.resume) {
            console.log("inside nested resume in if(this.pause)");
            console.log("this.resume: ", this.resume);
          } else {
            this.consumer.pause([{ topic: this.topic }]);
          }
          //setTimeout(() => this.consumer.resume([{topic: this.topic}]), 10000)
        }

        // else if(this.resume) {
        //   console.log('in Consumer.ts after resume is set to true :', this.resume)
        //   this.consumer.resume([{topic: this.topic}]);
        //   this.resume = false;
        // }
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
    console.log("consumer has run");
  }
}

export default Consumer;
