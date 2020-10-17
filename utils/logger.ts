export default (object: any) => {
    if (process.env.CONFIG != "production") {
        console.log(JSON.stringify(object, null, 4));
    }
}
