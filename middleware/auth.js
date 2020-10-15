const db = require("../db/db");

function onFail(res, e) {
    console.log(e);
    res.status(401).send({"success": false, "msg": "Not authorized"}); 
}

function onSuccess(next) {
    next();
}

module.exports = async (req, res, next) => {

    try {
        await db.authenticate();
        onSuccess(next);
    } catch (e) {
        onFail(res, e)
    }
}
