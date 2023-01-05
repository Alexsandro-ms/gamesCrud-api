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
          return res.status(200).json({ error: false, game });
      })
      .catch((error) => {
        return res.status(404).json({ error: true, details: "id not found" });
      });
  }
};

module.exports = ListGameById;
