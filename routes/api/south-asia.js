const router = require('express').Router();

const { getAllSouthAsiaCountries } = require('../../model/south-asia.js');

const sendSJONrep = (req, res) => res.json(res.southAsia || []);

router.route('/')
      .get(getAllSouthAsiaCountries, sendSJONrep);

module.exports = router;
