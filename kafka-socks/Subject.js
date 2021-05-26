"use strict";
exports.__esModule = true;
// interface ioInterface {
//   on: Function;
// }
// interface ConsumerInterface {
//   run: Function;
//   pause: Function;
// }
var Subject = /** @class */ (function () {
    // io is socket server instance
    // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)
    function Subject(io, namespace, consumerArr) {
        if (consumerArr === void 0) { consumerArr = []; }
        this.io = io;
        this.namespace = this.io.of("/" + namespace);
        this.consumerArr = consumerArr;
        console.log("subject made");
    }
    // adds a KafkaSocks Consumer to the consumerArr array property
    Subject.prototype.add = function (consumer) {
        // instantiate the Kakfa Consumer using the Kafa-provided class + add that consumer to our array
        console.log("in Subject.add");
        this.consumerArr.push(consumer);
    };
    // opening the io server
    // invoke the running of the sockets corresponding to the varoius consumerArr in our consumerArr array
    Subject.prototype.connect = function () {
        var _this = this;
        console.log("in Subject.connect()");
        this.namespace.on("connection", function (socket) {
            console.log('in the namespace connection');
            // we need the socket to be listening to the event here
            // there is no socket.on('this.event')
            // socket.on('disconnect', consumer => {
            //   consumer.
            // });
            console.log("in namespace.on cb");
            _this.consumerArr.forEach(function (consumer) {
                consumer.run(_this.namespace);
                // socket.on('disconnect', () => {
                //   console.log('disconnecting');
                //   consumer.disconnect().then(() => console.log('disconnected'));
                // });
            });
        });
    };
    return Subject;
}());
exports["default"] = Subject;
