"use strict";
exports.__esModule = true;
var producer_1 = require("./producer");
producer_1.produce()["catch"](function (error) {
    console.log(error);
    process.exit(1);
});
