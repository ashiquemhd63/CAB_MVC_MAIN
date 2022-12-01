// const Passenger = require('../models/passenger');
const passenger = require('../models/passenger');

module.exports.registerPage = (req, res, next) => {
    res.render('passenger-registration',{
        heading : 'Registration'
    })
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
// module.exports.delete    Passenger = (req, res, next)=>{

// }

//Displaying passenger profile
// module.exports.passengerProfile = (req, res, next)=>{

// }

module.exports.passengerProfile = (req, res, next)=>{
    console.log("🚗")
    console.log(req.identity)
    res.render('passengerprofile', {
        data : req.identity.passenger,
        
    })
    
    // let passengerId = req.identity.passenger.id;
    // res.send(passengerId);

    // const passFromDb =  passenger.findAll({
    //     where:{Passenger_id : passengerId }
    // });
    // console.log("This is from")
    // console.log(passFromDb)
    // // console.log()
    // passenger.findAll()
    //     .then(passFromDb => {
    //         res.render('passengerprofile', {
    //             data: passFromDb
    //         });
    //     });


}

module.exports.updateProfile = (req, res, next)=>{
    // console.log("this is from update profile");
    // console.log('🚗🚗');
    // console.log(req.identity.passenger.id)
    passenger.findByPk(req.identity.passenger.id)
    .then(passFromDb => {
        // console.log('🚗🚗🚗')
        // console.log(passFromDb.Passenger)
        res.render('updateprofile',{
            heading : 'Update Profile',
            data : passFromDb
        }
    );
    })
    
}


//storing updated profile into the database
module.exports.updateProfilePost =  async (req, res, next ) =>{
    // console.log(req.body.firstName)
    await passenger.update({
        firstName : req.body.firstName,
        lastName  : req.body.lastName,  
        email : req.body.email,
        password : req.body.password,
        mobile :  req.body.mobile
    },
    {
        where: {
            Passenger_id : req.identity.passenger.id
        }
    }
    
    )
    res.redirect('/home')
}


module.exports.deleteProfile = async (req, res, next)=>{

    let id = req.identity.passenger.id;
    let passengerFromDb = await passenger.findByPk(id);
    if (passengerFromDb != null) {
        await passenger.destroy({
            where : { Passenger_id : id}
        })
    }

    res.redirect('/login')
} 


