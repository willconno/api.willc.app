import { Request, Response } from "express";
import { db } from "../db";
import { logger } from "../utils"

function onFail(res: Response, e: any) {
    console.log(e);
    res.status(401).send({"success": false, "msg": "Not authorized"}); 
}

function onSuccess(next: Function) {
    next();
}

export default async (req: Request, res: Response, next: Function) => {

    logger("==>  " + req.method + " " + req.originalUrl);

    try {
        await db.authenticate();
        onSuccess(next);
    } catch (e) {
        onFail(res, e)
    }
}
