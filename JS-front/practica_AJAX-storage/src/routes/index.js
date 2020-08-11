var express = require('express');
var router = express.Router();
const indexControllers = require('../controllers/indexControllers')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/random', indexControllers.random);

router.get('/trending', indexControllers.trending);

module.exports = router;
