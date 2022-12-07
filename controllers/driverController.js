//TODO: driver add , delete , update



const booking = require('../models/booking')

const drivers = require('../models/driver');


module.exports.driverLogin = (req, res, next) => {
    res.render('driverlogin');
}

module.exports.driverLoginPost = async (req, res, next) => {
    var credentials = await drivers.findAll({where:{
        Driver_email : req.body.email,
        Driver_password : req.body.password

    }});
    // console.log(credentials[0].dataValues)

    if (credentials.length == 0) {
        return res.render('driverlogin',{message: 'Invalid credentials'})
    }
    req.session.driverId = credentials[0].dataValues.Driver_id;
    console.log('this is from driver controller cookie driver id '+ req.session.driverId)
    req.session.role = 0;

    
    

    res.redirect('driverhome')
}
module.exports.driverHome = (req, res, next) => {
    res.render('driverhome')
}
//Registration

module.exports.driverRegistration = (req, res, next) => {
    res.render('driverregister')
}

//saving registered data
//
module.exports.driverRegistrationPost = (req, res, next) => {
    drivers.create({
        Drive_name :  req.body.drivername,
        Driver_license_no : req.body.licenseno,
        Driver_email : req.body.email,
        Driver_adress : req.body.address,
        Driver_dob : req.body.dob,
        Driver_gender : req.body.gender,
        Driver_password : req.body.password
    }).then(res.redirect('/driverlogin'))
}


module.exports.driverDetails = (req, res, next)=>{
    drivers.findAll().then(result => {
        console.log(result)
        res.render('driverDetails',{
            driverDetails : result
        })
        
    })
   
}

module.exports.editDriver = (req, res, next) => {
    driver_id = req.params.driver_id;  
    console.log('hello')
    console.log(driver_id) 
    drivers.findByPk( driver_id
    ).then(result=>{
        //TODO: add rendering page
        res.render('editDriver',{
            driverDetails : result 

        }
         
        )
    })

}

module.exports.addDriver = (req, res, next)=>{
    res.render('addDriver')
}

//TODO: need to delete
module.exports.saveDriver = (req, res, next) => {
    drivers.create({
        Drive_name :  req.body.drivername,
        Driver_license_no : req.body.licenseno,
        Driver_email : req.body.email,
        Driver_adress : req.body.address,
        Driver_dob : req.body.dob,
        Driver_gender : req.body.gender
    }).then(res.redirect('/driverDetails'))
}   


module.exports.saveEditedDetails = (req, res, next)=>{
    drivers.update({
        Drive_name :  req.body.drivername,
        Driver_license_no : req.body.licenseno,
        Driver_email : req.body.email,
        Driver_adress : req.body.address,
        Driver_dob : req.body.dob,
        Driver_gender : req.body.gender
    },
    {
        where : {
            Driver_id : req.params.driver_id
        }

    }
    
    ).then(
        res.redirect('/driverDetails')
    )
}

module.exports.deleteDriver = (req, res, next)=>{
    drivers.destroy({
        where : { Driver_id :  req.params.driver_id}
    }).then(
        res.redirect('/driverDetails')
    )
} 






/** ViewBokkings is rendered here to print all bookings for driver
 * driver can see his bookings here
 */
module.exports.viewAllBookings = (req, res, next) => {
    booking.findAll({
        where: {
            Driver_id : req.session.driverId

        } 
    }).then(result => 
        res.render('viewBookings',{
            data : result
        })
        )


    
}