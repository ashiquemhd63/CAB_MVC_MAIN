var express = require('express');

var bookingController = require('../controllers/bookingController')


const router = express.Router();

router.get('/bookcab',bookingController.bookingPage);

module.exports = router