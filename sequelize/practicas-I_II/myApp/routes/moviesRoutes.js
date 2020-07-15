var express = require('express');
var router = express.Router();

const moviesControllers = require('../controllers/moviesControllers')

router.get('/', moviesControllers.list)

router.get('/drama', moviesControllers.drama)

router.get('/totalTime', moviesControllers.totalTime)

router.get('/detail/:id', moviesControllers.detail)

router.get('/new', moviesControllers.new)

router.get('/recommended', moviesControllers.recommended)

router.get('/search', moviesControllers.search)

router.get('/add', moviesControllers.add)
router.post('/add', moviesControllers.create)

router.get('/edit/:id', moviesControllers.edit)
router.post('/edit/:id', moviesControllers.update)

router.post('/delete/:id', moviesControllers.delete)


module.exports = router
