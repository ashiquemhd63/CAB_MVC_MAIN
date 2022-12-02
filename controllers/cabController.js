// const booking = require('../models/booking');

// const driver = require('../models/driver')
//rendering available cabs page


const cab = require('../models/cab')
const drivers = require('../models/driver')
module.exports.avalableCabs = (req, res, next)=>{

    cab.findAll().then(cabs=>{
        // console.log('🚗🚗🚗🚗')
        // console.log(cabs)
        res.render('availablecabs',{
            cabDetails : cabs,
            data : req.identity.passenger,
            
        });
    })
    
    
}
// TODO: collect  all drivers name from driver table
// drivers.findAll((driver)=>{
//     console.log(drivers)
// })

//getting all the driver deatils for displaying available driver names
module.exports.addNewCab = (req, res , next) => {
    drivers.findAll().then((driver)=>{
        res.render('addnewcab',{
            driverName : driver
        })
        
        // driver.every(user => console.log(user.dataValues.Drive_name))
    })
            
    
}

//After submitting cab form

module.exports.saveCabDetails = (req, res, next) =>{
    //test getting data
    // console.log('**FROM savecabDetails**');
    // console.log(req.body.drivername);
    var temp = req.body.drivername
    var new_temp = temp.split(':');
    // console.log(new_temp)
    cab.create({
        cab_name : req.body.cabName,
        cab_description : req.body.cabDescription,
        cab_total_capacity : req.body.totalCapacity,
        Driver_Id : new_temp[1]


    }).then(
        res.redirect('/home')
    ).catch(
        res.redirect('/addNewCab')
    )   
    
}

//upadating cab details by admin
module.exports.updateCabDetails = (req, res, next)=>{
    let cabno = req.params.cab_no;
    
    drivers.findAll().then((driver)=>{
        cab.findOne({
            where : {
                cab_no : cabno
            }
        }).then( (cabDetails)=>res.render('editcab',{
            driverName : driver,
            cabdetails  : cabDetails
        })
        )
       
        // driver.every(user => console.log(user.dataValues.Drive_name))
    })
    
}
//edit cab details
module.exports.editCabDetails = async (req, res, next)=>{
    var temp = req.body.drivername
    var new_temp = temp.split(':');
    await cab.update({
        cab_name : req.body.cabName,
        cab_description : req.body.cabDescription,
        cab_total_capacity : req.body.totalCapacity,
        Driver_Id : new_temp[1]

    },
    {
        where : {
            cab_no : req.params.cab_no
        }   
    }).then(
        res.redirect('/home')
    )
}


//Delete cab details

module.exports.deleteCabDetails = async(req, res, next)=>{
    let cabno = req.params.cab_no;
    let cabFromDb = await cab.findByPk(cabno)
    if (cabFromDb != null) {
        await cab.destroy({
            where : {cab_no : cabno}
        }).then(res.redirect('/home'))
        
    }
}

