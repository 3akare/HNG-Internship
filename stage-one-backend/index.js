const express = require("express")
const app = express();

const PORT = 8080;

app.get("/home", (req, res) => {
    console.log(req.headers['x-forwarded-for'])
    console.log(req.connection.remoteAddress)
    return res.json({ status: "Ok" })
})

app.listen(8080, () => {
    console.log("App is live")
})