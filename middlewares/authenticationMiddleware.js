// const { UPSERT } = require('sequelize/types/query-types');
const passenger = require('../models/passenger')
const driver = require('../models/driver')

module.exports = async (req, res, next) => {
    var isDriver = 1;
    req.identity = {
        isAuthenticated: false,
        passenger: null
    }
    // var logintype = null;
    if (req.url == '/login' || req.url == '/create' || req.url == '/driverlogin' || req.url == '/driverregister') {


        return next();
    }
    var passengerId = req.session.passengerId;
    var driverId = req.session.driverId;

    // console.log('🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗')
    // console.log(req.url)
    // if (req.url == '/login' || req.url == '/create') {

    // console.log('🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗')


    //     var passengerId = req.session.passengerId;  
    //     return next();
    // }
    // else{
    //     var driverid = req.session.driver_id
    // }

    // let passengerId = req.session.passengerId;
    console.log('🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗')
    console.log(driverId)
    let driverFromDb = await driver.findByPk(driverId);
    console.log(driverFromDb)

  /*  if (!passengerId || passengerId == null) {
        return res.redirect("/login");
    }
    let passengerFromDb = await passenger.findByPk(passengerId);
    // console.log("checking passenger user name and password in authentication middleware")
    if (passengerFromDb == null) {
        // return res.redirect('/login');
        console.log('This is not a passenger')
    }
    else {
        isDriver = 1
        req.identity.isAuthenticated = true;
        req.identity.passenger = {
            id: passengerFromDb.dataValues.Passenger_id,
            firstName: passengerFromDb.dataValues.firstName,
            lastName: passengerFromDb.dataValues.lastName,
            email: passengerFromDb.dataValues.email,
            mobile: passengerFromDb.dataValues.mobile,
            dob: passengerFromDb.dataValues.dob,

            role: passengerFromDb.dataValues.role,
            book_id: null
        }

    } */
    if (1) {
        console.log('i am in driver')
        if (driverFromDb == null) {
            res.redirect('driverlogin')
        }
        else{
            console.log('iam ok')
            res.send('ok')
        }
    }


    //Saving login details of a user for further reference
    // req.identity.isAuthenticated = true;
    // req.identity.passenger = {
    //     id: passengerFromDb.dataValues.Passenger_id,
    //     firstName: passengerFromDb.dataValues.firstName,
    //     lastName: passengerFromDb.dataValues.lastName,
    //     email: passengerFromDb.dataValues.email,
    //     mobile: passengerFromDb.dataValues.mobile,
    //     dob: passengerFromDb.dataValues.dob,

    //     role: passengerFromDb.dataValues.role,
    //     book_id: null
    // }
    next();
}