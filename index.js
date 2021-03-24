const express = require('./config/express');
const { logger } = require('./config/winston');

const port = 4243;
express().listen(port);
logger.info(`Server Start At Port ${port}`);