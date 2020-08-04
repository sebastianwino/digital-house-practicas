var express = require('express');
var router = express.Router();

const apiMoviesController = require('../../controllers/api/apiMoviesController')


router.get('/', apiMoviesController.list)

router.post('/', apiMoviesController.create)

router.get('/:id', apiMoviesController.detail)

router.put('/:id', apiMoviesController.update)

router.delete('/:id', apiMoviesController.delete)

module.exports = router
