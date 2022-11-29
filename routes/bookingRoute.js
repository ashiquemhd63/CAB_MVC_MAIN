const { Router } = require('express');
var express = require('express');

var bookingController = require('../controllers/bookingController')



const router = express.Router();

router.get('/cabDetails/:cab_no',bookingController.cabDetails);
router.post('/cabDetails/:cab_no',bookingController.saveBookingDetails);
        
module.exports = router;