const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');
const Driver =require('./driver')


const cab = db.sequelize.define('cab',{
    cab_no : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    cab_name : {
        type : DataTypes.STRING(50),
        allowNull : false

    },
    cab_description : {
        type : DataTypes.STRING(50),
        
    },
    cab_total_capacity : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    //setting foriengn key
    Driver_Id : {
        type : DataTypes.INTEGER,
       
       

    },




   


})
// Driver.hasMany(cab, {as: "drivertable"});
// cab.belongsTo(Driver, {
//     foreignKey : "driverid",
//     as: "driver"
// })



module.exports = cab  ;