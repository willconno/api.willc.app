

module.exports = (object) => {
    if (process.env.CONFIG != "production") {
        console.log(JSON.stringify(object));
    }
}
