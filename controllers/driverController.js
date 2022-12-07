//TODO: driver add , delete , update





const drivers = require('../models/driver');


module.exports.driverLogin = (req, res, next) => {
    res.render('driverlogin');
}

module.exports.driverLoginPost = async (req, res, next) => {
    var credentials = await drivers.findAll({where:{
        Driver_email : req.body.email,
        Driver_password : req.body.password

    }});
    console.log(credentials)

    if (credentials == null) {
        return res.render('driverlogin',{message: 'Invalid credentials'})
    }
    req.session.driverId = credentials.Driver_id
    

    res.redirect('/home')
}

//Registration

module.exports.driverRegistration = (req, res, next) => {
    res.render('driverregister')
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
