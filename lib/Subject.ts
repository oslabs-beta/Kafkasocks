//TBD: bring the functionality of the Consumer class into Subject?
const Consumer = require('./Consumer.ts');


interface ioInterface {
  on: Function;
}

interface ConsumerInterface {
  run: Function;
}

class Subject {
  io: ioInterface
  consumerArr: ConsumerInterface[];

  // io is socket server instance
  // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)
  constructor(io: ioInterface, consumerArr: ConsumerInterface[] = []) {
    this.io = io;
    this.consumerArr = consumerArr;
  }

  // adds a KafkaSocks Consumer to the consumerArr array property
  add(consumer: ConsumerInterface) {
    // instantiate the Kakfa Consumer using the Kafa-provided class
    // add that consumer to our array
    this.consumerArr.push(consumer);
  }

  // opening the io server
  // invoke the running of the sockets corresponding to the varoius consumerArr in our consumerArr array
  connect() {
    this.io.on("connection", (socket: object) => {
      // we need the socket to be listening to the event here
      // there is no socket.on('this.event')

      this.consumerArr.forEach((consumer: ConsumerInterface) => {
        consumer.run(this.io);
      });
    });
  }
}
