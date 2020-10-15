const { Sequelize } = require("sequelize");


module.exports = db = new Sequelize("wordpress", "root", "admin", {
    host: "db",
    dialect: "mysql"
})
