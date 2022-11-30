var express = require('express');

var cabController = require('../controllers/cabController')


const router = express.Router();

router.get('/availablecabs',cabController.avalableCabs);
router.get('/addNewCab',cabController.addNewCab);

module.exports = router;