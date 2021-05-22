"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
const Confluent_1 = __importDefault(require("../kafka-socks/Confluent"));
require('dotenv').config();
const { API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER } = process.env;
const broker = new Confluent_1.default(API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER);
const kafka = broker.create('new-client');
exports.kafka = kafka;
