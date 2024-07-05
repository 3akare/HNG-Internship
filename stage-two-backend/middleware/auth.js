const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
    let token;
    try {
        token = req.header("Authorization").replace('Bearer ', '');
        if (!token) return res.status(401).json({ message: "Access Denied" });
    } catch (error) {
        return res.status(401).json({ message: "Access Denied" });
    }
   

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        // console.log(req.user)
        next()
    } catch (error) {
        // console.log(token)
        res.status(400).send({ message: "Invalid Token" });
    }
}
