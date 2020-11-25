
import { DataTypes } from "sequelize";
import { db } from "../db";
import { paginate } from "../utils";
import { UserMeta } from "./user_meta";

export const User = db.define("user", {
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
    },
}, {
    tableName: "wp_users",
    updatedAt: false,
    createdAt: false,
    freezeTableName: true
})

UserMeta.belongsTo(User, {
    foreignKey: {
        field: "user_id",
        name: "userId"
    }
})
User.hasMany(UserMeta, {
    onDelete: "CASCADE",
    foreignKey: {
        field: "user_id",
        name: "userId"
    }
})

export const getAllUsers = async (page: number, pageSize: number) => {
    const result = await User.findAndCountAll(paginate(page ?? 1, pageSize ?? 25, {
        include: UserMeta,
        subQuery: false
    }))
    return result
}
