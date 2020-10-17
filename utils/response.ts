import { Request } from "express";
import { Model } from "sequelize/types";
import { logger } from "../utils/logger";

export const response = (req: Request, response: {
    rows: Model<any, any>[];
    count: number;
}) => {
    const result = {
        "items": response.rows,
        "totalItems": response.count,
        "totalPages": Math.ceil(response.count / (req.body.pageSize ?? 50))
    }

    logger(result);

    return result;
}
