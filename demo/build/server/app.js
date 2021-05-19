"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: 'An error occurred',
    };
    const error = {
        ...defaultErr,
        ...err,
    };
    return res.status(error.status).json(error.message);
});
exports.default = app;
//# sourceMappingURL=app.js.map