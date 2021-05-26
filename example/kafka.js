"use strict";
exports.__esModule = true;
exports.kafka = void 0;
var Confluent_1 = require("../kafka-socks/Confluent");
require('dotenv').config();
var _a = process.env, API_KEY = _a.API_KEY, API_SECRET = _a.API_SECRET, KAFKA_BOOTSTRAP_SERVER = _a.KAFKA_BOOTSTRAP_SERVER;
var broker = new Confluent_1["default"](API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER);
var kafka = broker.create('new-client');
exports.kafka = kafka;
