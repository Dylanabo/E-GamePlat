var mysql = require('mysql');
const { Sequelize } = require('sequelize');

module.exports = {
  sequelize: new Sequelize("mydb", "root", "3S6u2HsZr", {
    dialect: "mysql",
    host: "localhost"
  })
}
