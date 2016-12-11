const router = require('express').Router();

const { getAllEastAndSoutheastAsia } =  require('../../model/east-n-southeast-asia.js');

const sendSJONrep = (req, res) => res.json(res.eastAndSoutheastAsia || []);

router.route('/')
      .get(getAllEastAndSoutheastAsia, sendSJONrep);


module.exports = router;
