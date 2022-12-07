const express = require('express');

var driverController = require('../controllers/driverController')

const router = express.Router();


//driver login
router.get('/driverlogin',driverController.driverLogin);

//getting login credentials
router.post('/driverlogin', driverController.driverLoginPost)

//driver registration page

router.get('/driverregister', driverController.driverRegistration);


router.get('/driverDetails',driverController.driverDetails)
router.get('/editdriver/:driver_id',driverController.editDriver)
router.get('/addNewDriver',driverController.addDriver);



//saving driver details

router.post('/addNewDriver',driverController.saveDriver);


//saving edited details

router.post('/editdriver/:driver_id', driverController.saveEditedDetails);

//deleting driver

router.get('/deletedriver/:driver_id',driverController.deleteDriver);


module.exports = router;