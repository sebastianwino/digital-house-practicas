var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController')


router.get('/', moviesController.list)

router.get('/add', moviesController.add)
router.post('/add', moviesController.create)

router.get('/:id', moviesController.detail)

router.get('/:id/form', moviesController.edit)
router.put('/:id', moviesController.update)

router.delete('/:id', moviesController.delete)

router.get('/search', moviesController.search)

module.exports = router
