const router = require('express').Router();

const { getAllAfricanCountries } = require('../../model/africa.js');

const sendSJONrep = (req, res) => res.json(res.africa || []);

router.route('/')
      .get(getAllAfricanCountries, sendSJONrep);

module.exports = router;
