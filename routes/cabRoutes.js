var express = require('express');

var cabController = require('../controllers/cabController')


const router = express.Router();

router.get('/availablecabs',cabController.avalableCabs);
router.get('/addNewCab',cabController.addNewCab);
router.post('/addNewCab',cabController.saveCabDetails)

module.exports = router;