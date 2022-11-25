var express = require('express');

var controller = require('../controllers/passengerController')


const router = express.Router();

router.get('/create',controller.registerPage);

router.post('/create',controller.registerUser);

router.get('/home',controller.homePage);

// router.get('/profile', )

router.get('/login',controller.loginPage);

module.exports = router;

