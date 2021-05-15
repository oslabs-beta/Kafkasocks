//TBD: bring the functionality of the Consumer class into Subject?

class Subject {
  io: object;
  consumers: object[];

  // io is socket server instance
  // consumers is an array of KafkaSocks consumers (from the Consumer class we created)
  constructor(io: object, consumers: object[] = []) {
    this.io = io;
    this.consumers = consumers;
  }

  // adds a KafkaSocks Consumer to the consumers array property
  add(consumer: object) {
    // instantiate the Kakfa Consumer using the Kafa-provided class
    // add that consumer to our array
    this.consumers.push(consumer);
  }

  // opening the io server
  // invoke the running of the sockets corresponding to the varoius consumers in our consumers array
  connect() {
  //   this.io.on("connection", (socket: object) => {
  //     // we need the socket to be listening to the event here
  //     // there is no socket.on('this.event')

  //     this.consumers.forEach((consumer: object) => {
  //       consumer.run(this.io);
  //     });
  //   });
  }
}
