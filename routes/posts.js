const express = require("express");
const logger = require("../utils/logger");
const router = express.Router();
const { Post, getAllPosts } = require("../models/posts")

router.get("/", async (req, res) => {

    const posts = await getAllPosts();

    logger(posts);

    return res.status(200).json(posts);
});


module.exports = router
