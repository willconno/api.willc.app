import { Sequelize } from "sequelize";

export const db = new Sequelize("wordpress", "root", "admin", {
    host: "db",
    dialect: "mysql"
})
