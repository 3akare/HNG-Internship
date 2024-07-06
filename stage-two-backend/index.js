require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const organizationRoutes = require("./routes/organization");
const userRoutes = require("./routes/user");

const db = require("./models/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/api/organizations", organizationRoutes);

app.get("/", (req, res) => {
  return res.status(200).json({ status: "success" });
});

app.listen(PORT, async () => {
  db.sequelize
    .sync({ force: false })
    .then(() => {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
    .catch((error) => {
      console.log("Error syncing database:", error);
    });
});
// const server = app.listen(PORT, async () => {
//   db.sequelize
//     .sync({ force: false })
//     .then(() => {
//       console.log(`Server is running on http://localhost:${PORT}`);
//     })
//     .catch((error) => {
//       console.log("Error syncing database:", error);
//     });
// });