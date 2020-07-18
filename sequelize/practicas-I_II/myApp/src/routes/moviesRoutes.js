var express = require('express');
var router = express.Router();

const moviesControllers = require('../controllers/moviesControllers')

const moviesValidation = require('../validations/moviesValidatios')



router.get('/', moviesControllers.list)

router.get('/add', moviesControllers.add)
router.post('/add', moviesValidation, moviesControllers.create)

router.get('/:id', moviesControllers.detail)

router.get('/:id/form', moviesControllers.edit)
router.put('/:id', moviesValidation, moviesControllers.update)

router.delete('/:id', moviesControllers.delete)

router.get('/search', moviesControllers.search)

module.exports = router
