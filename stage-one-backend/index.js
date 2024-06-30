const express = require("express")
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const MODE = process.env.MODE;

app.use(express.json());

app.get("/home", (req, res) => {
    let ipAddresses;

    // console.log(MODE)
    if (MODE == "dev"){
        ipAddresses = "197.211.59.15, 10.203.33.163, 10.204.46.38";
    }
    else{
        ipAddresses = req.headers['x-forwarded-for'];
    }

    // There is a list of IP addresses because the hosting provider is likely to use load balcncer and shit like that
   
    const ipAddress = ipAddresses.split(", ").length > 0 ? ipAddresses.split(", ")[0] : ipAddresses;
    // return res.json({ ipAddress: typeof(ipAddress), ipAddress, status: "Ok" })
    return res.json({ ok: ipAddress });
})

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
    console.log("Server is listening on" + PORT)
})