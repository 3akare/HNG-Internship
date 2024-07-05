require("dotenv").config();

module.exports = {
        dialect: "postgres",
        host: "localhost",
        user: "root",
        password: "0987",
        db: "HNG-database",
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
}