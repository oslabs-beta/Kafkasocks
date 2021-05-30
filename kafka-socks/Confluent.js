"use strict";
exports.__esModule = true;
exports.Confluent = void 0;
var Kafka = require("kafkajs").Kafka;
// Confluent class instantiates the connection Confluent Kafka cluster
var Confluent = /** @class */ (function () {
    // key is the Confluent cloud API key
    // secret is the Confluent Cloud API secret
    // server is the Confluent Cloud URI to connect to the bootstrap server
    function Confluent(key, secret, server) {
        this.key = key;
        this.secret = secret;
        this.server = server;
    }
    // create will return a Kafka Consumer object
    Confluent.prototype.create = function (client) {
        var sasl = this.key && this.secret
            ? { username: this.key, password: this.secret, mechanism: "plain" }
            : null;
        var ssl = !!sasl;
        return new Kafka({
            clientId: client,
            brokers: [this.server],
            ssl: ssl,
            sasl: sasl
        });
    };
    return Confluent;
}());
exports.Confluent = Confluent;
exports["default"] = Confluent;
