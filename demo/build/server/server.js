require('dotenv').config();
const { Kafka } = require('kafkajs');
class KafkaClientFactory {
    constructor(brokers, apiKey, apiSecret, clientId) {
        console.log(brokers);
        this.kafka = this.start(brokers, apiKey, apiSecret, clientId);
    }
    async consume(topic, groupId) {
        const consumer = this.kafka.consumer({ groupId });
        await consumer.connect();
        await consumer.subscribe({ topic, fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ partition, message }) => {
                console.log({
                    topic,
                    partition,
                    offset: message.offset,
                    value: message.value.toString(),
                });
            },
        });
    }
    produce(topic, messages) {
        const producer = this.kafka.producer();
        producer.connect().then(() => {
            producer.send({ topic, messages });
        });
    }
    start(brokers, apiKey, apiSecret, clientId) {
        const sasl = API_KEY && API_SECRET
            ? { username: apiKey, password: apiSecret, mechanism: 'plain' }
            : null;
        const ssl = !!sasl;
        return new Kafka({
            clientId,
            brokers,
            ssl,
            sasl,
        });
    }
}
module.exports = KafkaClientFactory;
const { API_KEY, API_SECRET, KAFKA_SERVER_URL, TOPIC } = process.env;
const kafka = new KafkaClientFactory([KAFKA_SERVER_URL], API_KEY, API_SECRET, 'client-id');
setInterval(() => kafka.produce(TOPIC, [{ value: Math.floor(Math.random() * 9).toString() }]), 1000);
kafka.consume(TOPIC, 'truck-group');
//# sourceMappingURL=server.js.map