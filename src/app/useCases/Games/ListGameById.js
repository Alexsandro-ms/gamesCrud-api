const GamesModel = require("../../models/GamesModel");

const ListGameById = (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    const id = parseInt(req.params.id);
    GamesModel.findOne({
      where: {
        id
      }
    })
      .then((game) => {
        if (game.id != undefined)
          res.json({ error: false, statusCode: 200, game });
      })
      .catch((error) => {
        res.sendStatus(404);
      });
  }
};

module.exports = ListGameById;
