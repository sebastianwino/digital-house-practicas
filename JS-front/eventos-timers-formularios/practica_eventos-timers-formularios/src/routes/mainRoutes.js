var express = require('express');
var router = express.Router();

const mainControllers = require('../controllers/mainControllers')

/* GET home page. */
router.get('/', mainControllers.index);

router.get('/events', mainControllers.events);

module.exports = router;
