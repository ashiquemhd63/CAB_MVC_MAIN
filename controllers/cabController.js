// const booking = require('../models/booking');

// const driver = require('../models/driver')
//rendering available cabs page

const cab = require('../models/cab')
module.exports.avalableCabs = (req, res, next)=>{

    cab.findAll().then(cabs=>{
        // console.log('🚗🚗🚗🚗')
        // console.log(cabs)
        res.render('availablecabs',{
            cabDetails : cabs,
            data : req.identity.passenger
        });
    })
    
    
}