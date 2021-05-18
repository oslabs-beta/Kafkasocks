"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const recharts_1 = require("recharts");
const socket = socket_io_client_1.default('http://localhost:3333', {
    transports: ['websocket', 'polling']
});
const DataDisplay = (props) => {
    const [data, setData] = react_1.useState([]);
    react_1.useEffect(() => {
        socket.on('cpu', cpuPercent => {
            setData(currentData => [...currentData, cpuPercent]);
        });
    }, []);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Real Time CPU Usage"),
        react_1.default.createElement(recharts_1.LineChart, { width: 500, height: 300, data: data },
            react_1.default.createElement(recharts_1.XAxis, { dataKey: "name" }),
            react_1.default.createElement(recharts_1.YAxis, null),
            react_1.default.createElement(recharts_1.Line, { dataKey: "value" }))));
};
exports.default = DataDisplay;
//# sourceMappingURL=DataDisplay.js.map