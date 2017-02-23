var express = require('express')
var router = express.Router()
const ctrl = require('../controllers/user')
/* GET home page. */
router.post('/event', ctrl.create)

module.exports = router
