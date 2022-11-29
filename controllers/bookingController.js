const booking = require('../models/booking');
const cab = require('../models/cab')


const driver = require('../models/driver')
//rendering available cabs page
module.exports.cabDetails = (req, res, next)=>{

    // console.log('🚗🚗🚗🚗🚗🚗')
    // console.log(req.identity.passenger)
    // console.log(req.params.cab_no)

    // var driverid ;
    // var result;
    // result = cab.findByPk(req.params.cab_no).then(
    //     cabDetails => {driverid = cabDetails.Driver_Id;
    //     // console.log("Driver id is " + driverid)
    //     return driverid;
    //     }
    // )
    // console.log("driver id is "+result);
    res.render('cabdetails');

    
}

//saving booking deatils
module.exports.saveBookingDetails =  (req, res, next)=>{
    // var driverid ;]
    console.log("From saveBookingDetails")
    cab.findByPk(req.params.cab_no).then((cabDetails)=>{
        console.log("From findbypk")
        console.log(cabDetails.Driver_Id)
        booking.create({
            

            date_of_booking: req.body.date,
            cab_from : req.body.cabfrom,
            cab_to : req.body.cabto,
            booking_time : req.body.time,
            passenger_id : req.identity.passenger.id,
            cab_no : req.params.cab_no,
            driver_id: cabDetails.Driver_Id,
            cost: 500
            // passenger_id: req.identity.passenger.id
    
    
    
    
        })

    }
   
        
    )
    res.redirect('/home')
    
}