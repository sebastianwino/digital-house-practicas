var express = require('express');
var router = express.Router();

const apiActorsController = require('../../controllers/api/apiActorsController')


router.get('/', apiActorsController.list)

// router.get('/add', apiActorsController.add)
// router.post('/add', apiActorsController.create)

// router.get('/:id', apiActorsController.detail)

// router.get('/:id/form', apiActorsController.edit)
// router.put('/:id', apiActorsController.update)

// router.delete('/:id', apiActorsController.delete)

// router.get('/search', apiActorsController.search)

module.exports = router
