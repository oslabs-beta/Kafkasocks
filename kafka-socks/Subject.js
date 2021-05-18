"use strict";
//TBD: bring the functionality of the Consumer class into Subject?
exports.__esModule = true;
var Subject = /** @class */ (function () {
    // io is socket server instance
    // consumerArr is an array of KafkaSocks consumerArr (from the Consumer class we created)
    function Subject(io, namespace, consumerArr) {
        if (consumerArr === void 0) { consumerArr = []; }
        this.io = io;
        this.namespace = this.io.of("/" + namespace);
        this.consumerArr = consumerArr;
    }
    // adds a KafkaSocks Consumer to the consumerArr array property
    Subject.prototype.add = function (consumer) {
        // instantiate the Kakfa Consumer using the Kafa-provided class
        // add that consumer to our array
        this.consumerArr.push(consumer);
    };
    // opening the io server
    // invoke the running of the sockets corresponding to the varoius consumerArr in our consumerArr array
    Subject.prototype.connect = function () {
        // this.io.on('connection', (socket: object) => {
        //   // we need the socket to be listening to the event here
        //   // there is no socket.on('this.event')
        //   this.consumerArr.forEach((consumer: ConsumerInterface) => {
        //   consumer.run(this.io);
        //   });
        // });
        var _this = this;
        this.namespace.on('connection', function (socket) {
            // we need the socket to be listening to the event here
            // there is no socket.on('this.event')
            _this.consumerArr.forEach(function (consumer) {
                consumer.run(_this.namespace);
            });
        });
    };
    return Subject;
}());
exports["default"] = Subject;
