const router = require('express').Router();

const { getAllNorthAmericaCountries } = require('../../model/north-america.js');

const sendSJONrep = (req, res) => res.json(res.northAmerica || []);

router.route('/')
      .get(getAllNorthAmericaCountries, sendSJONrep);


module.exports = router;
