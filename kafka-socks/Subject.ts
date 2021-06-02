export class Subject {
  io: any;
  namespace: any;
  consumerArr: any[];

  // io is socket server instance
  // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)

  /**
   * Constructs the entire set of the Kafka Socks Consumers
   * @param io the socket.io server object
   * @param namespace the websocket namespace id
   * @param consumerArr an array of Kafka Socks consumer objects
   */
  constructor(io: any, namespace: string, consumerArr: any[] = []) {
    this.io = io;
    this.namespace = this.io.of("/" + namespace);
    this.consumerArr = consumerArr;
    console.log("subject made");
  }

  /**
   * Adds the Kafka Socks consumer object to consumer array
   * @param consumer a Kafka socks consumer object
   */
  add(consumer: any) {
    // instantiate the Kakfa Consumer using the Kafa-provided class + add that consumer to our array
    console.log("in Subject.add");
    this.consumerArr.push(consumer);
  }

  /**
   * pauses all of the Kafka Socks consumers in the consumer array
   */
  pause() {
    this.consumerArr.forEach((consumer: any) => {
      consumer.pauser();

      // socket.on('disconnect', () => {
      //   console.log('disconnecting');
      //   consumer.disconnect().then(() => console.log('disconnected'));
      // });
    });
  }

  /**
   * resumes all of the Kafka Socks consumers in the consumer array
   */
  resume() {
    console.log("in resume inside Subject.ts");
    this.consumerArr.forEach((consumer: any) => {
      consumer.resumer(this.namespace);
    });
  }

  /**
   * intializes the listener for the websocket namespaces
   */
  connect() {
    console.log("in Subject.connect()");
    this.namespace.on("connection", (socket: any) => {
      console.log("in the namespace connection");
      // we need the socket to be listening to the event here
      // there is no socket.on('this.event')

      // socket.on('disconnect', consumer => {
      //   consumer.
      // });

      console.log("in namespace.on cb");
      this.consumerArr.forEach((consumer: any) => {
        consumer.run(this.namespace);

        // socket.on('disconnect', () => {
        //   console.log('disconnecting');
        //   consumer.disconnect().then(() => console.log('disconnected'));
        // });
      });
    });
  }

  // disconnect(event: any) {
  //   this.namespace.on(event, (socket : object) => {
  //     console.log('disconnected...')
  //   })
  // }
}

export default Subject;
