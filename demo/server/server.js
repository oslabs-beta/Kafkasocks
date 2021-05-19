"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
// const app = require('./app');
require("dotenv").config();
var server = require("http").createServer();
var os = require("os-utils");
// const Kafka = require("kafkajs");
// const Confluent = require('../../kafka-socks/Confluent');
var Confluent_1 = require("./../../kafka-socks/Confluent");
console.log(Confluent_1["default"]);
var io = require("socket.io")(server, {
    transports: ["websocket", "polling"]
});
// build out the producer
// instantiate our library
// use the kafkasocks object to consume from producer
// and send to front end
//////////////////////////////////////////* Starting Producer Logic */////////////////////////////
console.log('testing the producer is a pain in the butt');
var _a = process.env, API_KEY = _a.API_KEY, API_SECRET = _a.API_SECRET, KAFKA_BOOTSTRAP_SERVER = _a.KAFKA_BOOTSTRAP_SERVER, TOPIC = _a.TOPIC;
var kafka = (new Confluent_1["default"](API_KEY, API_SECRET, KAFKA_BOOTSTRAP_SERVER)).create('Kafkasocks_downloads');
var idx = 0;
// produer
// every second, produce a random # between 0 and 9
var produce = function (kafka) { return __awaiter(void 0, void 0, void 0, function () {
    var producer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('starting the producer connection');
                producer = kafka.producer();
                return [4 /*yield*/, producer.connect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, producer.send({
                        topic: TOPIC,
                        messages: [
                            {
                                key: String(idx),
                                value: Math.floor(Math.random() * 9).toString()
                            }
                        ]
                    })];
            case 2:
                _a.sent();
                idx++;
                return [2 /*return*/];
        }
    });
}); };
produce(kafka);
///////////////////////////////////////////////////////////////////////////////////////////////////
var tick = 0;
// 1. listen for socket connections
io.on("connection", function (client) {
    setInterval(function () {
        // 2. every second, emit a 'cpu' event to user
        os.cpuUsage(function (cpuPercent) {
            client.emit("cpu", {
                name: tick++,
                value: cpuPercent
            });
        });
    }, 1000);
});
// // 1. listen for socket connections
//   io.on('connection', client => {
//     setInterval(() => {
//       // 2. every second, emit a 'cpu' event to user
//       os.cpuUsage(cpuPercent => {
//         client.emit('cpu', {
//           name: tick++,
//           value: cpuPercent
//         });  
//       });
//     }, 1000);
//   });
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });
server.listen(3333);
