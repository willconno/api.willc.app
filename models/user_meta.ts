import { Association, DataTypes, Op } from "sequelize"
import { db } from "../db"
import { User } from "./user"

export const UserMeta = db.define("userMeta", {
    ida: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: "umeta_id"
    },
    userId: {
        type: DataTypes.INTEGER,
        field: "user_id",
        
    },
    metaKey: {
        type: DataTypes.STRING(255),
        field: "meta_key"
    },
    metaValue: {
        type: DataTypes.TEXT,
        field: "meta_value"
    }
}, {
    tableName: "wp_usermeta",
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    modelName: "userMeta"
})

export const getUserMeta = async (userId: number) => {
    const result = UserMeta.findAll({
        where: {
            userId: userId
        },
        include: {
            model: User,
            required: true
        }
    })
    return result
}
