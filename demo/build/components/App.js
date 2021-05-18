"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DataDisplay_1 = __importDefault(require("./DataDisplay"));
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(DataDisplay_1.default, null)));
};
exports.default = App;
//# sourceMappingURL=App.js.map