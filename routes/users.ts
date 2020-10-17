import express = require("express");
import logger from "../utils/logger";
import { User, getAllUsers } from "../models/users";

const router = express.Router();

router.get("/", async (req, res) => {

    const users = await getAllUsers();

    const result =  {
        "items": users.rows,
        "totalItems": users.count
    }

    logger(result);

    return res.status(200).json(result);
})

export = router
