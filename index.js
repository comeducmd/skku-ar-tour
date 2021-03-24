const express = require('./config/express');
const { logger } = require('./config/winston');
require('dotenv').config();

const port = process.env.PORT;

console.log('포트', port);
express().listen(port);
logger.info(`Server Start At Port ${port}`);