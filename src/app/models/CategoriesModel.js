const Sequelize = require("sequelize");
const connetion = require("../../utils/database/dbConnetion");

const CategoriesModel = connetion.define("categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

CategoriesModel.sync();

module.exports = CategoriesModel;
