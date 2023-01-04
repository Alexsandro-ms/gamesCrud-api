const Sequelize = require("sequelize");
const connetion = require("../../utils/database/dbConnetion");

const GamesModel = connetion.define("games", {
  title: {
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

module.exports = GamesModel;
