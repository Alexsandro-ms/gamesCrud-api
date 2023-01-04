const GamesModel = require("../../models/GamesModel");

const DeleteGame = (req, res) => {
  if (isNaN(req.params.id)) return res.sendStatus(404);
  const id = parseInt(req.params.id);

  GamesModel.destroy({
    where: {
      id
    }
  })
    .then((id) => {
      if (id == 0) {
        return res.sendStatus(404);
      }
      res.sendStatus(200);
    })
    .catch((err) => {
      res.json({ error: err });
    });
};

module.exports = DeleteGame;
