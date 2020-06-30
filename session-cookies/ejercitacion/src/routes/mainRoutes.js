const express = require('express')
const app = require('../app')
const router = express.Router()
const mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.root)

router.get('/more', mainControllers.more)

module.exports = router