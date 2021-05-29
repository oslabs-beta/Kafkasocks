import Consumer from "./Consumer";

// interface ioInterface {
//   on: Function;
// }

// interface ConsumerInterface {
//   run: Function;
//   pause: Function;
// }

class Subject {
  io: any;
  namespace: any;
  consumerArr: any[];

  // io is socket server instance
  // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)
  constructor(io: any, namespace: string, consumerArr: any[] = []) {
    this.io = io;
    this.namespace = this.io.of("/" + namespace);
    this.consumerArr = consumerArr;
    console.log("subject made");
  }
  // adds a KafkaSocks Consumer to the consumerArr array property
  add(consumer: any) {
    // instantiate the Kakfa Consumer using the Kafa-provided class + add that consumer to our array
    console.log("in Subject.add");
    this.consumerArr.push(consumer);
  }
  pause() {
    this.consumerArr.forEach((consumer: any) => {
      consumer.pauser();

      // socket.on('disconnect', () => {
      //   console.log('disconnecting');
      //   consumer.disconnect().then(() => console.log('disconnected'));
      // });
    })
  }

  resume() {
    console.log('in resume inside Subject.ts')
    this.consumerArr.forEach((consumer: any) => {

      consumer.resumer(this.namespace);
    })
  }
  // opening the io server
  // invoke the running of the sockets corresponding to the varoius consumerArr in our consumerArr array
  connect() {
    console.log("in Subject.connect()");
    this.namespace.on("connection", (socket: any) => {
      console.log('in the namespace connection')
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
