import { Sequelize } from "sequelize";

export default new Sequelize("wordpress", "root", "admin", {
    host: "db",
    dialect: "mysql"
})
