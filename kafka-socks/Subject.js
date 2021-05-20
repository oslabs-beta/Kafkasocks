"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// interface ioInterface {
//   on: Function;
// }
// interface ConsumerInterface {
//   run: Function;
//   pause: Function;
// }
class Subject {
    // io is socket server instance
    // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)
    constructor(io, namespace, consumerArr = []) {
        this.io = io;
        this.namespace = this.io.of("/" + namespace);
        this.consumerArr = consumerArr;
        console.log("subject made");
    }
    // adds a KafkaSocks Consumer to the consumerArr array property
    add(consumer) {
        // instantiate the Kakfa Consumer using the Kafa-provided class + add that consumer to our array
        console.log("in Subject.add");
        this.consumerArr.push(consumer);
    }
    // opening the io server
    // invoke the running of the sockets corresponding to the varoius consumerArr in our consumerArr array
<<<<<<< HEAD
    connect() {
        this.namespace.on('connection', (socket) => {
=======
    Subject.prototype.connect = function () {
        var _this = this;
        console.log("in Subject.connect()");
        this.namespace.on("connection", function (socket) {
>>>>>>> 585729e33ad014c5446db555392d44ce435f94ed
            // we need the socket to be listening to the event here
            // there is no socket.on('this.event')
            // socket.on('disconnect', consumer => {
            //   consumer.
            // });
<<<<<<< HEAD
            this.consumerArr.forEach((consumer) => {
                consumer.run(this.namespace);
=======
            console.log("in namespace.on cb");
            _this.consumerArr.forEach(function (consumer) {
                consumer.run(_this.namespace);
                socket.on('disconnect', function () {
                    console.log('disconnecting');
                    consumer.close().then(function () { return console.log('disconnected'); });
                });
>>>>>>> 585729e33ad014c5446db555392d44ce435f94ed
            });
        });
    }
}
exports.default = Subject;
