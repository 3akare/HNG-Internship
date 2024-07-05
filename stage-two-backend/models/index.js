const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(config.db, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    },
    logging: false
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user")(sequelize, Sequelize);
db.Organization = require("./organization")(sequelize, Sequelize);
db.UserOrganization = require("./userOrganizations")(sequelize, Sequelize);

// Define associations
db.User.belongsToMany(db.Organization, {
    through: 'UserOrganizations',
    foreignKey: 'userId',
    as: 'organizations' // This alias is important
});

db.Organization.belongsToMany(db.User, {
    through: 'UserOrganizations',
    foreignKey: 'orgId',
    as: 'users'
});

module.exports = db;