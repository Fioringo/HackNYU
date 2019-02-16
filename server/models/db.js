const Sequelize = require("sequelize");
const db = new Sequelize("postgres://andrey:@localhost/teamme");

module.exports = db;