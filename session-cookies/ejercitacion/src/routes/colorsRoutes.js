const express = require('express')
const app = require('../app')
const router = express.Router()
const colorsControllers = require('../controllers/colorsControllers')
const saveColorMiddleware = require('../middlewares/saveColorMiddleware')


router.get('/', saveColorMiddleware, colorsControllers.setColor)


module.exports = router