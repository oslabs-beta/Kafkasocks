class Subject {
  io: object;
  consumers: object[];

  constructor(io: object, consumers: object[] = []) {
    this.io = io;
    this.consumers = consumers;
  }

  add(consumer: object) {
    this.consumers.push(consumer);
  }

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
