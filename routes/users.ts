import express = require("express");
import { User, getAllUsers, getUserMeta } from "../models";
import { response, logger } from "../utils";

export const router = express.Router();

router.get("/", async (req, res) => {

    const users = await getAllUsers(req.body.page, req.body.pageSize);

    const result = response(req, users)

    logger(result)

    return res.status(200).json(result);
})

router.get("/:userId/meta", async (req, res) => {
    const meta = await getUserMeta(Number(req.params.userId) || 0)

    if (meta == null) {
        return res.send(404)
    }

    const result = {
        "items": meta
    }

    logger(result)

    return res.status(200).json(result)
})
