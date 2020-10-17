export const paginate = (options, page, pageSize = 50) => {
    const offset = page * pageSize - pageSize;

    const result = {
        ...options,
        offset: offset,
        limit: pageSize
    }

    console.log(result);

    return result;
}
