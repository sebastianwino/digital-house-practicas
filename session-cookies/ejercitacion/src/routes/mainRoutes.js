const express = require('express')
const app = require('../app')
const router = express.Router()
const mainControllers = require('../controllers/mainControllers')
const saveColorMiddleware = require('../middlewares/saveColorMiddleware')

router.get('/', saveColorMiddleware, mainControllers.root)

router.get('/more', saveColorMiddleware, mainControllers.more)

module.exports = router