const express = require('express')
const app = require('../app')
const router = express.Router()
const colorsControllers = require('../controllers/colorsControllers')

router.get('/', colorsControllers.colors)


module.exports = router