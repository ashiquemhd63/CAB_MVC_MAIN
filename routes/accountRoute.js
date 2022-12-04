var express = require('express');

var accountController = require('../controllers/accountController');
const router = require('./passengerRoutes');

router.get('/logout', accountController.logout);

module.exports = router;