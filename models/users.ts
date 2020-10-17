
import { DataTypes } from "sequelize";
import { db } from "../db";
import { paginate } from "../utils";

export const User = db.define("User", {
    id: {
        field: "ID",
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        field: "user_login",
        type: DataTypes.STRING(60),
        allowNull: false,
        defaultValue: ""
    },
    niceName: {
        field: "user_nicename",
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ""
    },
    displayName: {
        field: "display_name",
        type: DataTypes.STRING(250),
        allowNull: false,
        defaultValue: ""
    },
    email: {
        field: "user_email",
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: ""
    },
    status: {
        field: "user_status",
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: "wp_users",
    updatedAt: false,
    createdAt: false
})

export const getAllUsers = async (page: number, pageSize: number) => {
    const result = await User.findAndCountAll(paginate(null, page ?? 1, pageSize ?? 25))
    return result
}
