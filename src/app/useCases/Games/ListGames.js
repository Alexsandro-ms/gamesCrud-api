const GamesModel = require("../../models/GamesModel");

const ListGames = (req, res) => {
  try {
    GamesModel.findAll().then((games) => {
      res.status(200).json({ error: false, games });
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      err
    });
  }
};

module.exports = ListGames;
