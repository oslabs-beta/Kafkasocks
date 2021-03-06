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
exports.produce = void 0;
var kafka_1 = require("./kafka");
var fs = require('fs');
var trucks = [];
try {
    // read contents of the file
    var data = fs.readFileSync('truck_engine_sensors.json', 'UTF-8');
    // split the contents by new line
    var lines = data.split(/\r?\n/);
    // print all lines
    lines.pop();
    lines.forEach(function (line) {
        // trucks.push(JSON.parse(line))
        trucks.push(line);
    });
}
catch (err) {
    console.error(err);
}
// PRODUCER
var producer = kafka_1.kafka.producer();
var produce = function () { return __awaiter(void 0, void 0, void 0, function () {
    var idx, interval;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, producer.connect()];
            case 1:
                _a.sent();
                idx = 0;
                interval = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
                    var truck_num, responses, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (idx >= trucks.length - 1) {
                                    console.log('in interval inside produce');
                                    console.log(idx);
                                    clearInterval(interval);
                                }
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                truck_num = JSON.parse(trucks[idx])["truck_id"];
                                return [4 /*yield*/, producer.send({
                                        topic: "trucks-topic-" + truck_num,
                                        messages: [
                                            {
                                                key: String(idx),
                                                // value : String(trucks[idx].engine_temperature)
                                                value: String(trucks[idx])
                                            }
                                        ]
                                    })];
                            case 2:
                                responses = _a.sent();
                                console.log("Published message ", trucks[idx]);
                                // console.log('Published message, engine_temperature', trucks[idx].engine_temperature )
                                idx++;
                                return [3 /*break*/, 4];
                            case 3:
                                err_1 = _a.sent();
                                console.log("Error with producing: ", err_1);
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }, 1000);
                return [2 /*return*/];
        }
    });
}); };
exports.produce = produce;
