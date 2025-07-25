const adminAuth = (req, res, next) => {
    const token = "12345asd"
    const isAdmin = token === "12345asd"
    if (!isAdmin) {
        res.status(401),res.send("unauthorized request");
    } else {
        next()
    }
};

const userAuth = (req, res, next) => {
    const token = "12345affsd"
    const isAdmin = token === "12345asd"
    if (!isAdmin) {
        res.status(401),res.send("unauthorized request");
    } else {
        next()
    }
};

module.exports = {
    adminAuth,
    userAuth
}