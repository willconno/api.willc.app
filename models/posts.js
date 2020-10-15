const { DataTypes, Model } = require("sequelize");
const { model } = require("../db/db");
const db = require("../db/db")

const Post = db.define("Post", {
    ID: {
        primaryKey: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true
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

  // I don't want createdAt
  createdAt: false,

  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false
})



const getAllPosts = async () => {
    try {

        const authed = await db.authenticate();
        console.log(String(authed));

        return await Post.findAll();
    } catch (e) {
        console.log(e);
        return [];
    }
}

module.exports = {
    Post: Post,
    getAllPosts: getAllPosts
}
