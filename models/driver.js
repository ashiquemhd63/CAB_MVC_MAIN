const { type } = require('os');
const {Sequelize, DataTypes} =  require('sequelize');
const db = require('./db');

const Driver = db.sequelize.define('Driver',{
    Driver_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey  : true

    },
    Driver_license_no : {
        type : DataTypes.INTEGER,
        allowNull : false,

    },
    Drive_name : {
        type : DataTypes.STRING(50),
        allowNull :  false,

    },
    Driver_password : {
        type : DataTypes.STRING(50),
        allowNull : true
    },
    Driver_email : {
        type  : DataTypes.STRING(50),
        allowNull : false,
        unique : true

    },
    Driver_adress :{
        type : DataTypes.STRING(50),



    },
    Driver_dob : {
        type: DataTypes.DATEONLY,

    },
    Driver_gender : {
        type : DataTypes.STRING(5),
        allowNull  : false
    },
    


        
    
})

module.exports  = Driver;