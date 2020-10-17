import { DataTypes } from "sequelize";
import paginate from "../utils/paginate";
import db from "../db/db";

export const Post = db.define("Post", {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        field: "ID"
    },
    post_type: {
        type: DataTypes.STRING(20),
        allowNull: false,
        defaultValue: "post"
    },
    post_title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    post_content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: "wp_posts",
    createdAt: false,
    updatedAt: false
})

export const getAllPosts = async (page = 1, pageSize = 50) => {
    try {
        return await Post.findAndCountAll(paginate(null, page, pageSize));
    } catch (e) {
        console.log(e);
        return [];
    }
}
