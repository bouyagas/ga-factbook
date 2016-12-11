const router = require('express').Router();

const { getAllMiddlleEastCountries } = require('../../model/middle-east.js');

const sendSJONrep = (req, res) => res.json(res.middleEast || []);

router.route('/')
      .get(getAllMiddlleEastCountries, sendSJONrep);


module.exports = router;
