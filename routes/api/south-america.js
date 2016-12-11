const router = require('express').Router();

const { getAllSouthAmericaCountries } = require('../../model/south-america.js');

const sendSJONrep = (req, res) => res.json(res.southAmerica || []);

router.route('/')
      .get(getAllSouthAmericaCountries, sendSJONrep);


module.exports = router;
