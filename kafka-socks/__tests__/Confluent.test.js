"use strict";
// test confluent object shape:
// key property
// sercret property
// server property
exports.__esModule = true;
var Confluent_1 = require("../Confluent");
var Kafka = require("kafkajs").Kafka;
var Consumer = require("../Consumer");
require("dotenv").config();
// type ConfluentType = {
//   create: Function;
// };
// test consumer object shape:
// consumer property:  is a ks consumer object
// topic property: is a string
// event property:  is a string
describe("Consumer Class", function () {
    var API_KEY = "PS5UR5WJMR3M4IUK";
    var API_SECRET = "sViLnhxYPSZzirnBznMVHxRoQbvltcpmOJjlvnuv0f+SW138XyA1ZmO/kp7K87sg";
    var KAFKA_BOOTSTRAP_SERVER = "pkc-lzvrd.us-west4.gcp.confluent.cloud:9092";
    var confluent;
    beforeAll(function () {
        confluent = new Confluent_1["default"](API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER);
    });
    describe("Test class properties", function () {
        it("should have the same consumer property as input", function () {
            expect(confluent.key).toBe(API_KEY);
        });
        it("should have a topic property equal to input string", function () {
            expect(confluent.secret).toBe(API_SECRET);
        });
        it("should have an event property equal to input string", function () {
            expect(confluent.server).toBe(KAFKA_BOOTSTRAP_SERVER);
        });
    });
    describe("Test create() method", function () {
        var kafka;
        beforeAll(function () { return (kafka = confluent.create("test-client")); });
        it("should return a kafkajs Kafka object", function () {
            // expect().toBe();
        });
        it("kafkajs object should have clientId of 'test-client'", function () {
            // expect().toBe();
        });
        it("kafkajs object should be connected to proper broker", function () {
            // expect().toBe();
        });
        it("connection should be to proper broker", function () {
            // expect().toBe();
        });
    });
});
