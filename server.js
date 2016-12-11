'use strict';

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const AfricaRoute = require('./routes/api/africa.js');
const AntarcticaRoute = require('./routes/api/antarctica.js');
const AustraliaOceaniaRoute = require('./routes/api/australia-oceania.js');
const CentralAmericaAndCaribbeanRoute = require('./routes/api/central-america-n-caribbean.js');
const CentralAsia = require('./routes/api/central-asia.js');
const EastAndSouthEastAsiaRoute = require('./routes/api/east-n-southeast-asia.js');
const EuropeRoute = require('./routes/api/europe.js');
const MetaRoute = require('./routes/api/meta.js');
const MiddleEastRoute = require('./routes/api/middle-east.js');
const NorthAmericaRoute = require('./routes/api/north-america.js');
const OceansRoute = require('./routes/api/oceans.js');
const SouthAmericaRoute = require('./routes/api/south-america.js');
const SouthAsiaRoute = require('./routes/api/south-asia.js');
const WorldRoute = require('./routes/api/world.js');

const server = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

server.use(logger('dev'));

server.use(express.static(path.join(__dirname, 'dist')));

server.use(bodyParser.json());

server.use('/api/africa', AfricaRoute);

server.use('/api/antarctica', AntarcticaRoute);

server.use('/api/australiaOceania', AustraliaOceaniaRoute);

server.use('/api/centralAmericaAndCaribbean', CentralAmericaAndCaribbeanRoute);

server.use('/api/centralAsia', CentralAsia);

server.use('/api/eastAndSoutheastAsia', EastAndSouthEastAsiaRoute);

server.use('/api/europe', EuropeRoute);

server.use('/api/meta', MetaRoute);

server.use('/api/middleEast', MiddleEastRoute);

server.use('/api/northAmerica', NorthAmericaRoute);

server.use('/api/oceans', OceansRoute);

server.use('/api/southAmerica', SouthAmericaRoute);

server.use('./api/southAsia', SouthAsiaRoute);

server.use('./api/world', WorldRoute);

server.listen(PORT, () => console.log('server here! listening on', PORT));



