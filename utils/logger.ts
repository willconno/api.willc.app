export const logger = (object: any) => {
    if (process.env.CONFIG != "production") {
        if (typeof(object) == "string") {
            console.log(object)
        } else {
            console.log(JSON.stringify(object, null, 4));
        }
    }
}
