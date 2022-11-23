const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');


const booking = db.sequelize.define('booking',{
    book_id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    date_of_booking : {
        type : DataTypes.DATE,
        allowNull : false

    },
    cab_from : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    cab_to : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    booking_time : {
        type : DataTypes.TIME,
        allowNull : false
    },
    cab_no : {
        type : DataTypes.INTEGER,
        references : {
            model : 'cabs',
            key : 'cab_no'
        }
    },

    cost : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    passenger_id : {
        type : DataTypes.INTEGER,
        references : {
            model : 'passengers',
            key : 'Passenger_id'

        }
        
        

    },
    driver_id : {
        type :DataTypes.INTEGER,
        references : {
            model : 'drivers',
            key : 'Driver_id'
        }

        

    },


})

module.exports = booking  