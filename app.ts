import express from 'express';
import cors from 'cors';
const middleware = require('./utils/middleware');

const app = express();

app.use(cors());
app.use(express.static('./client/build'));
app.use(express.json());
app.use(middleware.requestLogger);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;