const router = require('express').Router();

const {  getAllcentralAsia } =  require('../../model/central-asia.js');

const sendSJONrep = (req, res) => res.json(res.centralAsia || []);

router.route('/')
      .get(getAllcentralAsia, sendSJONrep);


module.exports = router;
