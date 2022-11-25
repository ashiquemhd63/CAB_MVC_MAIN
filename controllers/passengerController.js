const passenger = require('../models/passenger');

module.exports.registerPage = (req, res, next) => {
    res.render('passenger-registration')
}   

module.exports.homePage = (req, res, next)=>{
    res.render('homepage')
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
// module.exports.deletePassenger = (req, res, next)=>{

// }

//Displaying passenger profile
// module.exports.passengerProfile = (req, res, next)=>{

// }

