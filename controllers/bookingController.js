const booking = require('../models/booking');

const driver = require('../models/driver')
//rendering available cabs page
module.exports.avalableCabs = (req, res, next)=>{

    
    res.render('availablecabs');
    
}