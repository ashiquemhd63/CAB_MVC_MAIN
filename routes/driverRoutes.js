const express = require('express');

var driverController = require('../controllers/driverController')

const router = express.Router();
router.get('/driverDetails',driverController.driverDetails)
router.get('/editdriver/:driver_id',driverController.editDriver)
router.get('/addNewDriver',driverController.addDriver);



//saving driver details

router.post('/addNewDriver',driverController.saveDriver);


//saving edited details

router.post('/editdriver/:driver_id', driverController.saveEditedDetails)
module.exports = router;