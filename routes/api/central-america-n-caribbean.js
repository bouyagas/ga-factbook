const router = require('express').Router();

const { getAllCentralAmericaAndCaribbeanCountries } = require('../../model/central-america-n-caribbean.js');

const sendSJONrep = (req, res) => res.json(res.centralAmericaAndCaribbean || [] );


router.route('/')
      .get(getAllCentralAmericaAndCaribbeanCountries, sendSJONrep);


module.exports = router;
