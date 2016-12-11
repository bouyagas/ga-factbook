const router = require('express').Router();

const { getAllAntarticticaCountries } = require('../../model/antarctica.js');

const sendSJONrep = (req, res) => res.json(res.antarctica || []);

router.route('/')
      .get(getAllAntarticticaCountries, sendSJONrep);


module.exports = router;
