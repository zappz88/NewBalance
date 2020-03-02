require('dotenv').config();

const express = require('express');
const app = express();

const compression = require('compression');
app.use(compression());

const helmet = require('helmet');
app.use(helmet());

const hostName = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + '/index'));
app.use(express.static(__dirname + '/men'));
app.use(express.static(__dirname + '/women'));

app.listen(port, hostName);

module.exports = app;
