import * as express from "express";
import { Post, getAllPosts } from "../models/post"
import { response, logger } from "../utils";

export const router = express.Router();

router.get("/", async (req, res) => {

    logger("checking..")
    const posts = await getAllPosts();

    logger("done")
    const result = response(req, posts)

    logger(result);

    return res.status(200).json(result);
});
