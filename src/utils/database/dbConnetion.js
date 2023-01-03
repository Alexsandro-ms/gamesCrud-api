const Sequelize = require("sequelize");
require("dotenv").config();

const database_name = process.env.DATABASE_NAME,
  database_username = process.env.DATABASE_USERNAME,
  database_userpassword = process.env.DATABASE_USERPASSWORD;

const connetion = new Sequelize(
  database_name,
  database_username,
  database_userpassword,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false
  }
);

module.exports = connetion;
