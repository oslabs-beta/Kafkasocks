// test confluent object shape:
// key property
// sercret property
// server property

import Confluent from "../Confluent";

const { Kafka } = require("kafkajs");
const Consumer = require("../Consumer");
require("dotenv").config();

// type ConfluentType = {
//   create: Function;
// };
// test consumer object shape:
// consumer property:  is a ks consumer object
// topic property: is a string
// event property:  is a string
describe("Consumer Class", () => {
  const API_KEY = "PS5UR5WJMR3M4IUK";
  const API_SECRET = `sViLnhxYPSZzirnBznMVHxRoQbvltcpmOJjlvnuv0f+SW138XyA1ZmO/kp7K87sg`;
  const KAFKA_BOOTSTRAP_SERVER = `pkc-lzvrd.us-west4.gcp.confluent.cloud:9092`;

  let confluent: {
    key: string,
    secret: string,
    server: string,
    create: Function
  };

  beforeAll(() => {
    confluent = new Confluent(API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER);
  });

  describe("Test class properties", () => {
    it("should have the same consumer property as input", () => {
      expect(confluent.key).toBe(API_KEY);
    });

    it("should have a topic property equal to input string", () => {
      expect(confluent.secret).toBe(API_SECRET);
    });

    it("should have an event property equal to input string", () => {
      expect(confluent.server).toBe(KAFKA_BOOTSTRAP_SERVER);
    });
  });

  describe("Test create() method", () => {
    let kafka;

    beforeAll(() => (kafka = confluent.create("test-client")));

    it("should return a kafkajs Kafka object", () => {
      // expect().toBe();
    });

    it("kafkajs object should have clientId of 'test-client'", () => {
      // expect().toBe();
    });

    it("kafkajs object should be connected to proper broker", () => {
      // expect().toBe();
    });

    it("connection should be to proper broker", () => {
      // expect().toBe();
    });
  });
});
