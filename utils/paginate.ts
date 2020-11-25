import { FindAndCountOptions } from "sequelize/types";

export const paginate = (page = 1, pageSize = 50, options?: FindAndCountOptions<any>) => {
    const offset = page * pageSize - pageSize;

    const result = {
        ...options,
        offset: offset,
        limit: pageSize
    }

    console.log(result);

    return result;
}
