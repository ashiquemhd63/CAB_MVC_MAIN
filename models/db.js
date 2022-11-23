const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize("cabWithExpressAndSequelise", "root", "308568",{
    host : "localhost",
    dialect : "mysql"
})

module.exports.sequelize =sequelize;