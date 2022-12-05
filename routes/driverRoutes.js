const express = require('express');

var driverController = require('../controllers/driverController')

const router = express.Router();
router.get('/driverDetails',driverController.driverDetails)

module.exports = router;