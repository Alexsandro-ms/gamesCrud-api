const GamesModel = require("../../models/GamesModel");

const DeleteGame = (req, res) => {
  if (isNaN(req.params.id))
    return res.sendStatus(404).json({ error: true, details: "id not found" });
  const id = parseInt(req.params.id);

  GamesModel.destroy({
    where: {
      id
    }
  })
    .then((id) => {
      if (id == 0) {
        return res
          .sendStatus(404)
          .json({ error: true, details: "id not found" });
      }
      return res
        .sendStatus(200)
        .json({ error: false, details: "Game deleted" });
    })
    .catch((err) => {
      return res.status(400).json({ error: true, details: err });
    });
};

module.exports = DeleteGame;
