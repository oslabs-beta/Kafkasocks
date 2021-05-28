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
var Kafka = require("kafkajs").Kafka;
var Consumer = /** @class */ (function () {
    // consumer is a Kafka consumer object
    // topic is the Kafka object's topic
    // event is the socket.io event on which the kafka message is being passed
    function Consumer(consumer, topic, event, pause, resume, isConsuming) {
        if (pause === void 0) { pause = false; }
        if (resume === void 0) { resume = false; }
        if (isConsuming === void 0) { isConsuming = false; }
        this.consumer = consumer; //
        this.topic = topic;
        this.event = event;
        this.pause = pause;
        this.resume = resume;
        this.isConsuming = isConsuming;
    }
    Consumer.prototype.pauser = function () {
        console.log('in pauser method');
        this.pause = true;
    };
    Consumer.prototype.resumer = function (namespace) {
        console.log('in resume method');
        // this.pause = false;
        this.resume = true;
        this.consumer.resume([{ topic: this.topic }]);
        // this.runAfterResume(namespace);
        console.log('this.pause should be false here inside resumer(): ', this.pause);
        console.log('this.resume should be true for here inside resumer(): ', this.resume);
    };
    // instantiate the Kafka consumer on the passed topic and subscribe with that consumer
    Consumer.prototype.runAfterResume = function (namespace) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.consumer.run({
                            eachMessage: function (eventInfo) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    //listening for a pause event
                                    if (this.pause) {
                                        this.consumer.pause([{ topic: this.topic }]);
                                        //setTimeout(() => this.consumer.resume([{topic: this.topic}]), 10000)
                                    }
                                    // else if(this.resume) {
                                    //   console.log('in Consumer.ts after resume is set to true :', this.resume)
                                    //   this.consumer.resume([{topic: this.topic}]);
                                    //   this.resume = false;
                                    // }
                                    namespace.emit(this.event, eventInfo.message.value.toString());
                                    console.log("received Message from kafka", JSON.parse(eventInfo.message.value.toString()));
                                    return [2 /*return*/];
                                });
                            }); }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Consumer.prototype.run = function (namespace) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('seeing if we need to compile');
                        console.log("consumer is about to run");
                        return [4 /*yield*/, this.consumer.connect()];
                    case 1:
                        _a.sent();
                        console.log("consumer has connected");
                        return [4 /*yield*/, this.consumer.subscribe({
                                topic: this.topic,
                                fromBeginning: true
                            })];
                    case 2:
                        _a.sent();
                        console.log("consumer has subscribed to topic: ", this.topic);
                        this.isConsuming = true;
                        return [4 /*yield*/, this.consumer.run({
                                eachMessage: function (eventInfo) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        //listening for a pause event
                                        if (this.pause) {
                                            if (this.resume) {
                                                console.log('inside nested resume in if(this.pause)');
                                                console.log('this.resume: ', this.resume);
                                            }
                                            else {
                                                this.consumer.pause([{ topic: this.topic }]);
                                            }
                                            //setTimeout(() => this.consumer.resume([{topic: this.topic}]), 10000)
                                        }
                                        // else if(this.resume) {
                                        //   console.log('in Consumer.ts after resume is set to true :', this.resume)
                                        //   this.consumer.resume([{topic: this.topic}]);
                                        //   this.resume = false;
                                        // }
                                        namespace.emit(this.event, eventInfo.message.value.toString());
                                        console.log("received Message from kafka", JSON.parse(eventInfo.message.value.toString()));
                                        return [2 /*return*/];
                                    });
                                }); }
                            })];
                    case 3:
                        _a.sent();
                        // namespace.on('pause', () => {
                        //   console.log('disconnected...')
                        //   // this.consumer.pause(/** */)
                        // });
                        console.log("consumer has run");
                        return [2 /*return*/];
                }
            });
        });
    };
    return Consumer;
}());
exports["default"] = Consumer;
