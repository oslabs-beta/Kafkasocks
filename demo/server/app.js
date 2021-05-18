"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var express = require('express');
var path = require('path');
var dotenv = require('dotenv');
// import path from 'path';
// import dotenv from 'dotenv';
var app = express();
app.get('/', function (req, res) { return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')); });
/* Global Error Handler */
app.use(function (err, req, res, next) {
    var defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: 'An error occurred'
    };
    var error = __assign(__assign({}, defaultErr), err);
    return res.status(error.status).json(error.message);
});
exports["default"] = app;
