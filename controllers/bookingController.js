const booking = require('../models/booking');

const driver = require('../models/driver')
//rendering available cabs page
module.exports.cabDetails = (req, res, next)=>{

    // console.log('🚗🚗🚗🚗🚗🚗')
    // console.log(req.identity.passenger)
    // console.log(req.params.cab_no)

    
    // res.render('cabdetails');

    
}

//saving booking deatils
module.exports.saveBookingDetails =  (req, res, next)=>{
     booking.create({
        date_of_booking: req.body.date,
        cab_from : req.body.cabfrom,
        cab_to : req.body.cabto,
        booking_time : req.body.time,
        passenger_id : req.identity.passenger.id,
        cab_no : req.params.cab_no,




    })
}