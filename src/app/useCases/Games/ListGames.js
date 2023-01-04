const GamesModel = require("../../models/GamesModel");

const ListGames = (req, res) => {
  try {
    GamesModel.findAll().then((games) => {
      res.json({ games, statusCode: 200 });
    });
  } catch (error) {
    res.send({
      error: true,
      err
    });
  }
};

module.exports = ListGames;
