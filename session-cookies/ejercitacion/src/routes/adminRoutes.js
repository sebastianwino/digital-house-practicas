const express = require('express')
const app = require('../app')
const router = express.Router()
const adminControllers = require('../controllers/adminControllers')
const adminUser = require('../middlewares/admin-user')

router.get('/', adminUser,adminControllers.index)


module.exports = router