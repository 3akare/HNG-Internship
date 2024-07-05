require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth")
const organizationRoutes = require("./routes/organization")

const db = require("./models/index");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/auth", authRoutes);
app.use("/api/organization", organizationRoutes);

app.get("/", (req, res) => {
    return res.status(200).json({ status: "success" })
})

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on post: ${PORT}`)
    })
}).catch(error => {
    console.log("Error syncing database:", error);
})
