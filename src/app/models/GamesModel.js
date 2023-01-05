const Sequelize = require("sequelize");
const connetion = require("../../utils/database/dbConnetion");
const CategoriesModel = require("./CategoriesModel");

const GamesModel = connetion.define("games", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

GamesModel.sync();
CategoriesModel.hasMany(GamesModel); // Uma categoria pode ter múltiplos games.

module.exports = GamesModel;
