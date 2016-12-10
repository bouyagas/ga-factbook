'use strict';

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

server.use(logger('dev'));

server.use(express.static(path.join(__dirname, 'dist')));

server.use(bodyParser.json());


server.listen(PORT, () => console.log('server here! listening on', PORT));


