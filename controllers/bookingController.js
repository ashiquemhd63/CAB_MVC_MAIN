const booking = require('../models/booking');
const cab = require('../models/cab')
const routecost = require('../models/routecost');
// const sequelize = require('sequelize');
// const sequelize = require('../models/db')
const { QueryTypes } = require('sequelize');


const driver = require('../models/driver')
//rendering available cabs page
module.exports.cabDetails = async (req, res, next) => {

    // console.log('🚗🚗🚗🚗🚗🚗')
    // console.log(req.identity.passenger)
    // console.log(req.params.cab_no)

    // var driverid ;
    // var result;
    //     cabDetails => {driverid = cabDetails.Driver_Id;
    //     // console.log("Driver id is " + driverid)
    //     return driverid;
    //     }
    // )
    // console.log("driver id is "+result);
    //taking data from routecost and passing details
    

    //  await sequelize.query('select distinct * from `routecost`', {
    //     type: QueryTypes.SELECT
    //   }).then(result=>{
    //     console.log(result)
    //   })

      var route = await routecost.findAll({
        
    })
    // console.log("56786786876")
    // console.log(route)
    res.render('cabdetails', {
        data: route

    });



}

//saving booking deatils
module.exports.saveBookingDetails = (req, res, next) => {
    // var driverid ;]
    // console.log("From saveBookingDetails")
    //finding cost by from and to
    console.log('🏍🏍🏍🏍🏍🏍🏍🏍')
    console.log(req.body.cabfrom)
    routecost.findOne({
        where: {
            from: req.body.cabfrom,
            to: req.body.cabto
        }
    }).then(result => {

        cab.findByPk(req.params.cab_no).then((cabDetails) => {
            console.log("From findbypk")
            console.log(cabDetails.Driver_Id)
            booking.create({
    
    
                date_of_booking: req.body.date,
                cab_from: req.body.cabfrom,
                cab_to: req.body.cabto,
                booking_time: req.body.time,
                passenger_id: req.identity.passenger.id,
                cab_no: req.params.cab_no,
                driver_id: cabDetails.Driver_Id,
                cost: result.cost
                // passenger_id: req.identity.passenger.id
    
    
            }).then(reslut => {
                //Saving booking id for retrieving data from booking table so that we can print invoice
    
    
                //Checking output
    
                // console.log('🚗🚗From result after creating booking table🚗🚗');
                // console.log("Booking id is: ")
                // console.log(reslut.book_id)
                // req.session.passenger.book_id = reslut.book_id;
    
                res.redirect('/paymentDetails/' + reslut.book_id)
                console.log(req.identity.passenger.book_id)
    
            })
    
        } )

    })
    


}

module.exports.viewBookingDetails = async (req, res, next) => {
    // booking.findByPk(req.params.book_id).then()
    // console.log('🚗🚗🚗🚗🚗')
    // console.log(req.params.cab_no)
    var paymentDetails = await booking.findOne({ where: { book_id: req.params.book_id } })

    console.log('🚍🚍🚍🚍🚍🚍🚍')
    console.log(paymentDetails)


    res.render('payment',
        {
            data: paymentDetails
        })
}

//Payment Invoice

module.exports.paymentInvoice = async (req, res, next) => {
    console.log('🚗🚗🚗🚗🚗')
    console.log(req.identity.passenger.book_id)
    booking.findOne({
        where: {
            book_id: req.params.book_id
        }
    }).then((result) => {

        routecost.findOne({
            where: {
                from : result.cab_from,
                to : result.cab_to

            }
        }).then((newResult)=>{
            console.log("✈✈✈✈✈✈✈✈")
        let name = req.identity.passenger.firstName + " " + req.identity.passenger.lastName
        console.log(req.identity.passenger.firstName)
        res.render('invoice', {
            invoice: result,
            passengername: name,
            cost: newResult.cost
            // passenger_name : passengerFromDb.dataValues.firstName + " " +passengerFromDb.dataValues.lastName
        })

        })
        
    }

    )


}



//listing all the bookings

module.exports.viewBooking = (req, res, next) => {

    booking.findAll().then(result => {
        res.render('viewBookings',{
            data :  result
        }
        
        )

    })
    
}

module.exports.sreachBookingByDate = async (req, res, next)=>{
    // console.log(req.body.date)
    // var date = new Date(req.body.date)
    // console.log(date)
    date = req.body.date
    console.log(date)
    
    allbookings = await booking.findAll({
        where : {
            date_of_booking : date
        }
    }
        
    )
    console.log(allbookings)

    if (allbookings.length != 0) {
        res.render('viewBookings',{
            data : allbookings
        })
        
    }
    else{

         let isFound = 1
         booking.findAll().then(result => {
            res.render('viewBookings',{
                data : result,
                found : isFound

            })
         }

         )

    }
     
    // res.send('page is working')
}