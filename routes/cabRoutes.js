var express = require('express');

var cabController = require('../controllers/cabController')


const router = express.Router();

router.get('/availablecabs',cabController.avalableCabs);
router.get('/addNewCab',cabController.addNewCab);
router.post('/addNewCab',cabController.saveCabDetails)

//getting route to edit cab details by admin

router.get('/editcabdetails',cabController.updateCabDetails )

//saving edited cab details
//calling same function when saving the data initially

router.post('/editcabdetails', cabController.saveCabDetails)

//deleting cab details by admin

router.get('/deletecabdetails',cabController.deleteCabDetails)

module.exports = router;