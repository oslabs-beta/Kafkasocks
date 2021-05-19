"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafka_1 = require("./kafka");
const topic = process.env.TOPIC;
const admin = kafka_1.kafka.admin();
const main = async () => {
    await admin.connect();
    await admin.createTopics({
        topics: [{ topic, replicationFactor: 3 }],
        waitForLeaders: true,
    });
};
main().catch(error => {
    console.error(error);
    process.exit(1);
});
