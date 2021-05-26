"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const producer_1 = require("./producer");
producer_1.produce().catch((error) => {
    console.log(error);
    process.exit(1);
});
