require("dotenv").config();
const pg = require("pg");

module.exports = {
  development: {
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "0756abwmB$",
    db: process.env.DB_NAME || "hng-database",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {}, 
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
  production: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // port for production
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // for SSL connection
        rejectUnauthorized: false, // to avoid self-signed certificate error
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
