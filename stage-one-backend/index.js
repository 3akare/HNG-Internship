const express = require("express")
const app = express();

const PORT = 8080;

app.get("/home", (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'];
    return res.json({ ipAddress: typeof(ipAddress), ipAddress, status: "Ok" })
})

app.listen(8080, () => {
    console.log("App is live")
})