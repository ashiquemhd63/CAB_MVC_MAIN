// const Passenger = require('../models/passenger');
const passenger = require('../models/passenger');

module.exports.registerPage = (req, res, next) => {
    res.render('passenger-registration')
}   

module.exports.homePage = (req, res, next)=>{
    // console.log("request at home page: ")
    // console.log(req)
    console.log('🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗🚗')
    return res.render('homepage')
}

module.exports.registerUser = (req, res, nex)=>{
    passenger.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : req.body.password,
        email : req.body.email,
        mobile : req.body.mobile,
        dob : req.body.dob,
        gender :req.body.gender

 
    }).then(user=>{
        // alert("Registration successful")
        res.redirect('/home')
    })
};
module.exports.loginPage = (req, res, next)=>{
    res.render('login')
}

module.exports.loginPost = async (req, res, next) =>{
    const {email, password} = req.body;
    const passFromDb = await passenger.findOne({
        where:{ email: email, password: password}
    });
    if (passFromDb == null) {
        return res.render('login',{message : 'no user found'})
    }
    //TODO: ADD cookie, save the passenger id in cookie session
    req.session.passengerId = passFromDb.Passenger_id;
    //below code is working
    // console.log("the saved passenger id")
    // console.log(req.session.passengerId)
    return res.redirect('/home')
}
// module.exports.deletePassenger = (req, res, next)=>{

// }

//Displaying passenger profile
// module.exports.passengerProfile = (req, res, next)=>{

// }




