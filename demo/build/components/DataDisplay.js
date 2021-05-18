"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_chartjs_2_1 = require("react-chartjs-2");
require("chartjs-adapter-luxon");
require("chartjs-plugin-streaming");
require("./App.css");
const DataDisplay = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_chartjs_2_1.Line, { data: {
                datasets: [
                    {
                        label: "Dataset 1",
                        borderColor: "rgb(255, 99, 132)",
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        borderDash: [8, 4],
                    },
                    {
                        label: "Dataset 2",
                        borderColor: "rgb(54, 162, 235)",
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        cubicInterpolationMode: "monotone",
                    },
                ],
            }, options: {
                scales: {
                    x: {
                        realtime: {
                            onRefresh: function (chart) {
                                chart.data.datasets.forEach(function (dataset) {
                                    dataset.data.push({
                                        x: Date.now(),
                                        y: Math.random(),
                                    });
                                });
                            },
                            delay: 2000,
                        },
                    },
                },
            } })));
};
exports.default = DataDisplay;
//# sourceMappingURL=DataDisplay.js.map