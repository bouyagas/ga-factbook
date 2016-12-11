const router = require('express').Router();

const { world } = require('../../model/world.js');

const sendSJONrep = (req, res) => res.json(res.world || []);

router.route('/')
      .get(world, sendSJONrep);


module.exports = router;
