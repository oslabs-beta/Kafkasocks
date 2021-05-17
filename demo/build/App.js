"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const Button_1 = __importDefault(require("@material-ui/core/Button"));
function App() {
    return (react_1.default.createElement(Button_1.default, { variant: 'contained', color: 'primary' }, "Hello World, it's Kafkasocks!"));
}
react_dom_1.default.render(react_1.default.createElement(App, null), document.querySelector('#app'));
exports.default = App;
//# sourceMappingURL=App.js.map