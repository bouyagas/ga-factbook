const router = require('express').Router();

const { getAllAustraliaOceaniaCountries } = require('../../model/australia-oceania.js');

const sendSJONrep = (req, res) => res.json(res.australiaOceania || []);

router.route('/')
      .get(getAllAustraliaOceaniaCountries, sendSJONrep);

module.exports = router;
