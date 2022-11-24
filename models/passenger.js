const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');


const Passenger = db.sequelize.define('Passenger',{
    Passenger_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    firstName : {
        type : DataTypes.STRING(50),
        allowNull : false

    },
    lastName : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    password : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    email : {
        type : DataTypes.STRING(50),
        allowNull : false,
        unique : true

    },
    mobile : {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    dob : { 
        type : DataTypes.DATE
    },
    gender :  {
        type : DataTypes.STRING(5),
        allowNull : false
    }


})

module.exports = Passenger  