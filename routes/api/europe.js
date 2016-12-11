const router = require('express').Router();

const { getAllEurpeanCountries } =  require('../../model/europe.js');

const sendSJONrep = (req, res) => res.json(res.europe || []);

router.route('/')
      .get(getAllEurpeanCountries, sendSJONrep);


module.exports = router;
