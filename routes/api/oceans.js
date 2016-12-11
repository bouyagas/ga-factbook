const router = require('express').Router();

const { getAllOceansCountries } = require('../../model/oceans.js');

const sendSJONrep = (req, res) => res.json(res.oceans || []);

router.route('/')
      .get(getAllOceansCountries, sendSJONrep);


module.exports = router;
