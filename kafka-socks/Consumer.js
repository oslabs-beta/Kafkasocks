"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Kafka } = require('kafkajs');
class Consumer {
    // consumer is a Kafka consumer object
    // topic is the Kafka object's topic
    // event is the socket.io event on which the kafka message is being passed
    constructor(consumer, topic, event) {
        this.consumer = consumer; //
        this.topic = topic;
        this.event = event;
        console.log('constructing Consumer()');
    }
    // instantiate the Kafka consumer on the passed topic and subscribe with that consumer
<<<<<<< HEAD
    async run(namespace) {
        console.log('consumer is about to run');
        await this.consumer.connect();
        console.log('consumer has connected');
        await this.consumer.subscribe({
            topic: this.topic,
            fromBeginning: true,
        });
        console.log('consumer has subscribed to topic: ', this.topic);
        await this.consumer.run({
            eachMessage: async (eventInfo) => {
                namespace.emit(this.event, eventInfo.message.value.toString());
                console.log("received Message from kafka", JSON.parse(eventInfo.message.value.toString()));
            },
=======
    Consumer.prototype.run = function (namespace) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('consumer is about to run');
                        return [4 /*yield*/, this.consumer.connect()];
                    case 1:
                        _a.sent();
                        console.log('consumer has connected');
                        return [4 /*yield*/, this.consumer.subscribe({
                                topic: this.topic,
                                fromBeginning: true
                            })];
                    case 2:
                        _a.sent();
                        console.log('consumer has subscribed to topic: ', this.topic);
                        return [4 /*yield*/, this.consumer.run({
                                eachMessage: function (eventInfo) {
                                    namespace.emit(_this.event, eventInfo.message.value.toString());
                                    console.log("received Message from kafka", JSON.parse(eventInfo.message.value.toString()));
                                }
                            })];
                    case 3:
                        _a.sent();
                        // namespace.on('pause', () => {
                        //   console.log('disconnected...')
                        //   // this.consumer.pause(/** */)
                        // });
                        console.log('consumer has run');
                        return [2 /*return*/];
                }
            });
>>>>>>> 585729e33ad014c5446db555392d44ce435f94ed
        });
        // namespace.on('pause', () => {
        //   console.log('disconnected...')
        //   // this.consumer.pause(/** */)
        // });
        console.log('consumer has run');
    }
}
exports.default = Consumer;
