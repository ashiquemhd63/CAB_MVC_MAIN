const express = require('express');

var driverController = require('../controllers/driverController')

const router = express.Router();


//driver login
router.get('/driverlogin',driverController.driverLogin);

//getting login credentials
router.post('/driverlogin', driverController.driverLoginPost)

router.get('/driverhome',driverController.driverHome)


//driver registration page

router.get('/driverregister', driverController.driverRegistration);

//saving new driver details

router.post('/driverregister',driverController.driverRegistrationPost);

//driver home page



router.get('/driverDetails',driverController.driverDetails)
router.get('/editdriver/:driver_id',driverController.editDriver)
router.get('/addNewDriver',driverController.addDriver);



//saving driver details

router.post('/addNewDriver',driverController.saveDriver);


//saving edited details

router.post('/editdriver/:driver_id', driverController.saveEditedDetails);

//deleting driver

router.get('/deletedriver/:driver_id',driverController.deleteDriver);


//listing all the orders for a driver have
router.get('/viewallbookings',driverController.viewAllBookings)


module.exports = router;