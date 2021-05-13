import express from 'express';
import path = require('path');
import dotenv = require('dotenv');

// import path from 'path';
// import dotenv from 'dotenv';


const app = express();

app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../client/index.html')));


/* Global Error Handler */
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
  
  export default app;