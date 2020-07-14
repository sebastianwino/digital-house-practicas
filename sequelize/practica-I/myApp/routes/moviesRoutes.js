var express = require('express');
var router = express.Router();

const moviesControllers = require('../controllers/moviesControllers')

router.get('/', moviesControllers.list)

router.get('/drama', moviesControllers.drama)

router.get('/totalTime', moviesControllers.totalTime)

router.get('/detail/:id', moviesControllers.detail)

router.get('/new', moviesControllers.new)

router.get('/recommended', moviesControllers.recommended)

router.post('/search', moviesControllers.search)

router.delete('/delete/:id', moviesControllers.delete)





module.exports = router
