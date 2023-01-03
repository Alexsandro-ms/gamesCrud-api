const Sequelize = require("sequelize");
const connetion = require("../dbConnetion");

const GamesModel = connetion.define("games", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
});

GamesModel.sync({ forcer: true });

module.exports = GamesModel;
