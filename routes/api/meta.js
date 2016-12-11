const router = require('express').Router();

const { getAllMetaCountries } = require('../../model/meta.js');

const sendSJONrep = (req, res) => res.json(res.meta || []);

router.route('/')
      .get(getAllMetaCountries, sendSJONrep);


module.exports = router;
