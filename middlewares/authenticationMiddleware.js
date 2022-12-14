// const { UPSERT } = require('sequelize/types/query-types');
const passenger = require('../models/passenger')

module.exports = async(req, res, next) => {
    req.identity = {
        isAuthenticated: false,
        passenger : null
    }
    if (req.url == '/login' || req.url == '/create') {
        return next();
    }
    let passengerId = req.session.passengerId;
    if(!passengerId || passengerId == null){
        return res.redirect("/login");
    }
    let passengerFromDb = await passenger.findByPk(passengerId);
    // console.log("checking passenger user name and password in authentication middleware")
    if (passengerFromDb == null) {
        return res.redirect('/login');
    }


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
}