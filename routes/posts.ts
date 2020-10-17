import * as express from "express";
import logger from "../utils/logger";
import { Post, getAllPosts } from "../models/posts"

const router = express.Router();

router.get("/", async (req, res) => {

    const posts = await getAllPosts();

    logger(posts);

    const result = {
        "items": posts
    }
    
    return res.status(200).json(result);
});


export = router
