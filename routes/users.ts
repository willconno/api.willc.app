import express = require("express");
import { User, getAllUsers } from "../models/users";
import { response, logger } from "../utils";

export const router = express.Router();

router.get("/", async (req, res) => {

    const users = await getAllUsers(req.body.page, req.body.pageSize);

    const result = response(req, users)

    logger(result)

    return res.status(200).json(result);
})
