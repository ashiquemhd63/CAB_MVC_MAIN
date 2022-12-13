// const { UPSERT } = require('sequelize/types/query-types');
const driver = require('../models/driver')
const passenger = require('../models/passenger')

module.exports = async(req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        passenger : null
    }





    var role = req.session.role
    console.log('my role is: '+ req.session.role)

    if (req.session.role == 1) {
        console.log(req.session.role)
        if (req.url == '/login' || req.url == '/create' || req.url == '/driverlogin' || req.url == '/driverregister') {
            return next();
        }
        console.log('line 13')
        let passengerId = req.session.passengerId;
        if(!passengerId || passengerId == null){
            return res.redirect("/login");
        }
        console.log('line 18')
        let passengerFromDb = await passenger.findByPk(passengerId);
        // console.log("checking passenger user name and password in authentication middleware")
        if (passengerFromDb == null) {
            return res.redirect('/login');
        }
    
        console.log('line 25')
        //Saving login details of a user for further reference
        req.identity.isAuthenticated = true;
        req.identity.passenger = {
            id : passengerFromDb.dataValues.Passenger_id,
            firstName : passengerFromDb.dataValues.firstName,
            lastName : passengerFromDb.dataValues.lastName,
            email : passengerFromDb.dataValues.email,
            mobile : passengerFromDb.dataValues.mobile,
            dob : passengerFromDb.dataValues.dob,
            
            role : passengerFromDb.dataValues.role,
            book_id : null
        }
        next();
        


        
    } else {
        if (req.url == '/login' || req.url == '/create' || req.url == '/driverlogin' || req.url == '/driverregister') {
            return next();
        }
        console.log('this is from driver login post')
        let driverId = req.session.driverId;
        console.log('this is  from driver id'+ driverId)
        if(!driverId || driverId == null){
            return res.redirect("/driverlogin");
        }
        console.log('line 18')
        let passengerFromDb = await driver.findByPk(driverId);
        // console.log("checking passenger user name and password in authentication middleware")
        if (passengerFromDb == null) {
            return res.redirect('/driverlogin');
        }
    
        console.log('line 25')
        //Saving login details of a user for further reference
        req.identity.isAuthenticated = true;
        // req.identity.passenger = {
        //     id : passengerFromDb.dataValues.Passenger_id,
        //     firstName : passengerFromDb.dataValues.firstName,
        //     lastName : passengerFromDb.dataValues.lastName,
        //     email : passengerFromDb.dataValues.email,
        //     mobile : passengerFromDb.dataValues.mobile,
        //     dob : passengerFromDb.dataValues.dob,
            
        //     role : passengerFromDb.dataValues.role,
        //     book_id : null
        // }
        next();
        
    }



    console.log('line 9')
    
}