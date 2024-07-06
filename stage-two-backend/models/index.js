const Sequelize = require("sequelize");
const config = require("../config/config");
const mysql = require("mysql2");
require("dotenv").config();

const env = process.env.NODE_ENV || "development";

const dbConfig = config["development"];

const sequelize = new Sequelize(dbConfig.db, dbConfig.user, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port, // include the port here
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
    dialectModule: mysql,
  pool: dbConfig.pool,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Unable to connect to the database:", err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Organization = require("./organization")(sequelize, Sequelize);
db.UserOrganization = require("./userOrganizations")(sequelize, Sequelize);

// Define associations
db.User.belongsToMany(db.Organization, {
  through: "UserOrganizations",
  foreignKey: "userId",
  as: "organizations", // This alias is important
});

db.Organization.belongsToMany(db.User, {
  through: "UserOrganizations",
  foreignKey: "orgId",
  as: "users",
});

module.exports = db;
