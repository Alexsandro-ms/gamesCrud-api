const GamesModel = require("../../models/GamesModel");

const ListGames = (req, res) => {
  GamesModel.findAll()
    .then((games) => {
      res.send(games).statusCode(200);
    })
    .catch((err) =>
      res.send({
        error: true,
        err
      })
    );
};

module.exports = ListGames;
