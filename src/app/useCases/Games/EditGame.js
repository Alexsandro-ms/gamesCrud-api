const GamesModel = require("../../models/GamesModel");

const EditGame = (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(400);
  } else {
    const id = parseInt(req.params.id);
    const { title, year, price } = req.body;

    GamesModel.findByPk(id)
      .then((game) => {
        if (title != undefined) {
          game.title = title;
        }
        if (year != undefined) {
          game.year = year;
        }
        if (price != undefined) {
          game.price = price;
        }

        GamesModel.update(
          {
            title,
            year,
            price
          },
          {
            where: { id }
          }
        ).then(res.sendStatus(200));
      })
      .catch((err) => {
        res.sendStatus(400);
      });
  }
};

module.exports = EditGame;
