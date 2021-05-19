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
    }
    // instantiate the Kafka consumer on the passed topic and subscribe with that consumer
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
        });
        // namespace.on('pause', () => {
        //   console.log('disconnected...')
        //   // this.consumer.pause(/** */)
        // });
        console.log('consumer has run');
    }
}
exports.default = Consumer;
