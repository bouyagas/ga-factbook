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

server.use('/api/africa', require('./routes/api/africa.js'));

server.use('/api/antarctica', require('./routes/api/antarctica.js'));

server.use('/api/australiaOceania', require('./routes/api/australia-oceania.js'));

server.use('/api/centralAmericaAndCaribbean', require('./routes/api/central-america-n-caribbean.js'));

server.use('/api/centralAsia', require('./routes/api/central-asia.js'));

server.use('/api/eastAndSoutheastAsia', require('./routes/api/east-n-southeast-asia.js'));

server.use('/api/europe', require('./routes/api/europe.js'));

server.use('/api/meta', require('./routes/api/meta.js'));

server.use('/api/middleEast', require('./routes/api/middle-east.js'));

server.use('/api/northAmerica', require('./routes/api/north-america.js'));

server.use('/api/oceans', require('./routes/api/oceans.js'));

server.use('/api/southAmerica', require('./routes/api/south-america.js'));

server.use('/api/southAsia', require('./routes/api/south-asia.js'));

server.use('/api/world', require('./routes/api/world.js'));

server.listen(PORT, () => console.log('server here! listening on', PORT));



