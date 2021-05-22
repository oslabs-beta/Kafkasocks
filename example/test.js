"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Consumer_1 = __importDefault(require("../kafka-socks/Consumer"));
const Confluent_1 = __importDefault(require("../kafka-socks/Confluent"));
const Subject_1 = __importDefault(require("../kafka-socks/Subject"));
console.log('hi');
console.log(Consumer_1.default);
console.log(Confluent_1.default);
console.log(Subject_1.default);
