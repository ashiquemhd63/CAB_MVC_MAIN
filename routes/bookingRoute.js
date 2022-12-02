const { Router } = require('express');
var express = require('express');

var bookingController = require('../controllers/bookingController')



const router = express.Router();

router.get('/cabDetails/:cab_no',bookingController.cabDetails);
router.post('/cabDetails/:cab_no',bookingController.saveBookingDetails);
router.get('/paymentDetails/:book_id',bookingController.viewBookingDetails)
router.get('/paymentInvoice/:book_id',bookingController.paymentInvoice);

        
module.exports = router;