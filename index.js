const express = require('./config/express');
const { logger } = require('./config/winston');
require('dotenv').config();

const port = process.env.PORT;

express().listen(port);
logger.info(`Server Start At Port ${port}`);