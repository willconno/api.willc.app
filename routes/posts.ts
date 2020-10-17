import * as express from "express";
import { logger } from "../utils/index";
import { Post, getAllPosts } from "../models/posts"
import { response } from "../utils";

export const router = express.Router();

router.get("/", async (req, res) => {

    const posts = await getAllPosts();

    const result = response(req, posts)

    logger(result);

    return res.status(200).json(result);
});
