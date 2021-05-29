require('dotenv').config();
const { Kafka } = require('kafkajs');
// const Consumer = require('../Consumer');
// import { Kafka } from 'kafkajs';
import Consumer from '../Consumer';

// test consumer object shape:
// consumer property:  is a ks consumer object
// topic property: is a string
// event property:  is a string
describe('Consumer Class', () => {
  let ksConsumer: { consumer: object, topic: string, event: string };

  beforeAll(() => {
    const API_KEY = 'PS5UR5WJMR3M4IUK';
    const API_SECRET = 'sViLnhxYPSZzirnBznMVHxRoQbvltcpmOJjlvnuv0f+SW138XyA1ZmO/kp7K87sg';
    const KAFKA_BOOTSTRAP_SERVER = 'pkc-lzvrd.us-west4.gcp.confluent.cloud:9092';
    const sasl =
      API_KEY && API_SECRET
        ? { username: API_KEY, password: API_SECRET, mechanism: 'plain' }
        : null;
    const ssl = !!sasl;

    const kafka = new Kafka({
      clientId: 'client-id',
      brokers: [KAFKA_BOOTSTRAP_SERVER],
      ssl,
      sasl,
    });

    ksConsumer = new Consumer(kafka.consumer(), 'test-topic', 'test-event');
  });

  describe('Test class properties', () => {
    it('should have the same consumer property as input', () => {
      expect(ksConsumer.consumer).toBe(ksConsumer);
    });

    it('should have a topic property equal to input string', () => {
      expect(ksConsumer.topic).toBe('test-topic');
    });

    it('should have an event property equal to input string', () => {
      expect(ksConsumer.event).toBe('test-event');
    });
  });

  // how to test the run() function???
});

// run method:  how do we test this?? async....
