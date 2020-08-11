var express = require('express');
var router = express.Router();

const userController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', userController.register)

router.post('/register', userController.create)

module.exports = router;
