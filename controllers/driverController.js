//TODO: driver add , delete , update
const drivers = require('../models/driver');
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
    drivers.findByPk(({
        where : {Driver_id : driver_id}
    })).then(result=>{
        //TODO: add rendering page
        res.render('jgk',{
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