var express = require('express');
var router = express.Router();

const apiGenresController = require('../../controllers/api/apiGenresController')


router.get('/', apiGenresController.list)

// router.get('/add', apiGenresController.add)
// router.post('/add', apiGenresController.create)

// router.get('/:id', apiGenresController.detail)

// router.get('/:id/form', apiGenresController.edit)
// router.put('/:id', apiGenresController.update)

// router.delete('/:id', apiGenresController.delete)

// router.get('/search', apiGenresController.search)

module.exports = router
