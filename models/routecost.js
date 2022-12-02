const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');


const routecost = db.sequelize.define('routecost',{
    from : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    to : {
        type : DataTypes.STRING(50),
        allowNull : false

        
    },
    cost : {
        type : DataTypes.STRING(50),
        allowNull : false
    } 
})

module.exports = routecost  